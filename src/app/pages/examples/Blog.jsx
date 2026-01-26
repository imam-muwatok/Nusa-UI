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
      </div>
    </main>
  );
}