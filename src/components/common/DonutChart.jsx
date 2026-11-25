import React from 'react';
import { formatINR } from '../../utils/formatters';

/**
 * Pure SVG responsive Donut Chart for visualizing financial allocations.
 * Slice 1 (e.g. Principal / Invested) vs Slice 2 (e.g. Interest / Returns).
 */
export default function DonutChart({
  value1 = 50,
  value2 = 50,
  label1 = "Principal Amount",
  label2 = "Total Interest",
  color1 = "#101D32", // Deep Navy
  color2 = "#C9A96E", // Muted Gold
  size = 200,
  strokeWidth = 28,
  centerTitle = "Total",
  centerValue = "",
  className = "",
}) {
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
            stroke="#E8E2D7"
            strokeWidth={strokeWidth}
          />

          {/* Slice 1 (Navy / Principal) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={color1}
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
            stroke={color2}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray2}
            strokeDashoffset={strokeDashoffset2}
            strokeLinecap="butt"
            className="transition-all duration-500"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
          <span className="text-[10px] uppercase tracking-wider text-brand-secondary font-medium">
            {centerTitle}
          </span>
          <span className="font-serif text-sm sm:text-base font-bold text-brand-primary mt-0.5 max-w-[120px] truncate">
            {centerValue || formatINR(total)}
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-5 w-full space-y-2 text-xs">
        <div className="flex items-center justify-between p-2 rounded-sm bg-sand/40 border border-stone/60">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: color1 }} />
            <span className="text-brand-secondary">{label1}:</span>
          </div>
          <div className="text-right">
            <span className="font-semibold text-brand-primary block">{formatINR(value1)}</span>
            <span className="text-[10px] text-brand-secondary">({percent1.toFixed(1)}%)</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-2 rounded-sm bg-sand/40 border border-stone/60">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: color2 }} />
            <span className="text-brand-secondary">{label2}:</span>
          </div>
          <div className="text-right">
            <span className="font-semibold text-brand-primary block">{formatINR(value2)}</span>
            <span className="text-[10px] text-brand-secondary">({percent2.toFixed(1)}%)</span>
          </div>
        </div>
      </div>

    </div>
  );
}
