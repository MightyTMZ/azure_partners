import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import Andrew from "../../public/team/andrew.jpg";
import Tom from "../../public/team/tom.jpg";
import Jessie from "../../public/team/jessie.jpg";
import Ani from "../../public/team/ani.png";
// import Ani from "../../public/team/Ani.jpg";
import { Metadata } from "next";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";

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
    Andrew Zhang is the CEO and founding partner of Azure Partners, specializing in Go-to-Market (GTM) strategy for AI startups. He is a GTM expert with deep expertise in AI and machine learning, advising companies on scaling Generative AI solutions. Andrew is also a partner at Epsilla, a Y Combinator ’23 startup focused on Retrieval-Augmented Generation (RAG) and AI agents.
Previously, he led AI initiatives at Amazon, IBM, and Silicon Valley startups, with a track record in product-market fit consulting. He has taught data science and machine learning at Rutgers Business School and is currently spearheading an AI Mastery program at Columbia University. A recognized AI speaker and author, Andrew co-authored Hyperledger Cookbook and is currently writing A Practical Guide to Ollama: Running LLMs and SLMs Locally (expected Q2 2025).

    `,
    linkedin: "https://www.linkedin.com/in/andrew-zhang-617467/",
    email: "andrew@azurepartners.ai",
  },
  {
    name: "Tom Zhang",
    role: "Founding Engineer",
    image: Tom,
    bio: `
    Tom Zhang is the founding engineer of OrbitView, pioneering an AI-powered mentorship hub. Expertise in generative AI, prompt engineering, and open-source AI solutions.

    `,
    linkedin: "https://www.linkedin.com/in/tom-zhang-485341274/",
    website: "https://www.tomzhang.info/",
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
  {
    name: "Aniruddha Mukherjee",
    role: "-",
    image: Ani,
    bio: `Aniruddha Mukherjee is currently a junior majoring in Computer Science at 
    Kalinga Institute of Industrial Technology (KIIT), where he ranks at the top of his class. 
    He is also pursuing a BS in Data Science with the Indian Institute of Technology, Madras (IIT-M) 
    in an online format. He has interned at various research institutions like BITS Pilani, Tata Consultancy 
    Services Research and The University of Texas at Austin. He is passionate about solving problems and has explored
     solutions in quantitative finance, healthcare, anomaly-detection and image quality assessment leading to presentations 
     and publications at venues like IEEE Transactions, ACM's International Conference on AI in Finance (ICAIF'24) and Springer’s
      Cognitive Computation. Aniruddha’s drive to build and create impactful solutions has led him to win three hackathons
       hosted by Indian Institutes of Technology (IITs) and co-author two filed patents on real-world solutions using AI.
        He also has been working closely with SkinAI, a New Delhi based startup, and with IIT-Kharagpur as a collaborator
         with the Department of Artificial Intelligence. Outside of academics, he is a Grade 8 pianist (ABRSM), enjoys 
         playing football, tennis and chess, and enjoys debating. Aniruddha has volunteered for Stanford as an Instructor 
         (CS106A) to teach CS basics. He is enthusiastic about utilizing technology and engineering to make a significant and
          meaningful impact in the lives of individuals. Looking ahead, he is interested in pursuing a Master’s in Computer Science (MSCS) followed by a PhD.`,
    linkedin: "https://www.linkedin.com/in/jessie-gao-hongjie/",
    email: "mukh.aniruddha@gmail.com",
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
                  <Link
                    href={member.linkedin}
                    className="p-2 rounded-full bg-blue-700/50 hover:bg-blue-600/50 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5 text-blue-100" />
                  </Link>
                  <Link
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-full bg-blue-700/50 hover:bg-blue-600/50 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5 text-blue-100" />
                  </Link>
                  {member.website ? (
                    <Link
                      href={`${member.website}`}
                      className="p-2 rounded-full bg-blue-700/50 hover:bg-blue-600/50 transition-colors"
                      aria-label={`Website ${member.name}`}
                    >
                      <FaGlobe className="h-5 w-5 text-blue-100" />
                    </Link>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
