import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";
import { 
  BoltIcon, CloudArrowUpIcon, LockClosedIcon, 
  ArrowPathIcon, FingerPrintIcon, 
  ShieldCheckIcon, UserGroupIcon, ChartBarIcon
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function FeaturePage() {
  const features = [
    { name: 'Push to deploy', description: 'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.', icon: CloudArrowUpIcon },
    { name: 'SSL certificates', description: 'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales.', icon: LockClosedIcon },
    { name: 'Simple queues', description: 'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor.', icon: ArrowPathIcon },
    { name: 'Advanced security', description: 'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis.', icon: FingerPrintIcon },
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Feature Sections</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Berbagai variasi tampilan untuk menonjolkan fitur produk atau layanan Anda.
        </p>
      </div>

      <div className="space-y-12">
        {/* 1. Basic Grid (Icon Top) */}
        <section>
          <h2 className="text-2xl font-bold mb-6">1. Basic Grid (Icon Top)</h2>
          <CodeBlock code={`<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
  {features.map((feature) => (
    <div key={feature.name} className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
        <feature.icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-bold">{feature.name}</h3>
      <p className="text-zinc-500 dark:text-zinc-400">{feature.description}</p>
    </div>
  ))}
</div>`}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.slice(0, 3).map((feature) => (
                <div key={feature.name} className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.name}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </CodeBlock>
        </section>

        {/* 2. Grid with Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-6">2. Grid with Cards</h2>
          <CodeBlock code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
  {features.map((feature) => (
    <div key={feature.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <feature.icon className="mb-4 h-8 w-8 text-cyan-500" />
      <h3 className="mb-2 font-bold">{feature.name}</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{feature.description}</p>
    </div>
  ))}
</div>`}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                  <feature.icon className="mb-4 h-8 w-8 text-cyan-500" />
                  <h3 className="mb-2 font-bold">{feature.name}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </CodeBlock>
        </section>

        {/* 3. Icon Left Aligned */}
        <section>
          <h2 className="text-2xl font-bold mb-6">3. Icon Left Aligned</h2>
          <CodeBlock code={`<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
  {features.map((feature) => (
    <div key={feature.name} className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-black">
        <feature.icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="mb-1 text-lg font-bold">{feature.name}</h3>
        <p className="text-zinc-500 dark:text-zinc-400">{feature.description}</p>
      </div>
    </div>
  ))}
</div>`}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-black">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">{feature.name}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CodeBlock>
        </section>

        {/* 4. With Image (Left) */}
        <section>
          <h2 className="text-2xl font-bold mb-6">4. With Image (Left)</h2>
          <CodeBlock code={`<div className="flex flex-col items-center gap-12 lg:flex-row">
  <div className="lg:w-1/2">
    <img src="..." alt="Feature" className="rounded-2xl shadow-xl" />
  </div>
  <div className="lg:w-1/2">
    <h3 className="mb-4 text-3xl font-bold">Work faster than ever</h3>
    <p className="mb-8 text-zinc-500 dark:text-zinc-400">...</p>
    <div className="space-y-4">
      {features.map(...)}
    </div>
  </div>
</div>`}>
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              <div className="lg:w-1/2">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Feature" className="rounded-2xl shadow-xl" />
              </div>
              <div className="lg:w-1/2">
                <h3 className="mb-4 text-3xl font-bold">Work faster than ever</h3>
                <p className="mb-8 text-zinc-500 dark:text-zinc-400">
                  Everything you need to build your next SaaS application. We've done the heavy lifting so you don't have to.
                </p>
                <div className="space-y-4">
                  {features.slice(0, 3).map((feature) => (
                    <div key={feature.name} className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      <span className="font-medium">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CodeBlock>
        </section>

        {/* 5. With Image (Right) */}
        <section>
          <h2 className="text-2xl font-bold mb-6">5. With Image (Right)</h2>
          <CodeBlock code={`<div className="flex flex-col items-center gap-12 lg:flex-row-reverse">
  <div className="lg:w-1/2">
    <img src="..." alt="Feature" className="rounded-2xl shadow-xl" />
  </div>
  <div className="lg:w-1/2">
    <h3 className="mb-4 text-3xl font-bold">Designed for developers</h3>
    {/* ... */}
  </div>
</div>`}>
            <div className="flex flex-col items-center gap-12 lg:flex-row-reverse">
              <div className="lg:w-1/2">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Feature" className="rounded-2xl shadow-xl" />
              </div>
              <div className="lg:w-1/2">
                <h3 className="mb-4 text-3xl font-bold">Designed for developers</h3>
                <p className="mb-6 text-zinc-500 dark:text-zinc-400">
                  Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {features.slice(0, 4).map((feature) => (
                    <div key={feature.name} className="flex flex-col">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                        <feature.icon className="h-5 w-5 flex-none text-cyan-600" aria-hidden="true" />
                        {feature.name}
                      </dt>
                      <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-zinc-500 dark:text-zinc-400">
                        <p className="flex-auto">{feature.description.substring(0, 50)}...</p>
                      </dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CodeBlock>
        </section>

        {/* 6. Alternating Sections */}
        <section>
          <h2 className="text-2xl font-bold mb-6">6. Alternating Sections</h2>
          <CodeBlock code={`{features.map((feature, index) => (
  <div key={feature.name} className={\`flex flex-col gap-8 lg:flex-row \${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}\`}>
    {/* ... */}
  </div>
))}`}>
            <div className="space-y-16">
              {[features[0], features[1]].map((feature, index) => (
                <div key={feature.name} className={`flex flex-col items-center gap-8 lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className="aspect-video w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                        <feature.icon className="h-20 w-20 text-zinc-300 dark:text-zinc-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-bold">{feature.name}</h3>
                    <p className="text-lg text-zinc-500 dark:text-zinc-400">{feature.description}</p>
                    <Button variant="light" className="mt-4">Learn more</Button>
                  </div>
                </div>
              ))}
            </div>
          </CodeBlock>
        </section>

        {/* 7. Grid with Borders */}
        <section>
          <h2 className="text-2xl font-bold mb-6">7. Grid with Borders</h2>
          <CodeBlock code={`<div className="grid grid-cols-1 divide-y divide-zinc-200 border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800 md:grid-cols-3 md:divide-x md:divide-y-0 rounded-2xl overflow-hidden">
  {/* items */}
</div>`}>
            <div className="grid grid-cols-1 divide-y divide-zinc-200 border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800 md:grid-cols-3 md:divide-x md:divide-y-0 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900">
              {features.slice(0, 3).map((feature) => (
                <div key={feature.name} className="p-8 text-center hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <feature.icon className="mx-auto mb-4 h-10 w-10 text-zinc-900 dark:text-white" />
                  <h3 className="mb-2 font-bold">{feature.name}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </CodeBlock>
        </section>

        {/* 8. Offset Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6">8. Offset Grid</h2>
          <CodeBlock code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
  <div className="space-y-6">
    {/* Column 1 items */}
  </div>
  <div className="space-y-6 md:mt-12">
    {/* Column 2 items (offset) */}
  </div>
</div>`}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-6">
                {features.slice(0, 2).map((feature) => (
                  <div key={feature.name} className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-900">
                    <feature.icon className="mb-4 h-8 w-8 text-cyan-600" />
                    <h3 className="mb-2 text-xl font-bold">{feature.name}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6 md:mt-12">
                {features.slice(2, 4).map((feature) => (
                  <div key={feature.name} className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-900">
                    <feature.icon className="mb-4 h-8 w-8 text-purple-600" />
                    <h3 className="mb-2 text-xl font-bold">{feature.name}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </CodeBlock>
        </section>

        {/* 9. Bento Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6">9. Bento Grid</h2>
          <CodeBlock code={`<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
  <div className="md:col-span-2 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-800">...</div>
  <div className="rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-800">...</div>
  <div className="rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-800">...</div>
  <div className="md:col-span-2 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-800">...</div>
</div>`}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 h-96">
              <div className="md:col-span-2 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-800 flex flex-col justify-between">
                <BoltIcon className="h-10 w-10 text-yellow-500" />
                <div>
                    <h3 className="text-xl font-bold">Lightning Fast</h3>
                    <p className="text-zinc-500 dark:text-zinc-400">Optimized for speed and performance.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-800 flex flex-col justify-between">
                <ShieldCheckIcon className="h-10 w-10 text-green-500" />
                <h3 className="text-lg font-bold">Secure</h3>
              </div>
              <div className="rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-800 flex flex-col justify-between">
                <UserGroupIcon className="h-10 w-10 text-blue-500" />
                <h3 className="text-lg font-bold">Team Friendly</h3>
              </div>
              <div className="md:col-span-2 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-800 flex flex-col justify-between">
                <ChartBarIcon className="h-10 w-10 text-purple-500" />
                <div>
                    <h3 className="text-xl font-bold">Analytics Included</h3>
                    <p className="text-zinc-500 dark:text-zinc-400">Track your progress with built-in tools.</p>
                </div>
              </div>
            </div>
          </CodeBlock>
        </section>

        {/* 10. Dark Mode Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">10. Dark Mode Section</h2>
          <CodeBlock code={`<div className="rounded-3xl bg-zinc-900 px-6 py-12 text-white shadow-2xl md:px-12">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
    {/* items */}
  </div>
</div>`}>
            <div className="rounded-3xl bg-zinc-900 px-6 py-12 text-white shadow-2xl md:px-12">
              <div className="mb-12 max-w-2xl">
                <h3 className="text-3xl font-bold tracking-tight">Everything you need</h3>
                <p className="mt-4 text-zinc-400">Includes all the features you need to get started.</p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {features.slice(0, 3).map((feature) => (
                  <div key={feature.name}>
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold">{feature.name}</h4>
                    <p className="mt-2 text-sm text-zinc-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </CodeBlock>
        </section>

        {/* 11. With Stats */}
        <section>
          <h2 className="text-2xl font-bold mb-6">11. With Stats</h2>
          <CodeBlock code={`<div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
  <div>
    <div className="text-4xl font-black text-cyan-600">100%</div>
    <div className="font-bold">Uptime</div>
    <p className="text-sm text-zinc-500">Always available</p>
  </div>
  {/* ... */}
</div>`}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-100 dark:divide-zinc-800">
                    <div className="pt-4 md:pt-0">
                        <div className="text-4xl font-black text-cyan-600 mb-2">100%</div>
                        <div className="font-bold text-lg">Uptime</div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Always available for you</p>
                    </div>
                    <div className="pt-4 md:pt-0">
                        <div className="text-4xl font-black text-cyan-600 mb-2">24/7</div>
                        <div className="font-bold text-lg">Support</div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">We are here to help</p>
                    </div>
                    <div className="pt-4 md:pt-0">
                        <div className="text-4xl font-black text-cyan-600 mb-2">100k+</div>
                        <div className="font-bold text-lg">Users</div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Trusted by many</p>
                    </div>
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* 12. Minimal List */}
        <section>
          <h2 className="text-2xl font-bold mb-6">12. Minimal List</h2>
          <CodeBlock code={`<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
  {features.map(f => (
    <div className="flex items-center gap-2 font-medium">
      <CheckCircleIcon className="h-5 w-5 text-cyan-500" />
      {f.name}
    </div>
  ))}
</div>`}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[...features, ...features].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 font-medium text-zinc-700 dark:text-zinc-300">
                  <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-cyan-500" />
                  {feature.name}
                </div>
              ))}
            </div>
          </CodeBlock>
        </section>

        {/* 13. Gradient Background */}
        <section>
          <h2 className="text-2xl font-bold mb-6">13. Gradient Background</h2>
          <CodeBlock code={`<div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-white">
  {/* content */}
</div>`}>
            <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-white md:p-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Ready to dive in?</h3>
                        <p className="text-cyan-100 mb-6">Start your free trial today and experience the power of our platform.</p>
                        <Button variant="light">Get Started</Button>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {features.slice(0, 3).map(f => (
                            <div key={f.name} className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                                <f.icon className="h-6 w-6 text-cyan-200" />
                                <span className="font-medium">{f.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </CodeBlock>
        </section>

        {/* 14. Centered with CTA */}
        <section>
          <h2 className="text-2xl font-bold mb-6">14. Centered with CTA</h2>
          <CodeBlock code={`<div className="text-center">
  <h2 className="text-3xl font-bold">All-in-one platform</h2>
  <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">...</div>
  <Button className="mt-12">View all features</Button>
</div>`}>
            <div className="rounded-2xl bg-zinc-50 py-12 px-6 text-center dark:bg-zinc-900">
                <h2 className="text-3xl font-bold">All-in-one platform</h2>
                <p className="mx-auto mt-4 max-w-2xl text-zinc-500 dark:text-zinc-400">
                    We provide everything you need to build, launch, and scale your business.
                </p>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {features.slice(0, 3).map((feature) => (
                        <div key={feature.name} className="flex flex-col items-center">
                            <div className="mb-4 rounded-full bg-white p-3 shadow-sm dark:bg-zinc-800">
                                <feature.icon className="h-6 w-6 text-zinc-900 dark:text-white" />
                            </div>
                            <h3 className="font-bold">{feature.name}</h3>
                            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
                <Button className="mt-12" size="lg">View all features</Button>
            </div>
          </CodeBlock>
        </section>

        {/* 15. Hover Effect Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-6">15. Hover Effect Cards</h2>
          <CodeBlock code={`<div className="group rounded-2xl border p-6 hover:border-cyan-500 hover:shadow-lg transition-all">
  {/* content */}
</div>`}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {features.slice(0, 3).map((feature) => (
                    <div key={feature.name} className="group cursor-pointer rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-cyan-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-cyan-500 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-400">
                            <feature.icon className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-lg font-bold group-hover:text-cyan-600 dark:group-hover:text-cyan-400">{feature.name}</h3>
                        <p className="text-zinc-500 dark:text-zinc-400">{feature.description}</p>
                    </div>
                ))}
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}
