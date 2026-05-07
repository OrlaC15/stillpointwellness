/// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 border-b">
      <div className="font-bold">Dr Lisa Style Site</div>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/therapy">Therapy</Link>
        <Link href="/events">Events</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}