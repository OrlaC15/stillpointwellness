// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t p-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Healing Practice Website
    </footer>
  );
}