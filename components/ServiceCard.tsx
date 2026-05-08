// components/ServiceCard.tsx
import { Service } from "@/types/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{service.title}</h3>
      <p className="mt-2 text-gray-600">{service.description}</p>

      {service.tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}