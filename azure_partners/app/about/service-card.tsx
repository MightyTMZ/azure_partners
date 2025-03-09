"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
}

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-700/50">
      <div className="mb-6">{service.icon}</div>
      <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
      <p className="text-blue-100 mb-4">{service.description}</p>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <p className="text-blue-200 whitespace-pre-line">{service.details}</p>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-blue-300 hover:text-blue-100 transition-colors mt-4"
      >
        {isExpanded ? (
          <>
            Show Less
            <ChevronUp className="ml-2 h-4 w-4" />
          </>
        ) : (
          <>
            Learn More
            <ChevronDown className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </div>
  );
}
