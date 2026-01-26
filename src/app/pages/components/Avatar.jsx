import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Avatar, { AvatarGroup } from "../../components/ui/Avatar";

export default function AvatarPage() {
  const src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  const src2 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  const src3 = "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  const src4 = "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  const src5 = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Avatar</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen untuk menampilkan gambar profil pengguna, inisial, atau ikon fallback.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Usage</h2>
          <CodeBlock code={`<Avatar src="${src}" alt="User" />
<Avatar initials="JD" />`}>
            <div className="flex items-center gap-4">
              <Avatar src={src} alt="User" />
              <Avatar initials="JD" />
            </div>
          </CodeBlock>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sizes</h2>
          <CodeBlock code={`<Avatar size="xs" src="..." />
<Avatar size="sm" src="..." />
<Avatar size="md" src="..." />
<Avatar size="lg" src="..." />
<Avatar size="xl" src="..." />`}>
            <div className="flex items-end gap-4">
              <Avatar size="xs" src={src} />
              <Avatar size="sm" src={src} />
              <Avatar size="md" src={src} />
              <Avatar size="lg" src={src} />
              <Avatar size="xl" src={src} />
            </div>
          </CodeBlock>
        </section>

        {/* Shapes */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Shapes</h2>
          <CodeBlock code={`<Avatar shape="circular" src="..." />
<Avatar shape="rounded" src="..." />`}>
            <div className="flex items-center gap-4">
              <Avatar shape="circular" src={src} />
              <Avatar shape="rounded" src={src} />
            </div>
          </CodeBlock>
        </section>

        {/* Status Indicators */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Status Indicators</h2>
          <CodeBlock code={`<Avatar status="online" src="..." />
<Avatar status="offline" src="..." />
<Avatar status="busy" src="..." />
<Avatar status="away" src="..." />`}>
            <div className="flex items-center gap-4">
              <Avatar status="online" src={src} />
              <Avatar status="offline" src={src} />
              <Avatar status="busy" src={src} />
              <Avatar status="away" src={src} />
            </div>
          </CodeBlock>
        </section>

        {/* Avatar Group */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Avatar Group</h2>
          <CodeBlock code={`import Avatar, { AvatarGroup } from "../../components/ui/Avatar";

<AvatarGroup>
  <Avatar src="..." />
  <Avatar src="..." />
  <Avatar src="..." />
  <Avatar src="..." />
</AvatarGroup>

<AvatarGroup max={3} size="sm">
  <Avatar size="sm" src="..." />
  <Avatar size="sm" src="..." />
  <Avatar size="sm" src="..." />
  <Avatar size="sm" src="..." />
  <Avatar size="sm" src="..." />
</AvatarGroup>`}>
            <div className="flex flex-col items-start gap-6">
              <AvatarGroup>
                <Avatar src={src} alt="User 1" />
                <Avatar src={src2} alt="User 2" />
                <Avatar src={src3} alt="User 3" />
                <Avatar src={src4} alt="User 4" />
              </AvatarGroup>
              <AvatarGroup max={3} size="sm">
                <Avatar size="sm" src={src} alt="User 1" />
                <Avatar size="sm" src={src2} alt="User 2" />
                <Avatar size="sm" src={src3} alt="User 3" />
                <Avatar size="sm" src={src4} alt="User 4" />
                <Avatar size="sm" src={src5} alt="User 5" />
              </AvatarGroup>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}