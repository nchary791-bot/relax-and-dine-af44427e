import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — This Is It Cafe" },
      {
        name: "description",
        content:
          "Book a window seat at This Is It Cafe. Pick a date, time and party size — we'll keep it ready.",
      },
      { property: "og:title", content: "Reserve a Table — This Is It Cafe" },
      { property: "og:description", content: "Book a window seat in a few taps." },
    ],
  }),
  component: ReservePage,
});

const times = ["08:00", "09:30", "11:00", "13:00", "15:30", "17:00", "19:00", "20:30"];

const inputClass =
  "mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

function ReservePage() {
  const [done, setDone] = useState(false);
  const [slot, setSlot] = useState(times[2]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="text-4xl sm:text-5xl">Reserve a table</h1>
      <p className="mt-3 text-muted-foreground">
        Tables are held for 15 minutes past the booking time. Groups over 8, give us a call.
      </p>

      {done ? (
        <div className="mt-10 rounded-3xl border border-border bg-card p-10 text-center shadow-soft">
          <CheckCircle2 className="mx-auto h-10 w-10 text-leaf" />
          <h2 className="mt-4 text-2xl">Table requested</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We'll confirm on WhatsApp within a few minutes. See you at {slot}.
          </p>
          <button
            type="button"
            onClick={() => setDone(false)}
            className="mt-6 rounded-full border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-accent"
          >
            Make another booking
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Full name
              <input required placeholder="Your name" className={inputClass} />
            </label>
            <label className="block text-sm font-medium">
              Phone
              <input required type="tel" placeholder="+91 " className={inputClass} />
            </label>
            <label className="block text-sm font-medium">
              Date
              <input required type="date" className={inputClass} />
            </label>
            <label className="block text-sm font-medium">
              Guests
              <select className={inputClass} defaultValue="2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="mt-6 text-sm font-medium">Time</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {times.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSlot(t)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  slot === t
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <label className="mt-6 block text-sm font-medium">
            Anything we should know?
            <textarea rows={3} placeholder="Birthday, high chair, quiet corner…" className={inputClass} />
          </label>

          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            Request table
          </button>
        </form>
      )}
    </div>
  );
}
