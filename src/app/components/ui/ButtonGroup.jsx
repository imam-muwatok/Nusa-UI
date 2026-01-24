import React from "react";

export default function ButtonGroup({ children, className = "" }) {
  return (
    <div className={`inline-flex rounded-xl shadow-sm ${className}`} role="group">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          const isFirst = index === 0;
          const isLast = index === React.Children.count(children) - 1;
          
          // Override default rounded classes dari Button component
          // Menggunakan ! (important) untuk memastikan style ini menang
          let roundedClass = "!rounded-none";
          if (isFirst) roundedClass = "!rounded-l-xl !rounded-r-none";
          if (isLast) roundedClass = "!rounded-l-none !rounded-r-xl";
          
          // Mengatur margin negatif agar border tidak double/tebal sebelah
          const marginClass = !isFirst ? "-ml-px" : "";

          return React.cloneElement(child, {
            className: `${child.props.className || ""} ${roundedClass} ${marginClass} relative focus:z-10`.trim()
          });
        }
        return child;
      })}
    </div>
  );
}