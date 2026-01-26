import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";
import FormControl from "../../components/ui/FormControl";
import Switch from "../../components/ui/Switch";
import Tabs from "../../components/ui/Tabs";
import Avatar from "../../components/ui/Avatar";
import { UserIcon, BellIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function SettingsPage() {
  const inputClasses = "w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white transition-all";

  const settingsTabs = [
    {
      label: "Profile",
      icon: <UserIcon className="h-5 w-5" />,
      content: (
        <div className="space-y-6 p-1">
          <div className="flex items-center gap-4 mb-6">
            <Avatar size="lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" status="online" />
            <div>
              <Button size="sm" variant="secondary">Change Avatar</Button>
              <p className="mt-1 text-xs text-zinc-500">JPG, GIF or PNG. 1MB max.</p>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <FormControl label="First Name">
              <input type="text" className={inputClasses} defaultValue="Tom" />
            </FormControl>
            <FormControl label="Last Name">
              <input type="text" className={inputClasses} defaultValue="Cook" />
            </FormControl>
          </div>
          
          <FormControl label="Email Address">
            <input type="email" className={inputClasses} defaultValue="tom.cook@example.com" />
          </FormControl>
          
          <FormControl label="Bio">
            <textarea rows="4" className={inputClasses} defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UI/UX design, brand strategy, and Webflow development." />
          </FormControl>
          
          <div className="flex justify-end pt-4">
            <Button>Save Changes</Button>
          </div>
        </div>
      )
    },
    {
      label: "Notifications",
      icon: <BellIcon className="h-5 w-5" />,
      content: (
        <div className="space-y-6 p-1">
          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Email Notifications</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Get emails to find out what's going on when you're not online.</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">News and updates</span>
                <Switch checked={true} onChange={() => {}} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Tips and tutorials</span>
                <Switch checked={true} onChange={() => {}} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">User research</span>
                <Switch checked={false} onChange={() => {}} />
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Push Notifications</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Get real-time updates on your device.</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Comments</span>
                <Switch checked={true} onChange={() => {}} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Reminders</span>
                <Switch checked={false} onChange={() => {}} />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end pt-4">
            <Button>Save Preferences</Button>
          </div>
        </div>
      )
    },
    {
      label: "Security",
      icon: <LockClosedIcon className="h-5 w-5" />,
      content: (
        <div className="space-y-6 p-1">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Change Password</h3>
          
          <FormControl label="Current Password">
            <input type="password" className={inputClasses} />
          </FormControl>
          
          <FormControl label="New Password">
            <input type="password" className={inputClasses} />
          </FormControl>
          
          <FormControl label="Confirm New Password">
            <input type="password" className={inputClasses} />
          </FormControl>
          
          <div className="flex justify-end pt-4">
            <Button>Update Password</Button>
          </div>
        </div>
      )
    }
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Settings</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Halaman pengaturan akun dengan navigasi tab vertikal.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Example Layout</h2>
          <CodeBlock code={`<div className="w-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
  <Tabs vertical variant="pills" items={[
    {
      label: "Profile",
      icon: <UserIcon />,
      content: <ProfileForm />
    },
    {
      label: "Notifications",
      icon: <BellIcon />,
      content: <NotificationsForm />
    },
    {
      label: "Security",
      icon: <LockClosedIcon />,
      content: <SecurityForm />
    }
  ]} />
</div>`}>
            <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
              <Tabs vertical variant="pills" items={settingsTabs} />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}