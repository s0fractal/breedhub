import { useState } from "react";
import TabHeader from "./TabHeader";

interface Tab {
  id: number;
  name: string;
  title: React.ReactNode;
  description: React.ReactNode;
  image: string;
}

interface TabSectionProps {
  tabs: Tab[];
  actionButton?: React.ReactNode;
  className?: string;
}

export default function TabSection({ 
  tabs, 
  actionButton,
  className = ""
}: TabSectionProps) {
  const [activeTab, setActiveTab] = useState(1);
  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <div className={`border-primary-50 flex w-full flex-col overflow-hidden rounded-[3rem] border bg-purple-50/50 pt-6 shadow-md shadow-slate-200 sm:pt-8 xl:pt-16 ${className}`}>
      <div className="px-6 pb-6 md:px-18 sm:px-8 sm:pb-8 xl:px-32 xl:pb-12">
        {/* Tab headers */}
        <ul className="hidden w-[50%] list-none flex-wrap pb-4 pt-3 md:flex">
          {tabs.map(tab => (
            <li key={tab.id}>
              <TabHeader
                value={tab.id}
                activeTab={activeTab}
                name={tab.name}
                onClick={setActiveTab}
              />
            </li>
          ))}
        </ul>

        {/* Tab content */}
        <div className="flex w-full min-w-0 flex-col">
          <div className="xl:space-x-10 flex flex-col xl:flex-row">
            <div className="order-2 flex flex-col space-y-8 xl:order-1">
              <h2 className="mt-6 text-6xl font-semibold">
                {currentTab.title}
              </h2>
              <div className="text-lg leading-8">
                {currentTab.description}
              </div>
            </div>
            <div className="order-1 h-auto min-w-[50%] overflow-hidden rounded-2xl border shadow-lg xl:order-2">
              <img
                className="min-h-[100%] min-w-[100%] shrink-0 object-cover"
                src={currentTab.image}
                alt={currentTab.name}
              />
            </div>
          </div>
        </div>

        {/* Action button */}
        {actionButton}
      </div>
      <div className="bg-primary-100/50 w-full py-10"></div>
    </div>
  );
}