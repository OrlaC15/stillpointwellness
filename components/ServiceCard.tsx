// components/ServiceCard.tsx
import { Service } from "@/types/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-xl font-medium">{service.title}</h3>
      <p className="text-sm text-gray-600">{service.description}</p>
    </div>
  );
}