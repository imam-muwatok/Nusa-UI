import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";
import Avatar from "../../components/ui/Avatar";
import { Card, CardContent } from "../../components/ui/Card";
import { MapPinIcon, LinkIcon, BriefcaseIcon, PencilIcon } from "@heroicons/react/24/outline";

export default function ProfilePage() {
  const posts = [
    {
      id: 1,
      author: "Tom Cook",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      time: "2h ago",
      content: "Just launched a new version of our design system! So excited to see what everyone builds with it. Check it out and let me know your thoughts! #designsystem #react #tailwindcss",
      likes: 120,
      comments: 15,
    },
    {
      id: 2,
      author: "Tom Cook",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      time: "1d ago",
      content: "Exploring the beautiful mountains this weekend. Nothing beats fresh air and a great view. 🏔️",
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      likes: 250,
      comments: 32,
    }
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Profile</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Contoh halaman profil pengguna dengan informasi, statistik, dan feed aktivitas.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Example Layout</h2>
          <CodeBlock code={`<div className="w-full max-w-4xl mx-auto">
  {/* Cover and Avatar */}
  <div className="relative h-48 rounded-t-2xl bg-gradient-to-r from-cyan-500 to-blue-600">
    <div className="absolute -bottom-12 left-6">
      <Avatar 
        size="lg" 
        src="..." 
        alt="Profile" 
        status="online" 
        className="border-4 border-white dark:border-zinc-900"
      />
    </div>
    <div className="absolute bottom-4 right-4">
      <Button variant="light" size="sm">Edit Profile</Button>
    </div>
  </div>

  {/* User Info and Stats */}
  <Card className="rounded-t-none pt-16">
    <CardContent>
      <h2 className="text-2xl font-bold">Tom Cook</h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">@tomcook</p>
      <p className="mt-4 text-sm">Product Designer at Nusa-UI. Creating beautiful and functional web experiences.</p>
      
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center gap-1.5"><BriefcaseIcon className="h-4 w-4" /><span>Designer</span></div>
        <div className="flex items-center gap-1.5"><MapPinIcon className="h-4 w-4" /><span>Melbourne, AU</span></div>
        <div className="flex items-center gap-1.5"><LinkIcon className="h-4 w-4" /><span>nusa-ui.com</span></div>
      </div>

      <div className="mt-6 flex gap-6 border-t border-zinc-100 dark:border-zinc-800 pt-6">
        <div><span className="font-bold">1,234</span> <span className="text-zinc-500">Following</span></div>
        <div><span className="font-bold">5,678</span> <span className="text-zinc-500">Followers</span></div>
      </div>
    </CardContent>
  </Card>

  {/* Feed */}
  <div className="mt-8 space-y-6">
    {/* Post Card */}
  </div>
</div>`}>
            <div className="w-full max-w-4xl mx-auto">
              {/* Cover and Avatar */}
              <div className="relative h-48 rounded-t-2xl bg-gradient-to-r from-cyan-500 to-blue-600">
                <div className="absolute -bottom-12 left-6">
                  <Avatar 
                    size="lg" 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="Profile" 
                    status="online" 
                    className="border-4 border-white dark:border-zinc-900"
                  />
                </div>
                <div className="absolute bottom-4 right-4">
                  <Button variant="light" size="sm" className="flex items-center gap-1.5">
                    <PencilIcon className="h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>
              </div>

              {/* User Info and Stats */}
              <Card className="rounded-t-none pt-16">
                <CardContent>
                  <h2 className="text-2xl font-bold">Tom Cook</h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">@tomcook</p>
                  <p className="mt-4 text-sm">Product Designer at Nusa-UI. Creating beautiful and functional web experiences.</p>
                  
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center gap-1.5"><BriefcaseIcon className="h-4 w-4" /><span>Designer</span></div>
                    <div className="flex items-center gap-1.5"><MapPinIcon className="h-4 w-4" /><span>Melbourne, AU</span></div>
                    <div className="flex items-center gap-1.5"><LinkIcon className="h-4 w-4" /><span>nusa-ui.com</span></div>
                  </div>

                  <div className="mt-6 flex gap-6 border-t border-zinc-100 dark:border-zinc-800 pt-6">
                    <div><span className="font-bold">1,234</span> <span className="text-zinc-500">Following</span></div>
                    <div><span className="font-bold">5,678</span> <span className="text-zinc-500">Followers</span></div>
                  </div>
                </CardContent>
              </Card>

              {/* Feed */}
              <div className="mt-8 space-y-6">
                {posts.map(post => (
                  <Card key={post.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar src={post.avatar} alt={post.author} size="md" />
                        <div>
                          <p className="font-bold">{post.author}</p>
                          <p className="text-xs text-zinc-500">{post.time}</p>
                        </div>
                      </div>
                      <p className="mb-4 text-sm leading-relaxed">{post.content}</p>
                      {post.image && <img src={post.image} alt="Post content" className="rounded-xl border border-zinc-100 dark:border-zinc-800 mb-4" />}
                      <div className="flex gap-4 text-sm text-zinc-500">
                        <span>{post.likes} Likes</span>
                        <span>{post.comments} Comments</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}