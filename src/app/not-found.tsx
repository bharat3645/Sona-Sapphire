import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__shell">
        <span className="eyebrow">404 · Off-set</span>
        <h1 className="not-found__title">
          That frame
          <br />
          isn&rsquo;t in the reel.
        </h1>
        <p className="not-found__lede">
          The page you tried to reach doesn&rsquo;t exist on this site, or has
          been retired. Roll back to the studio and pick up the scene from
          there.
        </p>
        <Link href="/" className="not-found__cta">
          ← Back to the studio
        </Link>
      </div>
    </main>
  );
}
