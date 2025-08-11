import LandingFigure from "@/assets/backgrounds/landing-figure.svg?react";
import { useState } from "react";
import { BreedProgress } from "@/components/BreedProgress";
import TabHeader from "@/components/TabHeader";
import TabSection from "@/components/TabSection";
import StatCard from "@/components/StatCard";
import Footer from "@/components/Footer";
import { 
  topAchievementBreeds, 
  topRatingBreeds, 
  platformStats 
} from "@/data/mockData";

// Tab data
const mainTabs = [
  {
    id: 1,
    name: "Pedigree",
    title: <>Common data in a <span className="text-primary">convenient</span> format</>,
    description: (
      <>
        View and change the pedigree of your pet from any device.
        We've made it comfortable for you.
        <br /><br />
        The convenient format of all data is in your hands. Add or
        edit data is fast and easy.
      </>
    ),
    image: "/images/pedigree-demo.jpg"
  },
  {
    id: 2,
    name: "Site",
    title: <>Fantastic site for your kennel with <span className="text-primary">up-to-date</span> information on it</>,
    description: (
      <>
        Save your time and effort. Your site is{" "}
        <span className="decoration-primary-400 underline decoration-2">here</span>{" "}
        already!
        <br />
        Change different styles of your site or make your one.
        Control what public data you want to show. Manage your site
        quickly and easily.
      </>
    ),
    image: "/images/site-demo.jpg"
  },
  {
    id: 3,
    name: "Kennel",
    title: <>Your breeding work is the <span className="text-primary">foundation</span></>,
    description: (
      <>
        Manage your breeding work in one app. Make less iterative
        manual work and routine. We stand for saving your time for
        more interesting and important work - breeding.
      </>
    ),
    image: "/images/kennel-demo.jpg"
  }
];

export default function LandingRefactored() {
  const [mobileTab, setMobileTab] = useState(1);

  return (
    <div className="pb-26 relative flex w-full min-w-[100vw] flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background SVG */}
      <div className="absolute right-[-30vw] top-[-13vw] w-full md:right-[-47vw] md:top-[-17vw] xxl:top-[-25vw] xxxl:top-[-32vw]">
        <LandingFigure style={{ width: "80%" }} />
      </div>

      {/* Header Placeholder */}
      <div className="z-49 max-w-11xl flex h-16 w-full items-center px-6 lg:px-40 sm:h-20 sm:px-10 xxl:px-60" />

      {/* Main Content */}
      <div className="max-w-11xl relative mt-8 flex w-full min-w-0 flex-auto flex-col items-center px-6 lg:px-40 sm:px-10">
        
        {/* Hero Section */}
        <div className="flex flex-col md:space-x-18 md:pl-22 md:flex-row md:border-l">
          <div className="order-2 flex w-[100%] flex-col justify-center space-y-8 md:order-1 md:w-[70%] sm:space-y-12">
            <div className="flex w-full flex-col">
              <h1 className="font-mono text-5xl font-extrabold tracking-wider md:text-6xl xl:text-7xl">
                United by the popularization of
                <span className="text-primary"> professional </span>
                breeding
              </h1>
              <em className="text-secondary mt-2">
                All necessary for a professional breeder in one app
              </em>
            </div>

            {/* Top Breeds */}
            <div className="text-secondary flex flex-col">
              <p className="mb-5 font-semibold uppercase">
                Top-supported breeds
              </p>
              {topAchievementBreeds.slice(0, 3).map((breed, i) => (
                <BreedProgress breed={breed} key={i} mode="row" />
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-3">
              <a href="/pricing">
                <button
                  type="button"
                  className="w-36 rounded-xl bg-pink-500 px-6 py-4 font-bold leading-tight text-white shadow-lg shadow-pink-300 transition duration-150 ease-in-out active:bg-pink-700 active:shadow-xl active:shadow-pink-300 focus:bg-pink-600 focus:shadow-xl focus:shadow-pink-300 hover:bg-pink-600 hover:shadow-xl hover:shadow-pink-300"
                >
                  Get Started
                </button>
              </a>
              <div className="text-sm font-bold uppercase text-slate-300">
                <p>Free forever</p>
                <p>No credit card</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 mb-6 flex h-auto w-full overflow-hidden rounded-2xl shadow-xl md:order-2 md:mt-0">
            <img
              className="min-h-[100%] min-w-[100%] shrink-0 object-cover"
              src="/images/hero-dogs.jpg"
              alt="Professional dog breeding"
            />
          </div>
        </div>

        {/* Platform Stats */}
        <div className="mt-18 flex w-full flex-col items-center xl:flex-row">
          <div className="text-secondary mb-6 shrink-0 text-start text-4xl font-semibold xl:mb-0 xl:mr-6">
            Best pet's knowledge base
          </div>
          <div className="grid w-full gap-3 md:grid-cols-3 sm:grid-cols-2">
            <StatCard
              value={platformStats.petProfiles}
              label="Pet profiles"
              href="/pets"
              colorClass="from-purple-100"
            />
            <StatCard
              value={platformStats.kennels}
              label="Kennels"
              href="/kennels"
              colorClass="from-blue-100"
            />
            <StatCard
              value={platformStats.events}
              label="Events"
              href="/events"
              colorClass="from-orange-100"
            />
          </div>
        </div>

        {/* Mobile Tabs */}
        <ul className="mt-18 flex list-none overflow-x-auto md:hidden">
          {mainTabs.map(tab => (
            <li key={tab.id}>
              <TabHeader
                value={tab.id}
                activeTab={mobileTab}
                name={tab.name}
                onClick={setMobileTab}
              />
            </li>
          ))}
        </ul>

        {/* Desktop Tab Section */}
        <TabSection
          tabs={mainTabs}
          className="mt-6 md:mt-18"
          actionButton={
            <a href="/pricing">
              <button
                type="button"
                className="bg-primary-400 shadow-primary-300 mt-3 w-36 rounded-xl px-6 py-4 font-bold leading-tight text-white shadow-lg transition duration-150 ease-in-out active:bg-primary-600 active:shadow-primary-300 active:shadow-xl focus:bg-primary focus:shadow-primary-300 focus:shadow-xl hover:bg-primary hover:shadow-primary-300 hover:shadow-xl sm:mt-5 xl:mt-0"
              >
                Get Started
              </button>
            </a>
          }
        />

        {/* Top Breeds by Rating */}
        <div className="mt-22 max-w-screen mb-5 w-full lg:px-0 md:max-w-4xl md:px-6 sm:px-10">
          <div className="text-secondary mb-6 w-full text-center text-4xl font-semibold xl:mb-0 xl:mr-6">
            Top Breeds by Pets Profiles
          </div>
          {topRatingBreeds.slice(0, 5).map((breed, i) => (
            <BreedProgress breed={breed} key={i} simpleView={false} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}