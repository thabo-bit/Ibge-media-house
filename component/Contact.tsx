"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Send,
  Calendar,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVar: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const WHATSAPP_NUMBER = "27782185601";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const PACKAGES = [
  {
    id: "ordinary",
    label: "Ordinary Portrait",
    price: "from R600",
    blurb: "30 min – 2 hrs · outdoor or studio",
  },
  {
    id: "birthday",
    label: "Birthday Shoot",
    price: "from R600",
    blurb: "celebrate another year in colour",
  },
  {
    id: "maternity",
    label: "Maternity",
    price: "from R650",
    blurb: "gentle, glowing portraits",
  },
  {
    id: "kids",
    label: "Babies & Kids",
    price: "from R650",
    blurb: "playful, patient sessions",
  },
  {
    id: "graduation",
    label: "Graduation",
    price: "from R600",
    blurb: "milestone portraits that last",
  },
  {
    id: "matric",
    label: "Matric Farewell",
    price: "from R750",
    blurb: "a little more sparkle",
  },
  {
    id: "event-photo",
    label: "Event Photography",
    price: "from R1,500",
    blurb: "family & corporate coverage",
  },
  {
    id: "event-video",
    label: "Event Videography",
    price: "from R3,500",
    blurb: "cinematic trailers & films",
  },
];

const TIME_SLOTS = [
  "09:00",
  "10:30",
  "12:00",
  "13:30",
  "15:00",
  "16:30",
  "18:00",
];

const getToday = () => new Date().toISOString().split("T")[0];
const getMaxDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + 60);
  return d.toISOString().split("T")[0];
};

