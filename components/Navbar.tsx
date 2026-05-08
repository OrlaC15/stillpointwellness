/// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 border-b">
      <div className="font-bold">Stillpoint Wellness - Orla Cullen</div>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/therapy">Therapy</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}