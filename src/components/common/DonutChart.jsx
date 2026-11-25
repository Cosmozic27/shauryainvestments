import React from 'react';
import { formatINR } from '../../utils/formatters';

/**
 * Pure SVG responsive Donut Chart for visualizing financial allocations.
 * Slice 1 (e.g. Principal / Invested) vs Slice 2 (e.g. Interest / Returns).
 * Supports both 'dark' (private wealth midnight/slate) and 'light' (warm stone) variants.
 */
export default function DonutChart({
  value1 = 50,
  value2 = 50,
  label1 = "Principal Amount",
  label2 = "Total Interest",
  color1,
  color2,
  size = 200,
  strokeWidth = 28,
  centerTitle = "Total",
  centerValue = "",
  className = "",
  variant = "dark",
}) {
  const isDark = variant === "dark";
  const slice1Color = color1 || (isDark ? "#1C3252" : "#101D32");
  const slice2Color = color2 || (isDark ? "#C6A66B" : "#C9A96E");

  const total = (Number(value1) || 0) + (Number(value2) || 0);
  const percent1 = total > 0 ? (value1 / total) * 100 : 50;
  const percent2 = total > 0 ? (value2 / total) * 100 : 50;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset1 = 0;
  const strokeDasharray1 = `${(percent1 / 100) * circumference} ${circumference}`;

  const strokeDashoffset2 = -((percent1 / 100) * circumference);
  const strokeDasharray2 = `${(percent2 / 100) * circumference} ${circumference}`;

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      
      {/* SVG Donut */}
      <div className="relative" style={{ width: size, height: size }}>
        <svg 
          width={size} 
          height={size} 
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90 transform transition-all duration-500 ease-out"
        >
          {/* Background circle track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={isDark ? "rgba(198, 166, 107, 0.18)" : "#E8E2D7"}
            strokeWidth={strokeWidth}
          />

          {/* Slice 1 (Navy / Principal) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={slice1Color}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray1}
            strokeDashoffset={strokeDashoffset1}
            strokeLinecap="butt"
            className="transition-all duration-500"
          />

          {/* Slice 2 (Gold / Interest or Returns) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={slice2Color}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray2}
            strokeDashoffset={strokeDashoffset2}
            strokeLinecap="butt"
            className="transition-all duration-500"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
          <span className={`text-[10px] uppercase tracking-wider font-medium ${isDark ? 'text-[#B8C0CC]' : 'text-brand-secondary'}`}>
            {centerTitle}
          </span>
          <span className={`font-serif text-sm sm:text-base font-bold mt-0.5 max-w-[120px] truncate ${isDark ? 'text-[#F5F0E7]' : 'text-brand-primary'}`}>
            {centerValue || formatINR(total)}
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-5 w-full space-y-2 text-xs">
        <div className={`flex items-center justify-between p-2.5 rounded-sm border ${
          isDark ? 'bg-[#0B1424] border-gold/25' : 'bg-sand/40 border-stone/60'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: slice1Color }} />
            <span className={isDark ? 'text-[#B8C0CC]' : 'text-brand-secondary'}>{label1}:</span>
          </div>
          <div className="text-right">
            <span className={`font-semibold block ${isDark ? 'text-[#F5F0E7]' : 'text-brand-primary'}`}>{formatINR(value1)}</span>
            <span className={`text-[10px] ${isDark ? 'text-[#B8C0CC]' : 'text-brand-secondary'}`}>({percent1.toFixed(1)}%)</span>
          </div>
        </div>

        <div className={`flex items-center justify-between p-2.5 rounded-sm border ${
          isDark ? 'bg-[#0B1424] border-gold/25' : 'bg-sand/40 border-stone/60'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: slice2Color }} />
            <span className={isDark ? 'text-[#B8C0CC]' : 'text-brand-secondary'}>{label2}:</span>
          </div>
          <div className="text-right">
            <span className={`font-semibold block ${isDark ? 'text-gold' : 'text-brand-primary'}`}>{formatINR(value2)}</span>
            <span className={`text-[10px] ${isDark ? 'text-[#B8C0CC]' : 'text-brand-secondary'}`}>({percent2.toFixed(1)}%)</span>
          </div>
        </div>
      </div>

    </div>
  );
}