const formatDate = (iso: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-ZA", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    packageId: "ordinary",
    date: "",
    time: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const selectedPackage = PACKAGES.find((p) => p.id === form.packageId);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (sent) setSent(false);
  };

  const buildMessage = () =>
    `Hi IBGE Media House! I'd like to book a session.\n\n` +
    `Name: ${form.name || "—"}\n` +
    `Email: ${form.email || "—"}\n` +
    `Phone: ${form.phone || "—"}\n` +
    `Package: ${selectedPackage?.label} (${selectedPackage?.price})\n` +
    `Date: ${formatDate(form.date) || "—"}\n` +
    `Time: ${form.time || "—"}\n\n` +
    `${form.message || ""}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(buildMessage());
    window.location.href = `${WHATSAPP_LINK}?text=${text}`;
    setSent(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(buildMessage());
    window.location.href = `${WHATSAPP_LINK}?text=${text}`;
  };

  return (
    <section className="relative bg-[var(--color-cream)] py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-honey)]/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-blush)]/15 blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        className="relative max-w-3xl mx-auto px-6 text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 border border-emerald-500/60 rounded-full px-4 py-2 mb-6">
          <MessageCircle size={12} className="text-emerald-700" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-700 font-semibold">
            Direct Contact with IBGE (Owner)
          </span>
        </div>

        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.1] font-light text-[var(--color-ink)]">
          We Would Love to{" "}
          <em className="italic font-medium text-[var(--color-terracotta)]">
            Welcome You
          </em>
        </h2>
        <p className="mt-7 text-base text-[var(--color-ink-soft)]/70 max-w-xl mx-auto leading-relaxed">
          Have questions about dates, custom sizes, or wardrobe ideas? Chat
          directly with IBGE on WhatsApp for instant replies, or submit your
          details below.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative max-w-3xl mx-auto px-6"
      >
        <motion.div
          variants={itemVar}
          className="bg-white rounded-3xl p-8 md:p-10 border border-[var(--color-ink)]/8 shadow-[0_20px_40px_-20px_rgba(31,27,22,0.1)]"
        >
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-ink)]">
              Book a Session
            </h3>
            <Sparkles
              size={20}
              className="text-[var(--color-honey)] mt-2 shrink-0"
            />
          </div>
          <p className="text-[13px] text-[var(--color-ink-soft)]/70 mb-8 leading-relaxed">
            Pick a package, choose your date and time, and send us the details.
            We&apos;ll confirm within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <StepLabel step="1" label="Choose your session" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {PACKAGES.map((pkg) => {
                  const selected = form.packageId === pkg.id;
                  return (
                    <button
                      type="button"
                      key={pkg.id}
                      onClick={() =>
                        setForm((prev) => ({ ...prev, packageId: pkg.id }))
                      }
                      className={`relative text-left rounded-2xl p-3.5 border transition-all duration-300 ${
                        selected
                          ? "border-[var(--color-terracotta)] bg-[var(--color-terracotta)]/8 shadow-[0_10px_30px_-15px_rgba(224,120,86,0.4)]"
                          : "border-[var(--color-ink)]/10 bg-[var(--color-cream)]/50 hover:border-[var(--color-ink)]/25"
                      }`}
                    >
                      {selected && (
                        <motion.span
                          layoutId="pkg-check"
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[var(--color-terracotta)] flex items-center justify-center"
                        >
                          <Check size={11} className="text-white" strokeWidth={3} />
                        </motion.span>
                      )}
                      <p
                        className={`text-[12px] font-semibold leading-tight mb-1 ${
                          selected
                            ? "text-[var(--color-terracotta)]"
                            : "text-[var(--color-ink)]"
                        }`}
                      >
                        {pkg.label}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-ink-soft)]/60 font-medium mb-1">
                        {pkg.price}
                      </p>
                      <p className="text-[10.5px] leading-snug text-[var(--color-ink-soft)]/70">
                        {pkg.blurb}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <StepLabel step="2" label="Pick a date & time" />
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-[11px] font-semibold text-[var(--color-ink)] mb-2">
                    Preferred date
                  </span>
                  <div className="relative">
                    <Calendar
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-terracotta)] pointer-events-none z-10"
                    />
                    <input
                      type="date"
                      name="date"
                      required
                      min={getToday()}
                      max={getMaxDate()}
                      value={form.date}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[var(--color-cream)]/60 border border-[var(--color-ink)]/12 rounded-xl text-[13px] text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-terracotta)] focus:bg-white transition-colors cursor-pointer appearance-none"
                    />
                  </div>
                  {form.date && (
                    <p className="mt-2 text-[11px] text-[var(--color-terracotta)] font-medium">
                      {formatDate(form.date)}
                    </p>
                  )}
                </label>

                <div>
                  <span className="block text-[11px] font-semibold text-[var(--color-ink)] mb-2">
                    Preferred time
                  </span>
                  <div className="grid grid-cols-4 gap-1.5">
                    {TIME_SLOTS.map((slot) => {
                      const selected = form.time === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() =>
                            setForm((prev) => ({ ...prev, time: slot }))
                          }
                          className={`py-2.5 rounded-lg text-[11.5px] font-medium transition-all duration-300 ${
                            selected
                              ? "bg-[var(--color-ink)] text-[var(--color-cream)] shadow-md"
                              : "bg-[var(--color-cream)]/70 text-[var(--color-ink-soft)] border border-[var(--color-ink)]/10 hover:border-[var(--color-terracotta)]/50 hover:text-[var(--color-terracotta)]"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <StepLabel step="3" label="Your details" />
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full name *">
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Elena Vance"
                      className="w-full px-4 py-3 bg-[var(--color-cream)]/60 border border-[var(--color-ink)]/12 rounded-xl text-[13px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)]/40 focus:outline-none focus:border-[var(--color-terracotta)] focus:bg-white transition-colors"
                    />
                  </Field>
                  <Field label="Email *">
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="elena@example.com"
                      className="w-full px-4 py-3 bg-[var(--color-cream)]/60 border border-[var(--color-ink)]/12 rounded-xl text-[13px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)]/40 focus:outline-none focus:border-[var(--color-terracotta)] focus:bg-white transition-colors"
                    />
                  </Field>
                </div>

                <Field label="Phone / WhatsApp">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+27..."
                    className="w-full px-4 py-3 bg-[var(--color-cream)]/60 border border-[var(--color-ink)]/12 rounded-xl text-[13px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)]/40 focus:outline-none focus:border-[var(--color-terracotta)] focus:bg-white transition-colors"
                  />
                </Field>

                <Field label="Anything else we should know?">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about the shoot you envision, preferred location, outfits…"
                    className="w-full px-4 py-3 bg-[var(--color-cream)]/60 border border-[var(--color-ink)]/12 rounded-xl text-[13px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)]/40 focus:outline-none focus:border-[var(--color-terracotta)] focus:bg-white transition-colors resize-none"
                  />
                </Field>
              </div>
            </div>

            <AnimatePresence>
              {(form.packageId || form.date || form.time) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="rounded-2xl bg-[var(--color-cream)]/70 border border-[var(--color-terracotta)]/20 p-5">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-terracotta)] font-bold mb-3">
                      Your booking at a glance
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-[var(--color-ink)]">
                      <span className="font-semibold">
                        {selectedPackage?.label}
                      </span>
                      <span className="text-[var(--color-ink-soft)]/50">·</span>
                      <span className="text-[var(--color-terracotta)] font-semibold">
                        {selectedPackage?.price}
                      </span>
                      {form.date && (
                        <>
                          <span className="text-[var(--color-ink-soft)]/50">·</span>
                          <span>{formatDate(form.date)}</span>
                        </>
                      )}
                      {form.time && (
                        <>
                          <span className="text-[var(--color-ink-soft)]/50">·</span>
                          <span>{form.time}</span>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="group flex-1 flex items-center justify-center gap-2 bg-[var(--color-honey)] text-[var(--color-ink)] py-4 rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-[var(--color-terracotta)] hover:text-white transition-colors duration-300"
              >
                {sent ? (
                  <>
                    <Check size={14} />
                    Sent via WhatsApp
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send Booking Request
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="flex-1 flex items-center justify-center gap-2 border border-emerald-600 text-emerald-700 py-4 rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-colors duration-300"
              >
                <MessageCircle size={14} />
                Send via WhatsApp Instead
              </button>
            </div>

            {sent && (
              <p className="text-center text-[12px] text-emerald-600 font-medium">
                WhatsApp opened — just hit send to complete your booking.
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

function StepLabel({ step, label }: { step: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-6 rounded-full bg-[var(--color-terracotta)] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
        {step}
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)]">
        {label}
      </span>
      <span className="flex-1 h-px bg-[var(--color-ink)]/8" />
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-semibold text-[var(--color-ink)] mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
