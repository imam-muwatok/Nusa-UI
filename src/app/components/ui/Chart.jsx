import React from 'react';

const Chart = ({ data, className = '', color = 'cyan' }) => {
  if (!data || data.length === 0) {
    return (
      <div className={`flex items-center justify-center h-full text-zinc-400 ${className}`}>
        No data to display
      </div>
    );
  }

  const width = 500;
  const height = 200;
  const padding = 20;

  const maxValue = Math.max(...data);
  const xScale = (width - 2 * padding) / (data.length - 1);
  const yScale = (height - 2 * padding) / maxValue;

  const points = data.map((value, index) => {
    const x = padding + index * xScale;
    const y = height - padding - value * yScale;
    return `${x},${y}`;
  }).join(' ');

  const areaPoints = `${padding},${height - padding} ${points} ${width - padding},${height - padding}`;
  
  const chartColor = `var(--color-${color}-500)`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={`w-full h-full ${className}`}>
      {/* Gradient for the area fill */}
      <defs>
        <linearGradient id={`areaGradient-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={chartColor} stopOpacity={0.4} />
          <stop offset="100%" stopColor={chartColor} stopOpacity={0} />
        </linearGradient>
      </defs>

      {/* Area fill */}
      <polygon points={areaPoints} fill={`url(#areaGradient-${color})`} />

      {/* Line */}
      <polyline
        fill="none"
        stroke={chartColor}
        strokeWidth="2"
        points={points}
      />

      {/* Data points */}
      {data.map((value, index) => (
        <g key={index} className="group">
          <circle
            cx={padding + index * xScale}
            cy={height - padding - value * yScale}
            r="4"
            fill={chartColor}
            stroke="white"
            strokeWidth="2"
            className="transition-transform duration-150 group-hover:scale-125 origin-center"
            style={{ transformBox: 'fill-box' }}
          />
          <circle
            cx={padding + index * xScale}
            cy={height - padding - value * yScale}
            r="8"
            fill="transparent"
            className="cursor-pointer"
          >
            <title>Value: {value}</title>
          </circle>
        </g>
      ))}
    </svg>
  );
};

export default Chart;