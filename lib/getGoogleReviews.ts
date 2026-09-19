export interface GoogleReview {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export async function getGoogleReviews() {
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

  if (!PLACE_ID || !API_KEY) {
    console.error("Missing Google Places credentials.");
    return { reviews: [] as GoogleReview[], totalCount: 0, averageRating: 0 };
  }

  // ✅ Template literals with ${} — this is what was broken
  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews,user_ratings_total,rating&key=${API_KEY}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.error("Places API error:", res.status, await res.text());
      return { reviews: [] as GoogleReview[], totalCount: 0, averageRating: 0 };
    }
    const data = await res.json();
    return {
      reviews: (data.reviews || []) as GoogleReview[],
      totalCount: data.user_ratings_total || 0,
      averageRating: data.rating || 0,
    };
  } catch (err) {
    console.error("Fetch failed:", err);
    return { reviews: [] as GoogleReview[], totalCount: 0, averageRating: 0 };
  }
}