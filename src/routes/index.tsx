import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Clock, Sprout } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";
import { menu } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "This Is It Cafe — Fresh Brews, Slow Mornings" },
      {
        name: "description",
        content:
          "A calm neighbourhood cafe in Hyderabad. Fresh coffee, garden plates, table reservations and online orders.",
      },
      { property: "og:title", content: "This Is It Cafe — Fresh Brews, Slow Mornings" },
      {
        property: "og:description",
        content: "Fresh coffee, garden plates, easy reservations and online orders.",
      },
    ],
  }),
  component: Home,
});

const highlights = [
  {
    icon: Sprout,
    title: "Fresh every morning",
    text: "Beans roasted weekly, bakes out of the oven before 8am.",
  },
  {
    icon: Leaf,
    title: "A room that breathes",
    text: "Plants, daylight and slow music. No rush, no queue noise.",
  },
  {
    icon: Clock,
    title: "Open 7:30am – 11pm",
    text: "Early filter coffee or a late dessert — the door is open.",
  },
];

function Home() {
  const featured = (menu[0]?.items ?? []).slice(0, 3);

  return (
    <div>
      <section className="grain-bg">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-24">
          <div className="min-w-0">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-foreground">
              Hyderabad · Since 2019
            </span>
            <h1 className="mt-5 text-4xl leading-tight sm:text-5xl md:text-6xl">
              Fresh coffee,
              <br />
              slower mornings.
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
              This Is It Cafe is a light-filled corner for good brews, garden plates and the kind of
              quiet that makes you stay a second hour.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/reserve"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
              >
                Reserve a table
              </Link>
              <Link
                to="/order"
                className="rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-accent"
              >
                Order online
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <img
              src={heroImage}
              alt="A cup of black coffee on a cream linen table"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-2xl border border-border bg-card p-6">
              <h.icon className="h-6 w-6 text-leaf" />
              <h3 className="mt-4 text-lg">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-3xl sm:text-4xl">From the espresso bar</h2>
            <p className="mt-2 text-sm text-muted-foreground">Everyday favourites, priced kindly.</p>
          </div>
          <Link to="/menu" className="shrink-0 text-sm font-medium text-primary hover:underline">
            Full menu →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {featured.map((item) => (
            <div key={item.name} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-xl">{item.name}</h3>
                <span className="font-display text-lg text-primary">₹{item.price}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12">
          <h2 className="text-3xl sm:text-4xl">Your table is waiting</h2>
          <p className="mx-auto mt-3 max-w-md text-sm opacity-90">
            Window seats fill up fast on weekends. Book ahead and we'll keep the good one free.
          </p>
          <Link
            to="/reserve"
            className="mt-7 inline-block rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Reserve now
          </Link>
        </div>
      </section>
    </div>
  );
}
