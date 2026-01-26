import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Badge from "../../components/ui/Badge";
import { UserIcon, StarIcon, CheckBadgeIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function BadgePage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Badges</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Label kecil untuk status, kategori, atau notifikasi.
        </p>
      </div>

      <div className="space-y-12">
        {/* Solid Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Solid</h2>
          <CodeBlock code={`<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="light">Light</Badge>
<Badge variant="dark">Dark</Badge>`}>
            <div className="flex flex-wrap gap-4">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="light">Light</Badge>
              <Badge variant="dark">Dark</Badge>
            </div>
          </CodeBlock>
        </section>

        {/* Outline Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Outline</h2>
          <CodeBlock code={`<Badge type="outline" variant="primary">Primary</Badge>
<Badge type="outline" variant="secondary">Secondary</Badge>
<Badge type="outline" variant="success">Success</Badge>
<Badge type="outline" variant="danger">Danger</Badge>
<Badge type="outline" variant="warning">Warning</Badge>
<Badge type="outline" variant="info">Info</Badge>
<Badge type="outline" variant="light">Light</Badge>
<Badge type="outline" variant="dark">Dark</Badge>`}>
            <div className="flex flex-wrap gap-4">
              <Badge type="outline" variant="primary">Primary</Badge>
              <Badge type="outline" variant="secondary">Secondary</Badge>
              <Badge type="outline" variant="success">Success</Badge>
              <Badge type="outline" variant="danger">Danger</Badge>
              <Badge type="outline" variant="warning">Warning</Badge>
              <Badge type="outline" variant="info">Info</Badge>
              <Badge type="outline" variant="light">Light</Badge>
              <Badge type="outline" variant="dark">Dark</Badge>
            </div>
          </CodeBlock>
        </section>

        {/* Soft Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Soft</h2>
          <CodeBlock code={`<Badge type="soft" variant="primary">Primary</Badge>
<Badge type="soft" variant="secondary">Secondary</Badge>
<Badge type="soft" variant="success">Success</Badge>
<Badge type="soft" variant="danger">Danger</Badge>
<Badge type="soft" variant="warning">Warning</Badge>
<Badge type="soft" variant="info">Info</Badge>
<Badge type="soft" variant="light">Light</Badge>
<Badge type="soft" variant="dark">Dark</Badge>`}>
            <div className="flex flex-wrap gap-4">
              <Badge type="soft" variant="primary">Primary</Badge>
              <Badge type="soft" variant="secondary">Secondary</Badge>
              <Badge type="soft" variant="success">Success</Badge>
              <Badge type="soft" variant="danger">Danger</Badge>
              <Badge type="soft" variant="warning">Warning</Badge>
              <Badge type="soft" variant="info">Info</Badge>
              <Badge type="soft" variant="light">Light</Badge>
              <Badge type="soft" variant="dark">Dark</Badge>
            </div>
          </CodeBlock>
        </section>

        {/* Gradient Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Gradient</h2>
          <CodeBlock code={`<Badge type="gradient" variant="primary">Primary</Badge>
<Badge type="gradient" variant="secondary">Secondary</Badge>
<Badge type="gradient" variant="success">Success</Badge>
<Badge type="gradient" variant="danger">Danger</Badge>
<Badge type="gradient" variant="warning">Warning</Badge>
<Badge type="gradient" variant="info">Info</Badge>
<Badge type="gradient" variant="light">Light</Badge>
<Badge type="gradient" variant="dark">Dark</Badge>`}>
            <div className="flex flex-wrap gap-4">
              <Badge type="gradient" variant="primary">Primary</Badge>
              <Badge type="gradient" variant="secondary">Secondary</Badge>
              <Badge type="gradient" variant="success">Success</Badge>
              <Badge type="gradient" variant="danger">Danger</Badge>
              <Badge type="gradient" variant="warning">Warning</Badge>
              <Badge type="gradient" variant="info">Info</Badge>
              <Badge type="gradient" variant="light">Light</Badge>
              <Badge type="gradient" variant="dark">Dark</Badge>
            </div>
          </CodeBlock>
        </section>

        {/* Animation */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Animation</h2>
          <CodeBlock code={`{/* Pulse Animation */}
<Badge pulse variant="danger">LIVE</Badge>
<Badge pulse variant="warning">Processing...</Badge>

{/* Ping (Radar) Animation */}
<Badge ping variant="primary">New Feature</Badge>
<Badge ping type="outline" variant="success">Online</Badge>`}>
            <div className="flex items-center gap-4">
              <Badge pulse variant="danger">LIVE</Badge>
              <Badge pulse variant="warning">Processing...</Badge>
              <Badge ping variant="primary">New Feature</Badge>
              <Badge ping type="outline" variant="success">Online</Badge>
            </div>
          </CodeBlock>
        </section>

        {/* Dismissible */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Dismissible</h2>
          <CodeBlock code={`<Badge variant="primary" onClose={() => alert('Closed!')}>Tag 1</Badge>
<Badge variant="secondary" onClose={() => {}}>Tag 2</Badge>
<Badge type="outline" variant="success" onClose={() => {}}>Tag 3</Badge>`}>
            <div className="flex items-center gap-4">
              <Badge variant="primary" onClose={() => alert('Closed!')}>Tag 1</Badge>
              <Badge variant="secondary" onClose={() => {}}>Tag 2</Badge>
              <Badge type="outline" variant="success" onClose={() => {}}>Tag 3</Badge>
            </div>
          </CodeBlock>
        </section>

        {/* With Icon */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Icon</h2>
          <CodeBlock code={`<Badge icon={<UserIcon className="h-3 w-3" />} variant="info">Admin</Badge>
<Badge icon={<StarIcon className="h-3 w-3" />} variant="warning">Premium</Badge>
<Badge rightIcon={<CheckBadgeIcon className="h-3 w-3" />} variant="success">Verified</Badge>
<Badge icon={<ShieldCheckIcon className="h-3 w-3" />} type="outline" variant="primary">Secure</Badge>`}>
            <div className="flex items-center gap-4">
              <Badge icon={<UserIcon className="h-3 w-3" />} variant="info">Admin</Badge>
              <Badge icon={<StarIcon className="h-3 w-3" />} variant="warning">Premium</Badge>
              <Badge rightIcon={<CheckBadgeIcon className="h-3 w-3" />} variant="success">Verified</Badge>
              <Badge icon={<ShieldCheckIcon className="h-3 w-3" />} type="outline" variant="primary">Secure</Badge>
            </div>
          </CodeBlock>
        </section>

        {/* Icon Only */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Icon Only</h2>
          <CodeBlock code={`<Badge iconOnly variant="primary"><UserIcon className="h-3 w-3" /></Badge>
<Badge iconOnly size="md" variant="secondary"><StarIcon className="h-4 w-4" /></Badge>
<Badge iconOnly size="lg" variant="success"><CheckBadgeIcon className="h-5 w-5" /></Badge>`}>
            <div className="flex items-center gap-4">
              <Badge iconOnly variant="primary"><UserIcon className="h-3 w-3" /></Badge>
              <Badge iconOnly size="md" variant="secondary"><StarIcon className="h-4 w-4" /></Badge>
              <Badge iconOnly size="lg" variant="success"><CheckBadgeIcon className="h-5 w-5" /></Badge>
            </div>
          </CodeBlock>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sizes</h2>
          <CodeBlock code={`<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`}>
            <div className="flex items-center gap-4">
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
              <Badge size="lg">Large</Badge>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}