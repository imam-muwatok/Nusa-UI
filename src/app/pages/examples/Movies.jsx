import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { PlayIcon, PlusIcon, SpeakerWaveIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/solid";

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

        {/* Episode List */}
        <section>
            <h2 className="text-2xl font-bold mb-6">Episode List</h2>
            <CodeBlock code={`<div className="space-y-4">
    {[
        { number: 1, title: "The Heist", duration: "49m", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
        { number: 2, title: "The Child", duration: "38m", image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
        { number: 3, title: "The Sin", duration: "45m", image: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    ].map((episode) => (
        <div key={episode.number} className="flex gap-4 p-4 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer group">
            <div className="relative w-40 h-24 shrink-0 rounded-lg overflow-hidden">
                <img src={episode.image} alt={episode.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayIcon className="w-8 h-8 text-white" />
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Episode {episode.number}</span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{episode.title}</h3>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{episode.duration}</span>
            </div>
        </div>
    ))}
</div>`}>
                <div className="w-full max-w-2xl">
                    <div className="space-y-4">
                        {[
                            { number: 1, title: "The Heist", duration: "49m", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
                            { number: 2, title: "The Child", duration: "38m", image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
                            { number: 3, title: "The Sin", duration: "45m", image: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
                        ].map((episode) => (
                            <div key={episode.number} className="flex gap-4 p-4 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer group">
                                <div className="relative w-40 h-24 shrink-0 rounded-lg overflow-hidden">
                                    <img src={episode.image} alt={episode.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <PlayIcon className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Episode {episode.number}</span>
                                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{episode.title}</h3>
                                    <span className="text-xs text-zinc-500 dark:text-zinc-400">{episode.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CodeBlock>
        </section>

        {/* Video Player */}
        <section>
            <h2 className="text-2xl font-bold mb-6">Video Player</h2>
            <CodeBlock code={`<div className="relative w-full rounded-xl overflow-hidden bg-black group">
    <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full aspect-video object-cover opacity-80" alt="Video thumbnail" />
    
    {/* Overlay Controls */}
    <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Top Bar */}
        <div className="flex justify-between items-start">
            <h3 className="text-white font-bold text-lg drop-shadow-md">The Mandalorian - S2 E1</h3>
            <Badge variant="dark" className="bg-black/50 backdrop-blur-md border-white/10 text-white">4K HDR</Badge>
        </div>

        {/* Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm text-white shadow-lg">
                <PlayIcon className="w-12 h-12" />
             </div>
        </div>

        {/* Bottom Controls */}
        <div className="space-y-3">
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 bg-cyan-500 w-1/3"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-3 h-3 bg-white rounded-full shadow-md scale-0 group-hover:scale-100 transition-transform"></div>
            </div>

            <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                    <button className="hover:text-cyan-400 transition-colors"><PlayIcon className="w-6 h-6" /></button>
                    <div className="flex items-center gap-2 group/vol">
                        <button className="hover:text-cyan-400 transition-colors"><SpeakerWaveIcon className="w-6 h-6" /></button>
                        <div className="w-0 overflow-hidden group-hover/vol:w-20 transition-all duration-300">
                             <div className="h-1 w-16 bg-white/30 rounded-full ml-2 relative">
                                <div className="absolute inset-y-0 left-0 w-2/3 bg-white rounded-full"></div>
                             </div>
                        </div>
                    </div>
                    <span className="text-sm font-medium">12:45 / 45:30</span>
                </div>
                
                <div className="flex items-center gap-4">
                     <button className="hover:text-cyan-400 transition-colors font-bold text-sm bg-white/10 px-2 py-0.5 rounded">CC</button>
                     <button className="hover:text-cyan-400 transition-colors"><ArrowsPointingOutIcon className="w-6 h-6" /></button>
                </div>
            </div>
        </div>
    </div>
</div>`}>
                <div className="w-full max-w-3xl">
                    <div className="relative w-full rounded-xl overflow-hidden bg-black group">
                        <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full aspect-video object-cover opacity-80" alt="Video thumbnail" />
                        
                        {/* Overlay Controls */}
                        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {/* Top Bar */}
                            <div className="flex justify-between items-start">
                                <h3 className="text-white font-bold text-lg drop-shadow-md">The Mandalorian - S2 E1</h3>
                                <Badge variant="dark" className="bg-black/50 backdrop-blur-md border-white/10 text-white">4K HDR</Badge>
                            </div>

                            {/* Center Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm text-white shadow-lg">
                                    <PlayIcon className="w-12 h-12" />
                                </div>
                            </div>

                            {/* Bottom Controls */}
                            <div className="space-y-3">
                                {/* Progress Bar */}
                                <div className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer overflow-hidden relative">
                                    <div className="absolute inset-y-0 left-0 bg-cyan-500 w-1/3"></div>
                                    <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-3 h-3 bg-white rounded-full shadow-md scale-0 group-hover:scale-100 transition-transform"></div>
                                </div>

                                <div className="flex items-center justify-between text-white">
                                    <div className="flex items-center gap-4">
                                        <button className="hover:text-cyan-400 transition-colors"><PlayIcon className="w-6 h-6" /></button>
                                        <div className="flex items-center gap-2 group/vol">
                                            <button className="hover:text-cyan-400 transition-colors"><SpeakerWaveIcon className="w-6 h-6" /></button>
                                            <div className="w-0 overflow-hidden group-hover/vol:w-20 transition-all duration-300">
                                                <div className="h-1 w-16 bg-white/30 rounded-full ml-2 relative">
                                                    <div className="absolute inset-y-0 left-0 w-2/3 bg-white rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-sm font-medium">12:45 / 45:30</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-4">
                                        <button className="hover:text-cyan-400 transition-colors font-bold text-sm bg-white/10 px-2 py-0.5 rounded">CC</button>
                                        <button className="hover:text-cyan-400 transition-colors"><ArrowsPointingOutIcon className="w-6 h-6" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CodeBlock>
        </section>
      </div>
    </main>
  );
}