import {
  Brain,
  Target,
  Users,
  Lightbulb,
  Shield,
  Rocket,
  Globe,
  Award,
  GraduationCap,
  Briefcase,
  LineChart,
} from "lucide-react";
// import Image from "next/image";
import ServiceCard from "./service-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Azure Partners",
  // description:
  //  "Azure Partners spearheads strategic investments in innovative tech and AI startups, driving long-term growth and market leadership.",
};

const values = [
  {
    icon: <Brain className="h-6 w-6 text-white" />,
    title: "Innovation First",
    description:
      "We push the boundaries of what's possible in AI and technology, always staying ahead of the curve.",
  },
  {
    icon: <Shield className="h-6 w-6  text-white" />,
    title: "Ethical AI",
    description:
      "We believe in developing and implementing AI solutions that are transparent, fair, and beneficial to society.",
  },
  {
    icon: <Users className="h-6 w-6  text-white" />,
    title: "Collaborative Growth",
    description:
      "Success is achieved through strong partnerships and fostering a community of innovation.",
  },
  {
    icon: <Globe className="h-6 w-6  text-white" />,
    title: "Global Impact",
    description:
      "Our solutions and investments create positive change on a global scale.",
  },
];

const achievements = [
  {
    number: "10+",
    label: "Portfolio Companies",
    description: "Successful investments in innovative startups",
  },
  /*{
    number: "$500M",
    label: "Assets Under Management",
    description: "Trust from our investors",
  },*/
  {
    number: "15+",
    label: "Industry Partners",
    description: "Strong network of collaboration",
  },
  {
    number: "500+",
    label: "Students trained",
    description: "Strong educational program",
  },
];

const approach = [
  {
    icon: <Target className="h-8 w-8 text-blue-400" />,
    title: "Strategic Focus",
    description:
      "We concentrate on high-potential areas in AI and technology, identifying opportunities that others might miss.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-400" />,
    title: "Innovation Support",
    description:
      "Beyond capital, we provide technical expertise, market access, and strategic guidance to our portfolio companies.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-blue-400" />,
    title: "Accelerated Growth",
    description:
      "Our hands-on approach and extensive network help companies scale faster and more efficiently.",
  },
];

