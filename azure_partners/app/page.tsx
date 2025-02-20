import { ArrowRight, Brain, Briefcase, Cpu, GraduationCap, LineChart, Rocket, Users } from 'lucide-react';
import Image from 'next/image';

const partners = [
  {
    name: 'Columbia University',
    logo: 'https://miro.medium.com/v2/resize:fit:1024/0*3qIWoFnZgVUtsXB-.png',
  },
  {
    name: 'Y Combinator',
    logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'OpenAI',
    logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'Microsoft',
    logo: 'https://images.unsplash.com/photo-1642132652075-2f0d736c2b6e?auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'Anthropic',
    logo: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=200&h=100&q=80',
  },
];

const focusAreas = [
  {
    title: 'Venture Capital',
    icon: <LineChart className="h-6 w-6" />,
    description: 'Invest in the future of technology',
  },
  {
    title: 'Consulting',
    icon: <Briefcase className="h-6 w-6" />,
    description: 'Strategic guidance for growth',
  },
  {
    title: 'Training',
    icon: <GraduationCap className="h-6 w-6" />,
    description: 'Expert-led AI education',
  },
  {
    title: 'Startup Acceleration',
    icon: <Rocket className="h-6 w-6" />,
    description: 'Fast-track your success',
  },
];

export default function Home() {
  return (
    <main className="flex-1 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold animate-title inline-block mb-6">
            Azure Partners
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Spearheading strategic investments in innovative tech and AI startups, 
            driving long-term growth and market leadership through venture capital, 
            AI expertise, and strategic consulting.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            {focusAreas.map((area) => (
              <button
                key={area.title}
                className="group flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors mb-3">
                  {area.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{area.title}</h3>
                <p className="text-sm text-blue-200">{area.description}</p>
              </button>
            ))}
          </div>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 transition-colors">
            Get started with us
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Core Focus Areas */}
      <section className="py-16 bg-blue-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Our Core Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FocusCard 
              icon={<LineChart className="h-8 w-8 text-blue-400" />}
              title="Venture Capital"
              description="Strategic investments in cutting-edge technology and AI startups, providing capital and expertise for sustainable growth."
            />
            <FocusCard 
              icon={<Brain className="h-8 w-8 text-blue-400" />}
              title="AI Innovation"
              description="Developing and implementing advanced AI solutions, from research to production-ready applications."
            />
            <FocusCard 
              icon={<Users className="h-8 w-8 text-blue-400" />}
              title="Strategic Consulting"
              description="Expert guidance in AI strategy, go-to-market planning, and technology implementation."
            />
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-16 bg-blue-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Current Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InitiativeCard 
              icon={<GraduationCap className="h-6 w-6 text-blue-400" />}
              title="Columbia University AI Mastery"
              description="Comprehensive AI education program in partnership with Columbia University."
            />
            <InitiativeCard 
              icon={<Rocket className="h-6 w-6 text-blue-400" />}
              title="Startup Acceleration"
              description="Supporting YC companies with content strategy and market access."
            />
            <InitiativeCard 
              icon={<Cpu className="h-6 w-6 text-blue-400" />}
              title="Research Programs"
              description="Student research initiatives in robotics, financial AI, and personal AI applications."
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="relative group"
              >
                <div className="aspect-[2/1] relative overflow-hidden rounded-lg bg-white shadow-md p-4 transition-all duration-300 group-hover:shadow-xl">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale opacity-75 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
                <p className="mt-2 text-sm text-center text-blue-800 font-medium opacity-75 group-hover:opacity-100 transition-opacity">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function FocusCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-lg border border-blue-700/50 shadow-xl transition-transform hover:scale-105">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
}

function InitiativeCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-700/50 shadow-xl hover:shadow-2xl transition-all">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-900/50 rounded-lg mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-blue-100">{description}</p>
    </div>
  );
}