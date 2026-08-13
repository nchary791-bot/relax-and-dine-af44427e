import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { menu } from "@/data/menu";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order Online — This Is It Cafe" },
      {
        name: "description",
        content:
          "Order coffee and fresh plates from This Is It Cafe for pickup or delivery. Americano from ₹99.",
      },
      { property: "og:title", content: "Order Online — This Is It Cafe" },
      { property: "og:description", content: "Pickup or delivery, ready in 15 minutes." },
    ],
  }),
  component: OrderPage,
});

const allItems = menu.flatMap((c) => c.items.map((i) => ({ ...i, category: c.title })));

function OrderPage() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [mode, setMode] = useState<"pickup" | "delivery">("pickup");
  const [category, setCategory] = useState<string>(menu[0]?.title ?? "");

  const visible = allItems.filter((i) => i.category === category);
  const total = useMemo(
    () =>
      Object.entries(cart).reduce((sum, [name, qty]) => {
        const item = allItems.find((i) => i.name === name);
        return sum + (item ? item.price * qty : 0);
      }, 0),
    [cart],
  );
  const count = Object.values(cart).reduce((a, b) => a + b, 0);

  const change = (name: string, delta: number) =>
    setCart((c) => {
      const next = Math.max(0, (c[name] ?? 0) + delta);
      const copy = { ...c };
      if (next === 0) delete copy[name];
      else copy[name] = next;
      return copy;
    });

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="text-4xl sm:text-5xl">Order online</h1>
      <p className="mt-3 max-w-lg text-muted-foreground">
        Pickup is ready in about 15 minutes. Delivery within 5km, free over ₹499.
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            {menu.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.title)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  category === c.title
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {visible.map((item) => (
              <li key={item.name} className="rounded-2xl border border-border bg-card p-5">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                  <h2 className="truncate text-lg">{item.name}</h2>
                  <span className="shrink-0 font-display text-primary">₹{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                <div className="mt-4">
                  {cart[item.name] ? (
                    <div className="inline-flex items-center gap-3 rounded-full border border-primary px-2 py-1">
                      <button
                        type="button"
                        aria-label={`Remove one ${item.name}`}
                        onClick={() => change(item.name, -1)}
                        className="grid h-7 w-7 place-items-center rounded-full text-primary hover:bg-accent"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-4 text-center text-sm font-medium">
                        {cart[item.name]}
                      </span>
                      <button
                        type="button"
                        aria-label={`Add one ${item.name}`}
                        onClick={() => change(item.name, 1)}
                        className="grid h-7 w-7 place-items-center rounded-full text-primary hover:bg-accent"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => change(item.name, 1)}
                      className="rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-accent"
                    >
                      Add
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-3xl border border-border bg-card p-6 shadow-soft lg:sticky lg:top-24">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="text-xl">Your order</h2>
          </div>

          <div className="mt-4 flex gap-2">
            {(["pickup", "delivery"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`flex-1 rounded-full border px-3 py-2 text-sm capitalize transition-colors ${
                  mode === m
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground"
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {count === 0 ? (
            <p className="mt-6 text-sm text-muted-foreground">
              Nothing here yet. Start with an{" "}
              <Link to="/menu" className="text-primary hover:underline">
                Americano
              </Link>
              .
            </p>
          ) : (
            <>
              <ul className="mt-5 space-y-3 text-sm">
                {Object.entries(cart).map(([name, qty]) => {
                  const item = allItems.find((i) => i.name === name)!;
                  return (
                    <li key={name} className="flex items-baseline justify-between gap-3">
                      <span className="min-w-0 truncate text-muted-foreground">
                        {qty} × {name}
                      </span>
                      <span className="shrink-0">₹{item.price * qty}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-5 flex items-baseline justify-between border-t border-border pt-4">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="font-display text-xl text-primary">₹{total}</span>
              </div>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Checkout · {mode}
              </button>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
