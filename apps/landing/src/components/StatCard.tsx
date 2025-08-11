interface StatCardProps {
  value: number | string;
  label: string;
  href: string;
  colorClass: string;
  icon?: React.ReactNode;
}

export default function StatCard({ 
  value, 
  label, 
  href, 
  colorClass,
  icon 
}: StatCardProps) {
  return (
    <a
      href={href}
      className={`
        flex flex-col items-center rounded-l-full 
        bg-gradient-to-r to-transparent px-4 py-3 
        transition-all duration-200 hover:scale-105
        ${colorClass}
      `}
    >
      {icon && (
        <div className="mb-2 text-2xl opacity-70">
          {icon}
        </div>
      )}
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-secondary text-lg font-semibold uppercase">
        {label}
      </span>
    </a>
  );
}