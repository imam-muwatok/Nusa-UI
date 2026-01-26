import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";
import { PlayIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export default function HeroPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Hero</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen Hero section untuk menampilkan pesan utama di bagian atas halaman.
        </p>
      </div>

      <div className="space-y-12">
        {/* Simple Hero */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Simple Hero</h2>
          <CodeBlock code={`<section className="bg-white dark:bg-zinc-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
      <p className="mb-8 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 lg:px-48 dark:text-zinc-400">Here at Nusa-UI we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Button size="lg">Get started</Button>
          <Button size="lg" variant="secondary" type="outline">Learn more</Button>
      </div>
  </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-white dark:bg-zinc-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
                        <p className="mb-8 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 lg:px-48 dark:text-zinc-400">Here at Nusa-UI we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <Button size="lg">Get started</Button>
                            <Button size="lg" variant="secondary" type="outline">Learn more</Button>
                        </div>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

        {/* Hero with Image */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hero with Image</h2>
          <CodeBlock code={`<section className="bg-white dark:bg-zinc-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
            <p className="max-w-2xl mb-6 font-light text-zinc-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-400">From checkout to global sales tax compliance, companies around the world use Nusa-UI to simplify their payment stack.</p>
            <div className="flex flex-wrap gap-3">
                <Button size="lg">Get started</Button>
                <Button size="lg" variant="secondary" type="outline">Speak to Sales</Button>
            </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
        </div>
    </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-white dark:bg-zinc-900">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                            <p className="max-w-2xl mb-6 font-light text-zinc-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-400">From checkout to global sales tax compliance, companies around the world use Nusa-UI to simplify their payment stack.</p>
                            <div className="flex flex-wrap gap-3">
                                <Button size="lg">Get started</Button>
                                <Button size="lg" variant="secondary" type="outline">Speak to Sales</Button>
                            </div>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                        </div>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

         {/* Hero with Background Image */}
         <section>
          <h2 className="text-2xl font-bold mb-6">Hero with Background Image</h2>
          <CodeBlock code={`<section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-zinc-700 bg-blend-multiply bg-cover">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p className="mb-8 text-lg font-normal text-zinc-300 lg:text-xl sm:px-16 lg:px-48">Here at Nusa-UI we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Button size="lg">Get started</Button>
            <Button size="lg" variant="light" type="outline" className="text-white border-white hover:bg-zinc-100 hover:text-zinc-900">Learn more</Button>
        </div>
    </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-center bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-zinc-700 bg-blend-multiply">
                    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
                        <p className="mb-8 text-lg font-normal text-zinc-300 lg:text-xl sm:px-16 lg:px-48">Here at Nusa-UI we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <Button size="lg">Get started</Button>
                            <Button size="lg" variant="light" type="outline" className="text-white border-white hover:bg-zinc-100 hover:text-zinc-900">Learn more</Button>
                        </div>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

        {/* Hero with Email Signup */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hero with Email Signup</h2>
          <CodeBlock code={`<section className="bg-white dark:bg-zinc-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">Join the community</h1>
      <p className="mb-8 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 lg:px-48 dark:text-zinc-400">Get the latest updates and news directly in your inbox.</p>
      <form className="w-full max-w-md mx-auto">
          <div className="relative">
              <input type="email" className="block w-full p-4 pl-4 text-sm text-zinc-900 border border-zinc-300 rounded-lg bg-zinc-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-zinc-800 dark:border-zinc-700 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Enter your email here..." required />
              <Button type="submit" className="text-white absolute right-2.5 bottom-2.5 top-2 font-medium rounded-lg text-sm px-4 py-2">Sign up</Button>
          </div>
      </form>
  </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-white dark:bg-zinc-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">Join the community</h1>
                        <p className="mb-8 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 lg:px-48 dark:text-zinc-400">Get the latest updates and news directly in your inbox.</p>
                        <form className="w-full max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input type="email" className="block w-full p-4 pl-4 text-sm text-zinc-900 border border-zinc-300 rounded-lg bg-zinc-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-zinc-800 dark:border-zinc-700 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Enter your email here..." required />
                                <Button type="submit" className="text-white absolute right-2.5 bottom-2.5 top-2 font-medium rounded-lg text-sm px-4 py-2">Sign up</Button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

        {/* Hero with Video Background */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hero with Video Background</h2>
          <CodeBlock code={`<section className="relative bg-white dark:bg-zinc-900 overflow-hidden">
    <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Background" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-zinc-900/50"></div>
    </div>
    <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Experience the difference</h1>
        <p className="mb-8 text-lg font-normal text-zinc-200 lg:text-xl sm:px-16 lg:px-48">Watch our introduction video to learn more about our mission.</p>
        <button className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-white">
            <PlayIcon className="w-8 h-8 ml-1" />
        </button>
    </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="relative bg-white dark:bg-zinc-900 overflow-hidden">
                    <div className="absolute inset-0">
                        <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Background" className="w-full h-full object-cover opacity-50" />
                        <div className="absolute inset-0 bg-zinc-900/50"></div>
                    </div>
                    <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Experience the difference</h1>
                        <p className="mb-8 text-lg font-normal text-zinc-200 lg:text-xl sm:px-16 lg:px-48">Watch our introduction video to learn more about our mission.</p>
                        <button className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-white">
                            <PlayIcon className="w-8 h-8 ml-1" />
                        </button>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

        {/* Hero with App Screenshot */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hero with App Screenshot</h2>
          <CodeBlock code={`<section className="bg-white dark:bg-zinc-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Manage your team with ease</h1>
            <p className="max-w-2xl mb-6 font-light text-zinc-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
            <div className="flex flex-wrap gap-3">
                <Button size="lg">Start Free Trial</Button>
            </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mobile-app.svg" alt="mockup" />
        </div>
    </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-white dark:bg-zinc-900">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Manage your team with ease</h1>
                            <p className="max-w-2xl mb-6 font-light text-zinc-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                            <div className="flex flex-wrap gap-3">
                                <Button size="lg">Start Free Trial</Button>
                            </div>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mobile-app.svg" alt="mockup" />
                        </div>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

        {/* Hero with Trusted Companies */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hero with Trusted Companies</h2>
          <CodeBlock code={`<section className="bg-white dark:bg-zinc-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">Trusted by the world's best</h1>
      <p className="mb-8 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 lg:px-48 dark:text-zinc-400">Join over 10,000+ companies that trust us.</p>
      <div className="flex flex-wrap justify-center gap-8 text-zinc-400 dark:text-zinc-500">
          {/* SVG Logos */}
          <svg className="h-8" viewBox="0 0 100 30" fill="currentColor"><path d="M10,15 L20,5 L30,15 L20,25 Z" /></svg>
          <svg className="h-8" viewBox="0 0 100 30" fill="currentColor"><circle cx="15" cy="15" r="10" /></svg>
          <svg className="h-8" viewBox="0 0 100 30" fill="currentColor"><rect x="5" y="5" width="20" height="20" /></svg>
          <svg className="h-8" viewBox="0 0 100 30" fill="currentColor"><path d="M10,25 L15,5 L25,5 L30,25 Z" /></svg>
      </div>
  </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-white dark:bg-zinc-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">Trusted by the world's best</h1>
                        <p className="mb-8 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 lg:px-48 dark:text-zinc-400">Join over 10,000+ companies that trust us.</p>
                        <div className="flex flex-wrap justify-center gap-8 text-zinc-400 dark:text-zinc-500">
                            <svg className="h-8 w-20" viewBox="0 0 100 30" fill="currentColor"><path d="M10,15 L20,5 L30,15 L20,25 Z" /></svg>
                            <svg className="h-8 w-20" viewBox="0 0 100 30" fill="currentColor"><circle cx="15" cy="15" r="10" /></svg>
                            <svg className="h-8 w-20" viewBox="0 0 100 30" fill="currentColor"><rect x="5" y="5" width="20" height="20" /></svg>
                            <svg className="h-8 w-20" viewBox="0 0 100 30" fill="currentColor"><path d="M10,25 L15,5 L25,5 L30,25 Z" /></svg>
                        </div>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

        {/* Hero with Feature List */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hero with Feature List</h2>
          <CodeBlock code={`<section className="bg-white dark:bg-zinc-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Building the future of web</h1>
            <ul className="space-y-4 text-left text-zinc-500 dark:text-zinc-400 mb-8">
                <li className="flex items-center space-x-3">
                    <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                    <span>Continuous integration and deployment</span>
                </li>
                <li className="flex items-center space-x-3">
                    <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                    <span>Development workflow</span>
                </li>
                <li className="flex items-center space-x-3">
                    <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                    <span>Knowledge management</span>
                </li>
            </ul>
            <Button size="lg">Get started</Button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="mockup" className="rounded-lg shadow-lg" />
        </div>
    </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-white dark:bg-zinc-900">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Building the future of web</h1>
                            <ul className="space-y-4 text-left text-zinc-500 dark:text-zinc-400 mb-8">
                                <li className="flex items-center space-x-3">
                                    <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                                    <span>Continuous integration and deployment</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                                    <span>Development workflow</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                                    <span>Knowledge management</span>
                                </li>
                            </ul>
                            <Button size="lg">Get started</Button>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="mockup" className="rounded-lg shadow-lg" />
                        </div>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

        {/* Hero with Testimonial */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hero with Testimonial</h2>
          <CodeBlock code={`<section className="bg-zinc-50 dark:bg-zinc-800">
    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
            <svg className="h-12 mx-auto mb-3 text-zinc-400 dark:text-zinc-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19C19.5523 16 20 15.5523 20 15V9C20 8.44772 19.5523 8 19 8H15C14.4477 8 14 8.44772 14 9V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V7C11 5.89543 11.8954 5 13 5H19C20.1046 5 21 5.89543 21 7V15C21 16.1046 20.1046 17 19 17H16.017C15.4647 17 15.017 17.4477 15.017 18V21C15.017 21.5523 14.5693 22 14.017 22H13C12.4477 22 12 21.5523 12 21V18H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10C10.5523 16 11 15.5523 11 15V9C11 8.44772 10.5523 8 10 8H6C5.44772 8 5 8.44772 5 9V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V7C2 5.89543 2.89543 5 4 5H10C11.1046 5 12 5.89543 12 7V15C12 16.1046 11.1046 17 10 17H7.01697C6.46468 17 6.01697 17.4477 6.01697 18V21C6.01697 21.5523 5.56925 22 5.01697 22H4C3.44772 22 3 21.5523 3 21V18H5.01697Z" fill="currentColor"/>
            </svg>
            <blockquote>
                <p className="text-2xl font-medium text-zinc-900 dark:text-white">"Nusa-UI is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                <div className="flex items-center divide-x-2 divide-zinc-500 dark:divide-zinc-700">
                    <div className="pr-3 font-medium text-zinc-900 dark:text-white">Micheal Gough</div>
                    <div className="pl-3 text-sm font-light text-zinc-500 dark:text-zinc-400">CEO at Google</div>
                </div>
            </figcaption>
        </figure>
    </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-zinc-50 dark:bg-zinc-800">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                        <figure className="max-w-screen-md mx-auto">
                            <svg className="h-12 mx-auto mb-3 text-zinc-400 dark:text-zinc-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19C19.5523 16 20 15.5523 20 15V9C20 8.44772 19.5523 8 19 8H15C14.4477 8 14 8.44772 14 9V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V7C11 5.89543 11.8954 5 13 5H19C20.1046 5 21 5.89543 21 7V15C21 16.1046 20.1046 17 19 17H16.017C15.4647 17 15.017 17.4477 15.017 18V21C15.017 21.5523 14.5693 22 14.017 22H13C12.4477 22 12 21.5523 12 21V18H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10C10.5523 16 11 15.5523 11 15V9C11 8.44772 10.5523 8 10 8H6C5.44772 8 5 8.44772 5 9V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V7C2 5.89543 2.89543 5 4 5H10C11.1046 5 12 5.89543 12 7V15C12 16.1046 11.1046 17 10 17H7.01697C6.46468 17 6.01697 17.4477 6.01697 18V21C6.01697 21.5523 5.56925 22 5.01697 22H4C3.44772 22 3 21.5523 3 21V18H5.01697Z" fill="currentColor"/>
                            </svg>
                            <blockquote>
                                <p className="text-2xl font-medium text-zinc-900 dark:text-white">"Nusa-UI is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                                <div className="flex items-center divide-x-2 divide-zinc-500 dark:divide-zinc-700">
                                    <div className="pr-3 font-medium text-zinc-900 dark:text-white">Micheal Gough</div>
                                    <div className="pl-3 text-sm font-light text-zinc-500 dark:text-zinc-400">CEO at Google</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

        {/* Hero with Split Screen (Dark) */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hero with Split Screen (Dark)</h2>
          <CodeBlock code={`<section className="bg-zinc-900 dark:bg-black">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl">Dark Mode First</h1>
            <p className="max-w-2xl mb-6 font-light text-zinc-400 lg:mb-8 md:text-lg lg:text-xl">Designed for the modern web, with dark mode baked in from the start.</p>
            <Button variant="light">Explore</Button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <div className="w-full h-64 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"></div>
        </div>
    </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-zinc-900 dark:bg-black">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl">Dark Mode First</h1>
                            <p className="max-w-2xl mb-6 font-light text-zinc-400 lg:mb-8 md:text-lg lg:text-xl">Designed for the modern web, with dark mode baked in from the start.</p>
                            <Button variant="light">Explore</Button>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <div className="w-full h-64 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"></div>
                        </div>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

        {/* Hero with Search Bar */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hero with Search Bar</h2>
          <CodeBlock code={`<section className="bg-white dark:bg-zinc-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">Find your next adventure</h1>
        <p className="mb-8 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 lg:px-48 dark:text-zinc-400">Search for flights, hotels, and car rentals.</p>
        <div className="max-w-2xl mx-auto">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 bottom-10 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-zinc-500 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" className="block w-full p-4 pl-10 text-sm text-zinc-900 border border-zinc-300 rounded-lg bg-zinc-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-zinc-800 dark:border-zinc-700 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Search destinations..." required />
                <Button type="submit" className="text-white absolute right-2.5 bottom-2.5 top-2 font-medium rounded-lg text-sm px-4 py-2">Search</Button>
            </div>
        </div>
    </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-white dark:bg-zinc-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">Find your next adventure</h1>
                        <p className="mb-8 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 lg:px-48 dark:text-zinc-400">Search for flights, hotels, and car rentals.</p>
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 bottom-10 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-zinc-500 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" className="block w-full p-4 pl-10 text-sm text-zinc-900 border border-zinc-300 rounded-lg bg-zinc-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-zinc-800 dark:border-zinc-700 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Search destinations..." required />
                                <Button type="submit" className="text-white absolute right-2.5 bottom-2.5 top-2 font-medium rounded-lg text-sm px-4 py-2">Search</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

        {/* Hero with Pricing Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hero with Pricing Cards</h2>
          <CodeBlock code={`<section className="bg-white dark:bg-zinc-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">Simple Pricing</h1>
        <p className="mb-8 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 lg:px-48 dark:text-zinc-400">Choose the plan that suits you best.</p>
        <div className="grid gap-8 lg:grid-cols-3 mt-8">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col p-6 mx-auto max-w-lg text-center text-zinc-900 bg-white rounded-lg border border-zinc-100 shadow dark:border-zinc-600 xl:p-8 dark:bg-zinc-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold">Plan {i}</h3>
                    <p className="font-light text-zinc-500 sm:text-lg dark:text-zinc-400">Best for personal use.</p>
                    <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-5xl font-extrabold">\${i * 10}</span>
                        <span className="text-zinc-500 dark:text-zinc-400">/month</span>
                    </div>
                    <Button>Get started</Button>
                </div>
            ))}
        </div>
    </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-white dark:bg-zinc-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">Simple Pricing</h1>
                        <p className="mb-8 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 lg:px-48 dark:text-zinc-400">Choose the plan that suits you best.</p>
                        <div className="grid gap-8 lg:grid-cols-3 mt-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex flex-col p-6 mx-auto max-w-lg text-center text-zinc-900 bg-white rounded-lg border border-zinc-100 shadow dark:border-zinc-600 xl:p-8 dark:bg-zinc-800 dark:text-white">
                                    <h3 className="mb-4 text-2xl font-semibold">Plan {i}</h3>
                                    <p className="font-light text-zinc-500 sm:text-lg dark:text-zinc-400">Best for personal use.</p>
                                    <div className="flex justify-center items-baseline my-8">
                                        <span className="mr-2 text-5xl font-extrabold">${i * 10}</span>
                                        <span className="text-zinc-500 dark:text-zinc-400">/month</span>
                                    </div>
                                    <Button>Get started</Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

        {/* Hero with Countdown */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hero with Countdown</h2>
          <CodeBlock code={`<section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Launching Soon</h1>
        <p className="mb-8 text-lg font-normal text-white/80 lg:text-xl sm:px-16 lg:px-48">We are working hard to bring you something amazing.</p>
        <div className="flex justify-center gap-4 text-center">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 w-24">
                <span className="block text-3xl font-bold">05</span>
                <span className="text-xs uppercase">Days</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 w-24">
                <span className="block text-3xl font-bold">12</span>
                <span className="text-xs uppercase">Hours</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 w-24">
                <span className="block text-3xl font-bold">45</span>
                <span className="text-xs uppercase">Minutes</span>
            </div>
        </div>
    </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Launching Soon</h1>
                        <p className="mb-8 text-lg font-normal text-white/80 lg:text-xl sm:px-16 lg:px-48">We are working hard to bring you something amazing.</p>
                        <div className="flex justify-center gap-4 text-center">
                            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 w-24">
                                <span className="block text-3xl font-bold">05</span>
                                <span className="text-xs uppercase">Days</span>
                            </div>
                            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 w-24">
                                <span className="block text-3xl font-bold">12</span>
                                <span className="text-xs uppercase">Hours</span>
                            </div>
                            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 w-24">
                                <span className="block text-3xl font-bold">45</span>
                                <span className="text-xs uppercase">Minutes</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

        {/* Hero with 3D Card Effect */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hero with 3D Card Effect</h2>
          <CodeBlock code={`<section className="bg-white dark:bg-zinc-900 overflow-hidden">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 z-10">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Next Gen UI</h1>
            <p className="max-w-2xl mb-6 font-light text-zinc-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-400">Experience the depth of our new design system.</p>
            <Button size="lg">Dive In</Button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative">
                <div className="w-64 h-80 bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">Glass</span>
                </div>
            </div>
        </div>
    </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-white dark:bg-zinc-900 overflow-hidden">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7 z-10">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Next Gen UI</h1>
                            <p className="max-w-2xl mb-6 font-light text-zinc-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-400">Experience the depth of our new design system.</p>
                            <Button size="lg">Dive In</Button>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                            <div className="relative">
                                <div className="w-64 h-80 bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl flex items-center justify-center">
                                    <span className="text-4xl font-bold text-white">Glass</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

        {/* Hero with Gradient Background */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hero with Gradient Background</h2>
          <CodeBlock code={`<section className="bg-gradient-to-br from-cyan-500 to-blue-600">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Vibrant & Bold</h1>
        <p className="mb-8 text-lg font-normal text-white/90 lg:text-xl sm:px-16 lg:px-48">Stand out from the crowd with our gradient hero sections.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Button variant="light">Get Started</Button>
            <Button variant="dark" type="outline" className="border-white text-white hover:bg-white hover:text-blue-600">Learn More</Button>
        </div>
    </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-gradient-to-br from-cyan-500 to-blue-600">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Vibrant & Bold</h1>
                        <p className="mb-8 text-lg font-normal text-white/90 lg:text-xl sm:px-16 lg:px-48">Stand out from the crowd with our gradient hero sections.</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <Button variant="light">Get Started</Button>
                            <Button variant="dark" type="outline" className="border-white text-white hover:bg-white hover:text-blue-600">Learn More</Button>
                        </div>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}