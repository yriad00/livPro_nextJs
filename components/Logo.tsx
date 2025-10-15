export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle cx="50" cy="50" r="48" fill="#d42631" />
      
      {/* Package box */}
      <g transform="translate(30, 35)">
        <rect x="5" y="8" width="30" height="24" rx="2" fill="white" opacity="0.95" />
        
        {/* Horizontal line */}
        <line x1="5" y1="20" x2="35" y2="20" stroke="#03234c" strokeWidth="1.5" strokeDasharray="2,2" />
        
        {/* Vertical line */}
        <line x1="20" y1="8" x2="20" y2="32" stroke="#03234c" strokeWidth="1.5" strokeDasharray="2,2" />
        
        {/* Airplane icon */}
        <path 
          d="M15 5 L12 7 L12.5 8.5 L14.5 7.5 L15 12 L16.5 13 L17.5 6 L22 4 L21.5 2.5 L17.5 4 L16.5 1 L15 0 L15 5Z" 
          fill="#03234c" 
          transform="scale(0.5) translate(10, 0)"
        />
      </g>
      
      {/* Letter L */}
      <text x="50" y="72" fontSize="28" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Poppins, sans-serif">
        L
      </text>
    </svg>
  )
}
