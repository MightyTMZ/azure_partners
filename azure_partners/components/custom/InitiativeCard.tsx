interface InitiativeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function InitiativeCard({ icon, title, description }: InitiativeCardProps) {
  return (
    <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-700/50 shadow-xl hover:shadow-2xl transition-all">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-900/50 rounded-lg mr-3">{icon}</div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-blue-100">{description}</p>
    </div>
  );
}
