"use client";

import { useState } from "react";

const SKETCHFAB_SRC =
  "https://sketchfab.com/models/c8c3f307e93f4c829d579d1b369e6b02/embed" +
  "?autospin=0.4" +
  "&autostart=1" +
  "&preload=1" +
  "&transparent=1" +
  "&ui_theme=light" +
  "&ui_infos=0" +
  "&ui_controls=0" +
  "&ui_stop=0" +
  "&ui_watermark=1" +
  "&ui_watermark_link=0" +
  "&ui_annotations=0" +
  "&ui_help=0" +
  "&ui_settings=0" +
  "&ui_inspector=0" +
  "&ui_vr=0" +
  "&ui_fullscreen=0" +
  "&ui_ar=0" +
  "&dnt=1";

export default function SketchfabCamera() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 bg-transparent" />
      )}
      <iframe
        title="Camera CANON EOS 400D by Santiago on Sketchfab"
        src={SKETCHFAB_SRC}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full border-0 transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}