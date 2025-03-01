"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function InitiativeCard({ icon, title, description }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-700/50 shadow-xl hover:shadow-2xl transition-all">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-900/50 rounded-lg mr-3">{icon}</div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      <div className="relative">
        <p className={`text-blue-100 ${expanded ? "" : "line-clamp-3"}`}>
          {description}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 flex items-center text-blue-300 hover:text-blue-100 transition-colors text-sm font-medium"
        >
          {expanded ? (
            <>
              Show less
              <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Read more
              <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
