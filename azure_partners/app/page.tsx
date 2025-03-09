import { ArrowRight, Brain, LineChart, Users } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { FocusCard } from "@/components/custom/FocusCard";
import { InitiativeCard } from "@/components/custom/InitiativeCard";
import { partners } from "@/data/partners";
// import { focusAreas } from "@/data/focusareas";
import { historyTimeline } from "@/data/historyTimeline";
import { focusAreas } from "@/data/focusareas";
import { events } from "@/data/events";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex-1 bg-gradient-to-b">
      {/* Hero Section */}
      <section className={`${styles.hero}`}>
        <div className="text-center">
          <h1 className="text-5xl font-bold animate-title inline-block mb-6">
            Azure Partners
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            AI Enablement, Research, and Industry Collaboration.
          </p>
          {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
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
          </div> */}
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 transition-colors">
            Get started with us
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
      <section
        className={`${styles.journey} ${styles[""]} py-16 bg-blue-950/70 backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <div
                style={{
                  background: "white",
                  height: "2px",
                  margin: "5px 0 10px 0",
                  maxWidth: "200px",
                }}
              ></div>
              <p className="text-blue-100 text-lg mb-6">
                Azure Partners was established with a vision to transform how
                businesses leverage AI technology. From our humble beginnings
                focused on AI agents and RAG technologies, we've evolved into a
                comprehensive investment and innovation partner for the most
                promising tech ventures.
              </p>
              <div className="flex items-center">
                <div
                  className={
                    styles.animatedCheck +
                    "p-3 rounded-full bg-blue-800/70 mr-4"
                  }
                  style={{
                    color: "white",
                  }}
                >
                  <FaCheckCircle />
                </div>
                <p className="text-blue-200 italic">
                  "Building the future of AI, one partnership at a time."
                </p>
              </div>
            </div>
            <div className="md:w-1/2 pl-0 md:pl-12">
              <div className="relative">
                {historyTimeline.map((item, index) => (
                  <div key={index} className="mb-8 relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-500/50"></div>
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-400 border-4 border-blue-900"></div>
                    <div className="bg-blue-800/40 backdrop-blur-sm p-5 rounded-lg border border-blue-700/50">
                      <div className="flex items-center mb-2">
                        {/*<span className="text-blue-300 font-bold mr-3">
                          {item.year}
                        </span>*/}
                        <h3 className="text-white font-semibold">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-blue-100">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section
        className={`${styles["focus-areas"]} py-16 bg-blue-950/50 backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Core Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <FocusCard
                key={index}
                icon={area.icon}
                title={area.title}
                description={area.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section
        className={`${styles.events} py-16 bg-blue-900/50 backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Key Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <InitiativeCard
                key={index}
                icon={event.icon}
                title={event.title}
                description={event.description}
              />
            ))}
          </div>
          <div style={{ height: "20px" }}>
            {/* an temporary div to have a margin */}
          </div>
          <a href="/past-events" className={`${styles.pastEventsLink} mt-4`}>
            View past events &#8594;
          </a>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="relative group">
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
