import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "How to quickly deploy a static website",
      description: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
      category: "Tutorial",
      date: "14 days ago",
      author: {
        name: "Jese Leos",
        avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
      }
    },
    {
      id: 2,
      title: "Our first project with React",
      description: "Over the past year, Volosoft has undergone many changes! After months of preparation, we are finally ready to release our new project based on React and Tailwind CSS.",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png",
      category: "Article",
      date: "1 month ago",
      author: {
        name: "Bonnie Green",
        avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
      }
    },
    {
      id: 3,
      title: "We partnered up with Google",
      description: "Over the past year, Volosoft has undergone many changes! After months of preparation, we are finally ready to release our new project based on React and Tailwind CSS.",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png",
      category: "News",
      date: "2 months ago",
      author: {
        name: "Roberta Casas",
        avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
      }
    }
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Blog</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Tampilkan artikel, berita, atau tutorial terbaru dalam format grid yang menarik.
        </p>
      </div>

      <div className="space-y-12">
        {/* Blog Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Blog Grid</h2>
          <CodeBlock code={`<div className="grid gap-8 lg:grid-cols-2">
  {posts.map((post) => (
    <article key={post.id} className="p-6 bg-white rounded-lg border border-zinc-200 shadow-md dark:bg-zinc-800 dark:border-zinc-700">
      <div className="flex justify-between items-center mb-5 text-zinc-500">
        <Badge variant="primary" size="sm">{post.category}</Badge>
        <span className="text-sm">{post.date}</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
        <a href="#">{post.title}</a>
      </h2>
      <p className="mb-5 font-light text-zinc-500 dark:text-zinc-400">{post.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img className="w-7 h-7 rounded-full" src={post.author.avatar} alt={post.author.name} />
          <span className="font-medium dark:text-white">{post.author.name}</span>
        </div>
        <a href="#" className="inline-flex items-center font-medium text-cyan-600 dark:text-cyan-500 hover:underline">
          Read more
          <ArrowRightIcon className="ml-2 w-4 h-4" />
        </a>
      </div>
    </article>
  ))}
</div>`}>
            <div className="grid gap-8 lg:grid-cols-2">
              {posts.slice(0, 2).map((post) => (
                <article key={post.id} className="p-6 bg-white rounded-lg border border-zinc-200 shadow-md dark:bg-zinc-800 dark:border-zinc-700">
                  <div className="flex justify-between items-center mb-5 text-zinc-500">
                    <Badge variant="primary" size="sm">{post.category}</Badge>
                    <span className="text-sm">{post.date}</span>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    <a href="#">{post.title}</a>
                  </h2>
                  <p className="mb-5 font-light text-zinc-500 dark:text-zinc-400">{post.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <img className="w-7 h-7 rounded-full" src={post.author.avatar} alt={post.author.name} />
                      <span className="font-medium dark:text-white">{post.author.name}</span>
                    </div>
                    <a href="#" className="inline-flex items-center font-medium text-cyan-600 dark:text-cyan-500 hover:underline">
                      Read more
                      <ArrowRightIcon className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </CodeBlock>
        </section>

        {/* Blog Cards with Image */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Blog Cards with Image</h2>
          <CodeBlock code={`<div className="grid gap-8 lg:grid-cols-3">
  {posts.map((post) => (
    <div key={post.id} className="max-w-sm bg-white rounded-lg border border-zinc-200 shadow-md dark:bg-zinc-800 dark:border-zinc-700">
        <a href="#">
            <img className="rounded-t-lg w-full h-48 object-cover" src={post.image} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{post.title}</h5>
            </a>
            <p className="mb-3 font-normal text-zinc-700 dark:text-zinc-400">{post.description.substring(0, 100)}...</p>
            <Button size="sm" className="inline-flex items-center">
                Read more
                <ArrowRightIcon className="ml-2 -mr-1 w-4 h-4" />
            </Button>
        </div>
    </div>
  ))}
</div>`}>
            <div className="grid gap-8 lg:grid-cols-3">
              {posts.map((post) => (
                <div key={post.id} className="max-w-sm bg-white rounded-lg border border-zinc-200 shadow-md dark:bg-zinc-800 dark:border-zinc-700">
                    <a href="#">
                        <img className="rounded-t-lg w-full h-48 object-cover" src={post.image} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{post.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-zinc-700 dark:text-zinc-400">{post.description.substring(0, 100)}...</p>
                        <Button size="sm" className="inline-flex items-center">
                            Read more
                            <ArrowRightIcon className="ml-2 -mr-1 w-4 h-4" />
                        </Button>
                    </div>
                </div>
              ))}
            </div>
          </CodeBlock>
        </section>

        {/* Featured Post */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Featured Post</h2>
          <CodeBlock code={`<article className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg group">
    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Featured" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-8 text-white">
        <Badge variant="primary" className="mb-3">Featured</Badge>
        <h2 className="text-3xl font-bold mb-2">The Future of Web Development</h2>
        <p className="text-zinc-200 mb-4 max-w-2xl">Discover the latest trends and technologies shaping the digital landscape in 2024 and beyond.</p>
        <div className="flex items-center gap-3">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Author" className="w-8 h-8 rounded-full border-2 border-white" />
            <span className="font-medium">Jese Leos</span>
            <span className="text-zinc-400">•</span>
            <span className="text-zinc-300">Oct 24, 2023</span>
        </div>
    </div>
</article>`}>
            <div className="w-full">
                <article className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg group">
                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Featured" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                        <Badge variant="primary" className="mb-3">Featured</Badge>
                        <h2 className="text-3xl font-bold mb-2">The Future of Web Development</h2>
                        <p className="text-zinc-200 mb-4 max-w-2xl">Discover the latest trends and technologies shaping the digital landscape in 2024 and beyond.</p>
                        <div className="flex items-center gap-3">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Author" className="w-8 h-8 rounded-full border-2 border-white" />
                            <span className="font-medium">Jese Leos</span>
                            <span className="text-zinc-400">•</span>
                            <span className="text-zinc-300">Oct 24, 2023</span>
                        </div>
                    </div>
                </article>
            </div>
          </CodeBlock>
        </section>

        {/* Horizontal List */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Horizontal List</h2>
          <CodeBlock code={`<div className="space-y-6">
  {posts.map((post) => (
    <article key={post.id} className="flex flex-col md:flex-row gap-6 bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 p-4 hover:shadow-md transition-shadow">
        <div className="w-full md:w-48 h-48 md:h-auto shrink-0">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
                <Badge variant="secondary" size="sm">{post.category}</Badge>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{post.date}</span>
            </div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <a href="#">{post.title}</a>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4 line-clamp-2">{post.description}</p>
            <div className="flex items-center gap-2 mt-auto">
                <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{post.author.name}</span>
            </div>
        </div>
    </article>
  ))}
</div>`}>
            <div className="w-full">
                <div className="space-y-6">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col md:flex-row gap-6 bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 p-4 hover:shadow-md transition-shadow">
                            <div className="w-full md:w-48 h-48 md:h-auto shrink-0">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-2">
                                    <Badge variant="secondary" size="sm">{post.category}</Badge>
                                    <span className="text-xs text-zinc-500 dark:text-zinc-400">{post.date}</span>
                                </div>
                                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                    <a href="#">{post.title}</a>
                                </h2>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4 line-clamp-2">{post.description}</p>
                                <div className="flex items-center gap-2 mt-auto">
                                    <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full" />
                                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{post.author.name}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}