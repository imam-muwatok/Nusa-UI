import React from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Timeline from "../components/ui/Timeline";
import Button from "../components/ui/Button";
import { CalendarIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export default function TimelinePage() {
  const basicItems = [
    {
      date: "February 2023",
      title: "Application UI code in Tailwind CSS",
      description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
      action: <Button size="sm" variant="primary">Learn more</Button>
    },
    {
      date: "March 2023",
      title: "Marketing UI design in Figma",
      description: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project."
    },
    {
      date: "April 2023",
      title: "E-Commerce UI code in Tailwind CSS",
      description: "Get started with dozens of web components and interactive elements built on top of Tailwind CSS."
    }
  ];

  const iconItems = [
    {
      date: "Just now",
      title: "Meeting with the team",
      description: "Discussing the new project roadmap and assigning tasks to the team members.",
      icon: <CalendarIcon className="h-3 w-3" />
    },
    {
      date: "2 hours ago",
      title: "Project deployed",
      description: "The latest version of the application has been successfully deployed to the production server.",
      icon: <CheckCircleIcon className="h-3 w-3" />,
      badge: "Latest"
    }
  ];

  const avatarItems = [
    {
      date: "Just now",
      title: "Bonnie Green commented",
      description: "Great work on the new design! I really like the color scheme.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      date: "2 hours ago",
      title: "Jese Leos assigned you a task",
      description: "Please review the latest pull request for the dashboard component.",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Timeline</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Menampilkan daftar peristiwa dalam urutan kronologis.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`<Timeline items={[
  {
    date: "February 2023",
    title: "Application UI code in Tailwind CSS",
    description: "Get access to over 20+ pages...",
    action: <Button size="sm">Learn more</Button>
  },
  // ...
]} />`}>
            <div className="w-full max-w-2xl">
              <Timeline items={basicItems} />
            </div>
          </CodeBlock>
        </section>

        {/* With Icons */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Icons</h2>
          <CodeBlock code={`<Timeline items={[
  {
    date: "Just now",
    title: "Meeting with the team",
    icon: <CalendarIcon className="h-3 w-3" />
  },
  // ...
]} />`}>
            <div className="w-full max-w-2xl">
              <Timeline items={iconItems} />
            </div>
          </CodeBlock>
        </section>

        {/* With Avatar */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Avatar</h2>
          <CodeBlock code={`<Timeline items={[
  {
    date: "Just now",
    title: "Bonnie Green commented",
    avatar: "https://images.unsplash.com/..."
  },
  // ...
]} />`}>
            <div className="w-full max-w-2xl">
              <Timeline items={avatarItems} />
            </div>
          </CodeBlock>
        </section>

        {/* Clickable Items */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Clickable Items</h2>
          <CodeBlock code={`<Timeline items={[
  {
    date: "Just now",
    title: "Clickable Item",
    description: "Click this item to trigger an action.",
    onClick: () => alert("Item clicked!")
  },
  // ...
]} />`}>
            <div className="w-full max-w-2xl">
              <Timeline items={[
                {
                  date: "Just now",
                  title: "Clickable Item",
                  description: "Click this item to trigger an action. It has a hover effect.",
                  onClick: () => alert("Item clicked!")
                },
                {
                  date: "1 hour ago",
                  title: "Another Clickable Item",
                  description: "You can attach any function to the onClick prop.",
                  onClick: () => alert("Another item clicked!")
                }
              ]} />
            </div>
          </CodeBlock>
        </section>

        {/* Horizontal Timeline */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Horizontal Timeline</h2>
          <CodeBlock code={`<Timeline horizontal items={[
  {
    date: "Step 1",
    title: "Planning",
    description: "Define project goals and scope.",
  },
  {
    date: "Step 2",
    title: "Design",
    description: "Create wireframes and mockups.",
  },
  {
    date: "Step 3",
    title: "Development",
    description: "Write code and implement features.",
  }
]} />`}>
            <div className="w-full">
              <Timeline horizontal items={[
                { date: "Step 1", title: "Planning", description: "Define project goals and scope." },
                { date: "Step 2", title: "Design", description: "Create wireframes and mockups." },
                { date: "Step 3", title: "Development", description: "Write code and implement features." }
              ]} />
            </div>
          </CodeBlock>
        </section>

        {/* Alternate Timeline */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Alternate Timeline</h2>
          <CodeBlock code={`<Timeline alternate items={[
  {
    date: "February 2023",
    title: "Application UI code",
    description: "Get access to over 20+ pages...",
  },
  // ...
]} />`}>
            <div className="w-full">
              <Timeline alternate items={basicItems} />
            </div>
          </CodeBlock>
        </section>

        {/* Opposite Content */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Opposite Content</h2>
          <CodeBlock code={`<Timeline opposite items={[
  {
    date: "09:00 AM",
    title: "Daily Standup",
    description: "Zoom meeting with the team.",
  },
  // ...
]} />`}>
            <div className="w-full">
              <Timeline opposite items={[
                { date: "09:00 AM", title: "Daily Standup", description: "Zoom meeting with the team." },
                { date: "10:30 AM", title: "Code Review", description: "Reviewing pull requests." },
                { date: "02:00 PM", title: "Client Meeting", description: "Discussing project requirements." }
              ]} />
            </div>
          </CodeBlock>
        </section>

        {/* Loading State */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Loading State</h2>
          <CodeBlock code={`<Timeline loading />
<Timeline horizontal loading />`}>
            <div className="w-full space-y-12">
              <Timeline loading />
              <Timeline horizontal loading />
            </div>
          </CodeBlock>
        </section>

        {/* Connector Line Color */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Connector Line Color</h2>
          <CodeBlock code={`<Timeline lineVariant="success" items={[...]} />
<Timeline horizontal lineVariant="primary" items={[...]} />`}>
            <div className="w-full space-y-12">
              <Timeline lineVariant="success" items={basicItems.slice(0, 2)} />
              <Timeline horizontal lineVariant="primary" items={basicItems.slice(0, 3)} />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}