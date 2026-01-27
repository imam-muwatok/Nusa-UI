import React from "react";
import Button from "./Button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function ErrorPage({ 
  code = "404", 
  title = "Something's missing.", 
  message = "Sorry, we can't find that page. You'll find lots to explore on the home page.", 
  icon, 
  image,
  action 
}) {
  return (
    <section className="bg-white dark:bg-zinc-900 w-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          {image ? (
            <img className="mx-auto mb-4 h-64 w-auto" src={image} alt={code || title} />
          ) : icon && (
            <div className="mx-auto mb-4 flex justify-center text-cyan-600 dark:text-cyan-500">
              {React.isValidElement(icon) ? 
                React.cloneElement(icon, { className: `h-24 w-24 ${icon.props.className || ''}` }) 
                : icon}
            </div>
          )}
          {code && (
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-cyan-600 dark:text-cyan-500">
              {code}
            </h1>
          )}
          <p className="mb-4 text-3xl tracking-tight font-bold text-zinc-900 md:text-4xl dark:text-white">
            {title}
          </p>
          <p className="mb-4 text-lg font-light text-zinc-500 dark:text-zinc-400">
            {message}
          </p>
          {action ? action : (
            <Button className="inline-flex items-center gap-2">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Homepage
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}