import { ReactNode } from "react";

interface FocusCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FocusCard({ icon, title, description }: FocusCardProps) {
  return (
    <div className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-lg border border-blue-700/50 shadow-xl transition-transform hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
}
