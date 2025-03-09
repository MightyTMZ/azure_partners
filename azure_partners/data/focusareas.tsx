import { LineChart, Briefcase, GraduationCap, Rocket } from "lucide-react";

export const focusAreas = [
  {
    title: "Venture Capital",
    icon: <LineChart className="h-6 w-6" />,
    description:
      "Spearhead strategic investments in innovative tech and AI startups, driving long-term growth and market leadership.",
  },
  {
    title: "Consulting",
    icon: <Briefcase className="h-6 w-6" />,
    description:
      "Deliver tailored advisory on go-to-market strategies, scaling operations, and achieving global market success.",
  },
  {
    title: "Training",
    icon: <GraduationCap className="h-6 w-6" />,
    description: `
    AI training through strategic partnerships with VCs,
     accelerators, and industry leaders, equipping 
     professionals with hands-on AI experience, 
     LLM assessments, and real-world applications.

    `,
  },
  {
    title: "Startup Acceleration",
    icon: <Rocket className="h-6 w-6" />,
    description: `
    Supporting early-stage AI startups through mentorship, consulting, 
    and industry connections. 

    `,
  },
];
