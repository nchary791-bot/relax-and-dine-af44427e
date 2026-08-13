import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <h3 className="font-display text-xl">This Is It Cafe</h3>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Slow mornings, fresh brews and a quiet corner that always has your name on it.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-medium">Visit</p>
          <p className="mt-2 text-muted-foreground">
            Plot no 185, Survey No 218, 1/2, 5th Ave,
            <br />
            Vayupuri, Sainikpuri, Secunderabad,
            <br />
            Telangana 500094
          </p>
          <p className="mt-2 text-muted-foreground">Open daily · 7:30am – 11pm</p>
        </div>
        <div className="text-sm">
          <p className="font-medium">Explore</p>
          <div className="mt-2 flex flex-col gap-1 text-muted-foreground">
            <Link to="/menu" className="hover:text-primary">
              Menu
            </Link>
            <Link to="/reserve" className="hover:text-primary">
              Reserve a table
            </Link>
            <Link to="/order" className="hover:text-primary">
              Order online
            </Link>
            <Link to="/about" className="hover:text-primary">
              About us
            </Link>
          </div>
        </div>
      </div>
      <p className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} This Is It Cafe. Brewed fresh, always.
      </p>
    </footer>
  );
}
