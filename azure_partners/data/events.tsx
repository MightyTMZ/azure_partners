import { Event } from "@/types/Event";
import { LineChart } from "lucide-react";
import Image from "next/image";
import ollama_logo_white from "../public/ollama_logo_white.png";
import columbia from "../public/columbia_u_white_logo.png";

export const events: Event[] = [
{
    icon: <Image src={columbia} alt={"Columbia University"} height={30} />,
    title: "Columbia University's AI Mastery Program",
    description: `
    A weekly cross-disciplinary program aimed at equipping students with practical 
    experience in applied AI innovation. Individuals from computer 
    science, statistics, and engineering are involved in actual AI
     development initiatives, participate in LLM assessments, and 
     investigate AI applications in various sectors. The program 
     focuses on practical experimentation, research-oriented 
     problem-solving, and teamwork with industry experts. 
`,
  },
  {
    icon: <Image src={ollama_logo_white} alt={"Ollama"} height={30} />,
    title: "Ollama Hackathon",
    description: `
    The Ollama Hackathon is a leading event 
    bringing together developers, researchers, 
    and industry professionals to foster AI 
    innovation. Participants explore LLMs and 
    AI agents, creating applications driven 
    by AI in finance, education, and robotics.
     The hackathon offers guidance from venture 
     capitalists and AI experts, delivering insights
      on commercialization, scalability, and 
      implementation tactics, 
    promoting practical AI applications. `,
  },
  {
    icon: <LineChart className="h-6 w-6" style={{ color: "white" }} />,
    title: "On-Site AI Workshops with Venture Capital Firms ",
    description: `
    Centered around DeepSeek-enabled applications, 
    these workshops offer thorough, practical training 
    in prompt engineering, AI-based automation, and 
    sophisticated data processing methods. Participants 
    analyze actual case studies and take part in hands-on
     problem-solving initiatives, utilizing AI solutions 
     in finance, education, and business automation. 
`,
  },
];
