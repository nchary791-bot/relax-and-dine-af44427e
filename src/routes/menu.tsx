import { createFileRoute } from "@tanstack/react-router";
import { menu } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — This Is It Cafe" },
      {
        name: "description",
        content:
          "Espresso bar, cold brews, teas and kitchen plates at This Is It Cafe. Americano and Macchiato from ₹99.",
      },
      { property: "og:title", content: "Menu — This Is It Cafe" },
      {
        property: "og:description",
        content: "Espresso, cold brews, teas and fresh plates — from ₹79.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="text-4xl sm:text-5xl">The Menu</h1>
      <p className="mt-3 max-w-lg text-muted-foreground">
        Brewed to order, baked the same morning. Prices include taxes.
      </p>

      <nav className="mt-8 flex flex-wrap gap-2">
        {menu.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {cat.title}
          </a>
        ))}
      </nav>

      <div className="mt-14 space-y-16">
        {menu.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl">{cat.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{cat.blurb}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {cat.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-soft"
                >
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-lg">{item.name}</h3>
                      {item.telugu && (
                        <p className="truncate text-sm text-muted-foreground">{item.telugu}</p>
                      )}
                    </div>
                    <span className="shrink-0 font-display text-lg text-primary">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                  {item.tag && (
                    <span className="mt-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      {item.tag}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
