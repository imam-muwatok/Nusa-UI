import React from 'react';

const colorClasses = {
  primary: 'text-blue-600',
  secondary: 'text-zinc-500',
  success: 'text-green-500',
  danger: 'text-red-500',
  warning: 'text-yellow-500',
  info: 'text-cyan-500',
  dark: 'text-zinc-900 dark:text-zinc-50',
  white: 'text-white',
};

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

const BorderSpinner = ({ size, color, className }) => (
  <div
    className={`inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
    role="status"
  >
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      Loading...
    </span>
  </div>
);

const GrowSpinner = ({ size, color, className }) => (
  <div
    className={`inline-block animate-ping rounded-full bg-current ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
    role="status"
  >
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      Loading...
    </span>
  </div>
);

const PulseSpinner = ({ size, color, className }) => {
    const pulseSizeClasses = {
        sm: 'h-2 w-2',
        md: 'h-2.5 w-2.5',
        lg: 'h-3 w-3',
        xl: 'h-3.5 w-3.5',
    };

    const pulseColorClasses = {
        primary: 'bg-blue-600',
        secondary: 'bg-zinc-500',
        success: 'bg-green-500',
        danger: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-cyan-500',
        dark: 'bg-zinc-900 dark:bg-zinc-50',
        white: 'bg-white',
    };

    const finalPulseColor = pulseColorClasses[color] || 'bg-cyan-500';

    return (
        <div className={`flex items-center justify-center gap-2 ${className}`}>
            <div className={`${pulseSizeClasses[size] || 'h-2.5 w-2.5'} rounded-full ${finalPulseColor} animate-pulse-dots`} style={{ animationDelay: '0s' }}></div>
            <div className={`${pulseSizeClasses[size] || 'h-2.5 w-2.5'} rounded-full ${finalPulseColor} animate-pulse-dots`} style={{ animationDelay: '0.2s' }}></div>
            <div className={`${pulseSizeClasses[size] || 'h-2.5 w-2.5'} rounded-full ${finalPulseColor} animate-pulse-dots`} style={{ animationDelay: '0.4s' }}></div>
        </div>
    );
};

const DotsWaveSpinner = ({ size, color, className }) => {
    const waveSizeClasses = {
        sm: 'h-2 w-2',
        md: 'h-2.5 w-2.5',
        lg: 'h-3 w-3',
        xl: 'h-3.5 w-3.5',
    };

    const waveColorClasses = {
        primary: 'bg-blue-600',
        secondary: 'bg-zinc-500',
        success: 'bg-green-500',
        danger: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-cyan-500',
        dark: 'bg-zinc-900 dark:bg-zinc-50',
        white: 'bg-white',
    };

    const finalWaveColor = waveColorClasses[color] || 'bg-cyan-500';
    const finalWaveSize = waveSizeClasses[size] || 'h-2.5 w-2.5';

    return (
        <div className={`flex items-center justify-center gap-1.5 ${className}`}>
            <div className={`${finalWaveSize} rounded-full ${finalWaveColor} animate-dots-wave`} style={{ animationDelay: '0s' }}></div>
            <div className={`${finalWaveSize} rounded-full ${finalWaveColor} animate-dots-wave`} style={{ animationDelay: '0.1s' }}></div>
            <div className={`${finalWaveSize} rounded-full ${finalWaveColor} animate-dots-wave`} style={{ animationDelay: '0.2s' }}></div>
            <div className={`${finalWaveSize} rounded-full ${finalWaveColor} animate-dots-wave`} style={{ animationDelay: '0.3s' }}></div>
        </div>
    );
};

const BarSpinner = ({ size, color, className }) => {
    const barSizeClasses = {
        sm: 'h-4 w-1',
        md: 'h-6 w-1.5',
        lg: 'h-8 w-2',
        xl: 'h-10 w-2.5',
    };

    const barColorClasses = {
        primary: 'bg-blue-600',
        secondary: 'bg-zinc-500',
        success: 'bg-green-500',
        danger: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-cyan-500',
        dark: 'bg-zinc-900 dark:bg-zinc-50',
        white: 'bg-white',
    };

    const finalBarColor = barColorClasses[color] || 'bg-cyan-500';
    const finalBarSize = barSizeClasses[size] || 'h-6 w-1.5';

    return (
        <div className={`flex items-center justify-center gap-1 ${className}`}>
            <div className={`${finalBarSize} ${finalBarColor} animate-bar-loader`} style={{ animationDelay: '-0.4s' }}></div>
            <div className={`${finalBarSize} ${finalBarColor} animate-bar-loader`} style={{ animationDelay: '-0.2s' }}></div>
            <div className={`${finalBarSize} ${finalBarColor} animate-bar-loader`} style={{ animationDelay: '-0s' }}></div>
        </div>
    );
};

const CircleNotchSpinner = ({ size, color, className }) => (
  <svg
    className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const RingSpinner = ({ size, color, className }) => {
    const ringSizeClasses = {
        sm: 'w-5 h-5',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-10 h-10',
    };

    const finalRingSize = ringSizeClasses[size] || 'w-6 h-6';

    return (
        <div className={`relative ${finalRingSize} ${className}`}>
            <svg className="absolute inset-0" viewBox="0 0 36 36">
                <defs>
                    <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id="linearGradient">
                        <stop stopColor="#4F46E5" offset="0%" />
                        <stop stopColor="#eab308" offset="100%" />
                    </linearGradient>
                </defs>
                <circle className="text-zinc-300 dark:text-zinc-700" fill="none" strokeWidth="3" cx="18" cy="18" r="15" strokeDasharray="80" strokeDashoffset="60" />
                <circle className="text-cyan-500" fill="none" strokeWidth="3" cx="18" cy="18" r="15" strokeDasharray="80" strokeDashoffset="150" style={{
                    stroke: 'url(#linearGradient)',
                    animation: 'rotate 2s linear infinite'
                }} />
            </svg>
        </div>
    );
};

const RingKeyFrames = `
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
`

const RingStyle = () => {
    return (
        <style>
            {RingKeyFrames}
        </style>
    )
}

export default function Spinner({ type = 'border', size = 'md', color = 'info', className = '' }) {
  switch (type) {
    case 'grow':
      return <GrowSpinner size={size} color={color} className={className} />;
    case 'pulse':
      return <PulseSpinner size={size} color={color} className={className} />;
    case 'dots-wave':
      return <DotsWaveSpinner size={size} color={color} className={className} />;
    case 'ring':
      return (
          <> <RingSpinner size={size} color={color} className={className} /> <RingStyle /> </>
      )
    case 'bar':
      return <BarSpinner size={size} color={color} className={className} />;
    case 'circle-notch':
      return <CircleNotchSpinner size={size} color={color} className={className} />;
    case 'border':
    default:
      return <BorderSpinner size={size} color={color} className={className} />;
  }
}