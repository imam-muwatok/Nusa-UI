import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 py-10 dark:border-zinc-800">
      <div className="container mx-auto px-6 text-center text-zinc-500 dark:text-zinc-400">
        <p className="mb-4 text-sm">&copy; {new Date().getFullYear()} Nusa-UI. Build with ❤️ by Muwatok Project.</p>
        <div className="flex justify-center gap-6 text-sm font-bold">
            <a href="#" className="hover:text-cyan-500 transition-colors">Github</a>
            <a href="#" className="hover:text-cyan-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-cyan-500 transition-colors">License</a>
        </div>
      </div>
    </footer>
  );
}