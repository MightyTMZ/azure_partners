"use client";

import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import Image from "next/image";

const pastEvents = [
  {
    id: 1,
    title: "AI Innovation Summit 2024",
    date: "December 15, 2024",
    location: "New York City, NY",
    description:
      "A groundbreaking conference that brought together industry leaders to discuss the future of AI in business. Featured keynote speakers from top tech companies and innovative startups.",
    attendees: 500,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Keynote speech on RAG technologies",
      "Panel discussion on AI ethics",
      "Networking session with industry leaders",
      "Startup showcase featuring 20 companies",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    id: 2,
    title: "Robotics Workshop Series",
    date: "November 10-12, 2024",
    location: "San Francisco, CA",
    description:
      "A three-day intensive workshop series focused on practical applications of robotics in various industries. Participants gained hands-on experience with cutting-edge robotics technology.",
    attendees: 200,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Hands-on robotics programming sessions",
      "Industry case studies presentation",
      "Interactive demos and exhibitions",
      "Networking dinner with robotics experts",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    id: 3,
    title: "FinTech Future Conference",
    date: "October 25, 2024",
    location: "Boston, MA",
    description:
      "An exclusive conference exploring the intersection of AI and financial technology. Industry experts shared insights on the future of financial services and emerging technologies.",
    attendees: 300,
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "AI in trading systems presentation",
      "Blockchain technology workshop",
      "RegTech innovation showcase",
      "Investment strategies roundtable",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=400&q=80",
    ],
  },
];

export default function EventsPage() {
  return (
    <div className="flex-1 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80"
          alt="Events hero image"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Past Events
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
              Relive the past moments and events we have had here at Azure
              Partners
            </p>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-blue-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-700/50"
            >
              {/* Main Event Image */}
              <div className="relative h-[400px]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {event.title}
                </h2>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center text-blue-200">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                </div>

                <p className="text-blue-100 mb-8">{event.description}</p>

                {/* Event Highlights */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Event Highlights
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {event.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-center text-blue-200"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Event Gallery */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Event Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {event.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-video rounded-lg overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${event.title} gallery image ${index + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
