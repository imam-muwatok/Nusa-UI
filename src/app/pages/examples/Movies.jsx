import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { PlayIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function MoviesPage() {
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      year: "2014",
      rating: 4.8,
      genre: "Sci-Fi",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Inception",
      year: "2010",
      rating: 4.9,
      genre: "Sci-Fi",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: "2008",
      rating: 5.0,
      genre: "Action",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Avengers: Endgame",
      year: "2019",
      rating: 4.7,
      genre: "Action",
      image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Movies</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen UI untuk aplikasi streaming film atau bioskop.
        </p>
      </div>

      <div className="space-y-12">
        {/* Movie Card Vertical */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Movie Card (Vertical)</h2>
          <CodeBlock code={`<div className="w-48 rounded-xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm group cursor-pointer">
    <div className="relative aspect-[2/3] overflow-hidden">
        <img src="..." alt="Movie Poster" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors">
                <PlayIcon className="w-8 h-8" />
            </button>
        </div>
        <div className="absolute top-2 right-2">
            <Badge variant="dark" size="sm" className="bg-black/60 backdrop-blur-sm text-white border-none">4.8</Badge>
        </div>
    </div>
    <div className="p-3">
        <h3 className="font-bold text-zinc-900 dark:text-white truncate">Interstellar</h3>
        <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-zinc-500 dark:text-zinc-400">2014</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Sci-Fi</span>
        </div>
    </div>
</div>`}>
            <div className="flex flex-wrap gap-6">
                {movies.slice(0, 4).map(movie => (
                    <div key={movie.id} className="w-48 rounded-xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm group cursor-pointer">
                        <div className="relative aspect-[2/3] overflow-hidden">
                            <img src={movie.image} alt={movie.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors">
                                    <PlayIcon className="w-8 h-8" />
                                </button>
                            </div>
                            <div className="absolute top-2 right-2">
                                <Badge variant="dark" size="sm" className="bg-black/60 backdrop-blur-sm text-white border-none">{movie.rating}</Badge>
                            </div>
                        </div>
                        <div className="p-3">
                            <h3 className="font-bold text-zinc-900 dark:text-white truncate">{movie.title}</h3>
                            <div className="flex items-center justify-between mt-1">
                                <span className="text-xs text-zinc-500 dark:text-zinc-400">{movie.year}</span>
                                <span className="text-xs text-zinc-500 dark:text-zinc-400">{movie.genre}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </CodeBlock>
        </section>

        {/* Featured Movie Hero */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Featured Movie Hero</h2>
          <CodeBlock code={`<div className="relative w-full h-[500px] rounded-2xl overflow-hidden group">
    <img src="..." alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
        <Badge variant="primary" className="mb-4">New Release</Badge>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Dune: Part Two</h1>
        <div className="flex items-center gap-4 text-zinc-300 text-sm mb-6">
            <span>2024</span>
            <span>•</span>
            <span>2h 46m</span>
            <span>•</span>
            <span>Sci-Fi, Adventure</span>
        </div>
        <p className="text-zinc-200 mb-8 line-clamp-3 md:line-clamp-none">
            Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.
        </p>
        <div className="flex gap-4">
            <Button size="lg" className="rounded-full px-8">
                <PlayIcon className="w-5 h-5 mr-2" /> Watch Now
            </Button>
            <Button size="lg" variant="secondary" type="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black">
                <PlusIcon className="w-5 h-5 mr-2" /> My List
            </Button>
        </div>
    </div>
</div>`}>
            <div className="w-full">
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
                        <Badge variant="primary" className="mb-4">New Release</Badge>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Dune: Part Two</h1>
                        <div className="flex items-center gap-4 text-zinc-300 text-sm mb-6">
                            <span>2024</span>
                            <span>•</span>
                            <span>2h 46m</span>
                            <span>•</span>
                            <span>Sci-Fi, Adventure</span>
                        </div>
                        <p className="text-zinc-200 mb-8 line-clamp-3 md:line-clamp-none">
                            Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.
                        </p>
                        <div className="flex gap-4">
                            <Button size="lg" className="rounded-full px-8">
                                <PlayIcon className="w-5 h-5 mr-2" /> Watch Now
                            </Button>
                            <Button size="lg" variant="secondary" type="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black">
                                <PlusIcon className="w-5 h-5 mr-2" /> My List
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* Continue Watching */}
        <section>
            <h2 className="text-2xl font-bold mb-6">Continue Watching</h2>
            <CodeBlock code={`<div className="flex gap-4 overflow-x-auto pb-4">
    {/* Card Item */}
    <div className="min-w-[280px] relative rounded-xl overflow-hidden group">
        <img src="..." className="w-full h-40 object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <PlayIcon className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-700">
            <div className="h-full bg-red-600 w-2/3"></div>
        </div>
        <div className="absolute bottom-2 left-2 text-white font-bold text-sm drop-shadow-md">The Mandalorian</div>
    </div>
</div>`}>
                <div className="w-full">
                    <div className="flex gap-4 overflow-x-auto pb-4">
                        {movies.map((movie, i) => (
                            <div key={i} className="min-w-[280px] relative rounded-xl overflow-hidden group cursor-pointer">
                                <img src={movie.image} alt={movie.title} className="w-full h-40 object-cover" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <PlayIcon className="w-12 h-12 text-white" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-700">
                                    <div className="h-full bg-red-600" style={{ width: `${Math.random() * 100}%` }}></div>
                                </div>
                                <div className="absolute bottom-2 left-2 text-white font-bold text-sm drop-shadow-md">{movie.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </CodeBlock>
        </section>

        {/* Cast List */}
        <section>
            <h2 className="text-2xl font-bold mb-6">Cast List</h2>
            <CodeBlock code={`<div className="flex gap-6 overflow-x-auto pb-4">
    {[
        { name: "Timothée Chalamet", role: "Paul Atreides", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
        { name: "Zendaya", role: "Chani", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
        { name: "Rebecca Ferguson", role: "Lady Jessica", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
        { name: "Oscar Isaac", role: "Duke Leto Atreides", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
    ].map((actor, i) => (
        <div key={i} className="flex flex-col items-center min-w-[100px] text-center">
            <img src={actor.image} alt={actor.name} className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-zinc-200 dark:border-zinc-800" />
            <h4 className="font-bold text-sm text-zinc-900 dark:text-white">{actor.name}</h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{actor.role}</p>
        </div>
    ))}
</div>`}>
                <div className="w-full">
                    <div className="flex gap-6 overflow-x-auto pb-4">
                        {[
                            { name: "Timothée Chalamet", role: "Paul Atreides", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
                            { name: "Zendaya", role: "Chani", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
                            { name: "Rebecca Ferguson", role: "Lady Jessica", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
                            { name: "Oscar Isaac", role: "Duke Leto Atreides", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
                        ].map((actor, i) => (
                            <div key={i} className="flex flex-col items-center min-w-[100px] text-center">
                                <img src={actor.image} alt={actor.name} className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-zinc-200 dark:border-zinc-800" />
                                <h4 className="font-bold text-sm text-zinc-900 dark:text-white">{actor.name}</h4>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400">{actor.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </CodeBlock>
        </section>
      </div>
    </main>
  );
}