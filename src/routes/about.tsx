import { createFileRoute } from "@tanstack/react-router";
import aboutImage from "@/assets/about-cafe.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — This Is It Cafe" },
      {
        name: "description",
        content:
          "How This Is It Cafe started: fresh beans, a green room full of daylight, and a promise of unhurried mornings.",
      },
      { property: "og:title", content: "About Us — This Is It Cafe" },
      {
        property: "og:description",
        content: "A green, daylit room built for unhurried coffee.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Strength", text: "Our double shot carries 99mg of caffeine — a steady, honest lift." },
  { title: "Variety", text: "We taste dozens of lots each season and pour only the best three." },
  { title: "Perfection", text: "99g of coffee to 1.6L of water. Same cup, every single time." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="text-4xl sm:text-5xl">About us</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        We opened This Is It Cafe with one small idea: a room where the coffee is serious and
        nothing else is. Plants on every ledge, daylight through the windows, and a barista who
        remembers how you take it.
      </p>

      <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-soft">
        <img
          src={aboutImage}
          alt="Interior of This Is It Cafe with hanging plants and light wood tables"
          width={1400}
          height={1000}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl">{v.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl">Where to find us</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            12 Garden Lane, Jubilee Hills, Hyderabad 500033. Street parking behind the building,
            and yes — the corner table by the window is real.
          </p>
        </div>
        <div>
          <h2 className="text-2xl">Say hello</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            hello@thisisitcafe.in
            <br />
            +91 98765 43210
          </p>
        </div>
      </section>
    </div>
  );
}
