import React from 'react';

const Avatar = ({ src, alt, initials, size = 'md', shape = 'circular', status, statusPosition = 'bottom-right', className = '' }) => {
  const baseClasses = 'relative inline-block';

  const sizeClasses = {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-20 w-20',
    xl: 'h-24 w-24',
  };

  const shapeClasses = {
    circular: 'rounded-full',
    rounded: 'rounded-lg',
  };

  const statusSizeClasses = {
    xs: 'h-1.5 w-1.5',
    sm: 'h-2 w-2',
    md: 'h-2.5 w-2.5',
    lg: 'h-3.5 w-3.5',
    xl: 'h-4 w-4',
  };

  const statusPositionClasses = {
    'top-right': 'top-0 right-0',
    'top-left': 'top-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'bottom-left': 'bottom-0 left-0',
  };
  
  const statusColorClasses = {
      online: 'bg-green-500',
      offline: 'bg-zinc-400',
      away: 'bg-yellow-500',
      busy: 'bg-red-500',
  }

  const finalSize = sizeClasses[size] || sizeClasses.md;
  const finalShape = shapeClasses[shape] || shapeClasses.circular;
  const finalStatusSize = statusSizeClasses[size] || statusSizeClasses.md;
  const finalStatusPosition = statusPositionClasses[statusPosition] || statusPositionClasses['bottom-right'];
  const finalStatusColor = statusColorClasses[status] || 'bg-zinc-400';


  return (
    <div className={`${baseClasses} ${className}`}>
      <div className={`${finalSize} ${finalShape} flex items-center justify-center bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-300 font-bold overflow-hidden`}>
        {src ? (
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <span>{initials}</span>
        )}
      </div>
      {status && (
        <span className={`absolute ${finalStatusSize} ${finalStatusColor} rounded-full ring-2 ring-white dark:ring-zinc-900 ${finalStatusPosition}`}></span>
      )}
    </div>
  );
};

export const AvatarGroup = ({ children, max = 4, size = 'md', className = '' }) => {
  const avatars = React.Children.toArray(children);
  const visibleAvatars = avatars.slice(0, max);
  const hiddenCount = avatars.length - max;

  const sizeClasses = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-xs',
    md: 'h-12 w-12 text-sm',
    lg: 'h-20 w-20 text-lg',
    xl: 'h-24 w-24 text-xl',
  };
  const finalSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`flex items-center -space-x-3 rtl:space-x-reverse ${className}`}>
      {visibleAvatars.map((avatar, index) => (
        React.cloneElement(avatar, {
          className: `${avatar.props.className || ''} ring-2 ring-white dark:ring-zinc-900`
        })
      ))}
      {hiddenCount > 0 && (
        <div className={`relative ${finalSize} rounded-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-300 font-bold ring-2 ring-white dark:ring-zinc-900`}>
          +{hiddenCount}
        </div>
      )}
    </div>
  );
};

export default Avatar;