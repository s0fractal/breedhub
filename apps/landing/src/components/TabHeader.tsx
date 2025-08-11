interface TabHeaderProps {
  value: number;
  activeTab: number;
  name: string;
  onClick: (value: number) => void;
}

export default function TabHeader({ 
  value, 
  activeTab, 
  name, 
  onClick 
}: TabHeaderProps) {
  const isActive = activeTab === value;
  
  return (
    <div className="mr-2 flex shrink-0 text-center last:mr-0">
      <button
        className={`
          block px-5 py-3 font-bold uppercase leading-normal
          transition-all duration-200
          ${isActive 
            ? "text-primary border-b-2 border-primary" 
            : "text-slate-400 hover:text-slate-600"
          }
        `}
        tabIndex={0}
        onClick={() => onClick(value)}
        aria-selected={isActive}
        role="tab"
      >
        {name}
      </button>
    </div>
  );
}