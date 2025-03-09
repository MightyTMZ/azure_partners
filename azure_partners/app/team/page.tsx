import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import Andrew from "../../public/team/andrew.jpg";
import Tom from "../../public/team/tom.jpg";
import Jessie from "../../public/team/Jessie.jpg";
// import Ani from "../../public/team/Ani.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team - Azure Partners",
  // description:
  //  "Azure Partners spearheads strategic investments in innovative tech and AI startups, driving long-term growth and market leadership.",
};



const team = [
  {
    name: "Andrew Zhang",
    role: "CEO & Founding Partner",
    image: Andrew,
    bio: `
    Andrew Zhang is a partner at Epsilla, a YC ’23 AI startup, where he leads the Go-to-Market strategy. He has previously worked at Amazon, IBM, and various Silicon Valley startups. Andrew specializes in product-market fit consulting for AI startups and has taught data science and machine learning at Rutgers Business School. He co-authored Hyperledger Cookbook and is currently writing A Practical Guide to Ollama: Running LLMs and SLMs Locally for Packt Publishing.
    
    In his early career, Andrew served as a tech lead overseeing one of the largest internet platforms. More recently, he has been spearheading an innovative AI program at Columbia University.

    `,
    linkedin: "https://www.linkedin.com/in/andrew-zhang-617467/",
    email: "andrew@azurepartners.ai",
  },
  {
    name: "Tom Zhang",
    role: "Founding Engineer",
    image: Tom,
    bio: `
    AI entrepreneur and founding engineer of OrbitView, pioneering an AI-powered mentorship hub. Expertise in generative AI, prompt engineering, and open-source AI solutions.

    `,
    linkedin: "https://www.linkedin.com/in/tom-zhang-485341274/",
    email: "tom.zhang.career@hotmail.com",
  },
  {
    name: "Jessie Gao",
    role: "COO",
    image: Jessie,
    bio: `
   Marketing and business strategist with expertise in AI-driven content, sales strategy, and product management. Previously led CRM campaigns at Shopee Singapore and business operations at JD.com. Experience in AI applications across legal, healthcare, and research sectors. Alumna of National University of Singapore and Columbia University.
    `,
    linkedin: "https://www.linkedin.com/in/jessie-gao-hongjie/",
    email: "hg2682@columbia.edu",
    
  },
  
];

export default function TeamPage() {
  return (
    <div className="flex-1 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Meet the experts and visionaries behind Azure Partners, bringing
            together decades of experience in AI, venture capital, and
            technology innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative bg-blue-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-700/50 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className="aspect-square relative overflow-hidden max-w-[240px] mx-auto">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 240px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-200 font-medium mb-3">{member.role}</p>
                <p className="text-blue-100 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                  {member.bio}
                </p>

                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    className="p-2 rounded-full bg-blue-700/50 hover:bg-blue-600/50 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5 text-blue-100" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-full bg-blue-700/50 hover:bg-blue-600/50 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5 text-blue-100" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