const services = [
  {
    icon: <LineChart className="h-8 w-8 text-blue-400" />,
    title: "Venture Capital",
    description:
      "Strategic investments in cutting-edge technology and AI startups go beyond capital, encompassing mentorship and industry connections to drive sustainable growth.",
    details: `In addition to investment, Azure Partners engages with venture capital firms to connect entrepreneurs, investors, and AI-focused startups. Throughout a month-long collaboration with a prominent VC firm, our team engaged closely with investors, startup creators, and industry specialists, cultivating relationships between innovators and funding partners.

    This partnership extended beyond conventional funding talks—it included strategic guidance, sector insights, and practical workshops to assist startups in enhancing their AI-based business models, fortifying technological advantages, and achieving effective growth. Azure Partners significantly influences the emergence of the next generation of AI startups by fostering meaningful connections among students, entrepreneurs, and venture capitalists.`,
  },
  {
    icon: <Briefcase className="h-8 w-8 text-blue-400" />,
    title: "Consulting",
    description:
      "Expert guidance in AI strategy, technology implementation, and market analysis enables businesses to navigate the evolving AI landscape and maintain a competitive edge.",
    details:
      "Our consulting services provide comprehensive support for businesses looking to leverage AI technology effectively. We work closely with clients to develop tailored strategies, implement cutting-edge solutions, and optimize their technological infrastructure.",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-blue-400" />,
    title: "Training",
    description:
      "Thorough AI education via mastery courses, practical workshops, and joint research connects theory with real-world application, equipping the upcoming generation of AI leaders.",
    details: `The AI Entrepreneurship Course at Columbia University is a weekly, interdisciplinary program designed to provide students with hands-on experience in applied AI innovation. Bringing together participants from computer science, statistics, and engineering, the course goes beyond theoretical learning, immersing students in real-world AI development, research, and deployment strategies.

    Through structured projects and industry-aligned challenges, students gain expertise in building and training AI agents, benchmarking LLMs, and optimizing model performance across various use cases. The curriculum emphasizes both technical rigor and strategic implementation, allowing participants to experiment with LLM architectures, retrieval-augmented generation (RAG), and AI-driven automation.

    On-site workshops, like our collaboration with TH Capital, provide practical AI applications and hands-on training. These sessions focus on real-world DeepSeek use cases, prompt engineering, automation, and AI-driven workflows.`,
  },
  {
    icon: <Rocket className="h-8 w-8 text-blue-400" />,
    title: "Startup Acceleration",
    description:
      "A structured approach to scaling startups combines funding, mentorship, and access to a vast network of industry leaders, fostering innovation and long-term success.",
    details:
      "Our acceleration program provides comprehensive support for early-stage startups, including funding, mentorship, and access to our extensive network of industry leaders. We focus on helping startups scale effectively and achieve sustainable growth.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex-1 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Hero Section 
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
          alt="About Azure Partners"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Azure Partners
            </h1>
            <p className="text-xl text-blue-100">
              Shaping the future of technology through strategic investments and
              partnerships in AI innovation
            </p>
          </div>
        </div>
      </div>*/}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-start max-w-3xl mb-20">
          <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          <div
            style={{
              height: "2.5px",
              background: "white",
              maxWidth: "1200px",
              marginTop: "10px",
              marginBottom: "50px",
            }}
            className="mb-3"
          ></div>
          <p className="text-xl text-blue-100">
            Azure Partners enhances AI capabilities by connecting pioneering
            research with practical applications. We are concentrating on
            fostering AI-led innovation throughout various sectors via strategic
            investments, specialized consulting, and hands-on training
            initiatives. We enable businesses, entrepreneurs, and engineers to
            utilize AI efficiently, fostering advancement in finance, education,
            robotics, and new technologies.
          </p>
        </div>

        {/* Core Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-start">
            Our Services
          </h2>
          <div
            style={{
              height: "2.5px",
              background: "white",
              maxWidth: "1200px",
              marginTop: "10px",
              marginBottom: "50px",
            }}
            className="mb-12"
          ></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-start">
            Our Values
          </h2>
          <div
            style={{
              height: "2.5px",
              background: "white",
              maxWidth: "1200px",
              marginTop: "10px",
              marginBottom: "50px",
            }}
            className="mb-12"
          ></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-700/50 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-blue-900/50 p-3 rounded-lg inline-block mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-blue-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-start">
            Our Impact
          </h2>
          <div
            style={{
              height: "2.5px",
              background: "white",
              maxWidth: "1200px",
              marginTop: "10px",
              marginBottom: "50px",
            }}
            className="mb-12"
          ></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-700/50 text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-xl font-semibold text-blue-200 mb-2">
                  {achievement.label}
                </div>
                <p className="text-blue-100">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div>
          <h2 className="text-3xl font-bold text-white text-start">
            Our Approach
          </h2>
          <div
            style={{
              height: "2.5px",
              background: "white",
              maxWidth: "1200px",
              marginTop: "10px",
              marginBottom: "50px",
            }}
            className="mb-12"
          ></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approach.map((item, index) => (
              <div
                key={index}
                className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-700/50"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div
        className="relative bg-blue-950/70 backdrop-blur-sm py-20"
        id="contact"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
          <div className="inline-block bg-blue-900/50 p-3 rounded-lg mb-6">
            <Award className="h-8 w-8 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Get in touch!</h2>
          <p className="text-xl text-blue-100 max-w-2xl mb-8">
            Whether you're an innovator, investor, or industry partner, we
            invite you to be part of our journey in advancing technology and AI
            for a better tomorrow.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
