'use client';

import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founding Partner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'Former VP of AI at Microsoft, Sarah brings over 15 years of experience in technology leadership and venture capital. She has led investments in over 30 successful AI startups.',
    linkedin: '#',
    email: 'sarah@azurepartners.ai'
  },
  {
    name: 'David Rodriguez',
    role: 'Managing Partner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'With a background in quantum computing and AI research at IBM, David focuses on identifying breakthrough technologies and supporting early-stage startups.',
    linkedin: '#',
    email: 'david@azurepartners.ai'
  },
  {
    name: 'Emily Zhang',
    role: 'Partner, AI Strategy',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'PhD in Machine Learning from Stanford, Emily leads our AI strategy consulting practice and has helped scale multiple unicorn startups in the AI space.',
    linkedin: '#',
    email: 'emily@azurepartners.ai'
  },
  {
    name: 'Marcus Thompson',
    role: 'Partner, Investments',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'Former founder and angel investor, Marcus has a proven track record of identifying promising AI startups. He leads our early-stage investment strategy.',
    linkedin: '#',
    email: 'marcus@azurepartners.ai'
  },
  {
    name: 'Aisha Patel',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'With extensive experience in operations at top VC firms, Aisha ensures smooth execution of our investment strategy and portfolio company support.',
    linkedin: '#',
    email: 'aisha@azurepartners.ai'
  },
  {
    name: 'James Wilson',
    role: 'Technical Partner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'Previously CTO at multiple successful startups, James provides technical due diligence and hands-on support to our portfolio companies.',
    linkedin: '#',
    email: 'james@azurepartners.ai'
  }
];

export default function TeamPage() {
  return (
    <div className="flex-1 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Meet the experts and visionaries behind Azure Partners, bringing together decades of experience in AI, venture capital, and technology innovation.
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
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
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