// components/SvgIcon.tsx
interface SvgIconProps {
  className?: string;
  viewBox?: string;
  children: React.ReactNode;
}

export default function SvgIcon({ className, viewBox = "0 0 24 24", children }: SvgIconProps) {
  return (
    <svg 
      className={className} 
      viewBox={viewBox} 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}