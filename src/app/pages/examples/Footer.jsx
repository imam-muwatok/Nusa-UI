import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";

export default function FooterPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Footer</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Bagian penutup halaman yang berisi navigasi, informasi legal, dan interaksi sekunder.
        </p>
      </div>

      <div className="space-y-12">
        {/* Multi-column */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Multi-column</h2>
          <CodeBlock code={`<footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nusa-UI</span>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-zinc-900 uppercase dark:text-white">Resources</h2>
          <ul className="text-zinc-500 dark:text-zinc-400 font-medium">
            <li className="mb-4"><a href="#" className="hover:underline">Nusa-UI</a></li>
            <li><a href="#" className="hover:underline">Tailwind CSS</a></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-zinc-900 uppercase dark:text-white">Follow us</h2>
          <ul className="text-zinc-500 dark:text-zinc-400 font-medium">
            <li className="mb-4"><a href="#" className="hover:underline">Github</a></li>
            <li><a href="#" className="hover:underline">Discord</a></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-zinc-900 uppercase dark:text-white">Legal</h2>
          <ul className="text-zinc-500 dark:text-zinc-400 font-medium">
            <li className="mb-4"><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-6 border-zinc-200 sm:mx-auto dark:border-zinc-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-400">© 2023 <a href="#" className="hover:underline">Nusa-UI™</a>. All Rights Reserved.</span>
      <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
        {/* Social Icons */}
      </div>
    </div>
  </div>
</footer>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <footer className="bg-white dark:bg-zinc-900">
                    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                        <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="#" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nusa-UI</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                            <h2 className="mb-6 text-sm font-semibold text-zinc-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-zinc-500 dark:text-zinc-400 font-medium">
                                <li className="mb-4"><a href="#" className="hover:underline">Nusa-UI</a></li>
                                <li><a href="#" className="hover:underline">Tailwind CSS</a></li>
                            </ul>
                            </div>
                            <div>
                            <h2 className="mb-6 text-sm font-semibold text-zinc-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-zinc-500 dark:text-zinc-400 font-medium">
                                <li className="mb-4"><a href="#" className="hover:underline">Github</a></li>
                                <li><a href="#" className="hover:underline">Discord</a></li>
                            </ul>
                            </div>
                            <div>
                            <h2 className="mb-6 text-sm font-semibold text-zinc-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-zinc-500 dark:text-zinc-400 font-medium">
                                <li className="mb-4"><a href="#" className="hover:underline">Privacy Policy</a></li>
                                <li><a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <hr className="my-6 border-zinc-200 sm:mx-auto dark:border-zinc-700 lg:my-8" />
                        <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-400">© 2023 <a href="#" className="hover:underline">Nusa-UI™</a>. All Rights Reserved.</span>
                        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19"><path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/></svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16"><path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/></svg>
                                <span className="sr-only">Discord community</span>
                            </a>
                        </div>
                        </div>
                    </div>
                </footer>
            </div>
          </CodeBlock>
        </section>

        {/* Newsletter Signup */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Newsletter</h2>
          <CodeBlock code={`<footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0 max-w-sm">
        <a href="#" className="flex items-center mb-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nusa-UI</span>
        </a>
        <p className="text-zinc-500 dark:text-zinc-400 mb-4">Subscribe to our newsletter to get the latest updates.</p>
        <form className="flex gap-2">
            <input type="email" placeholder="Enter your email" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" />
            <Button size="sm">Subscribe</Button>
        </form>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
         {/* Links... */}
      </div>
    </div>
    {/* Copyright... */}
  </div>
</footer>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <footer className="bg-white dark:bg-zinc-900">
                    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                        <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0 max-w-sm">
                            <a href="#" className="flex items-center mb-4">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nusa-UI</span>
                            </a>
                            <p className="text-zinc-500 dark:text-zinc-400 mb-4">Subscribe to our newsletter to get the latest updates.</p>
                            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                <input type="email" placeholder="Enter your email" className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" />
                                <Button size="sm">Subscribe</Button>
                            </form>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                            <h2 className="mb-6 text-sm font-semibold text-zinc-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-zinc-500 dark:text-zinc-400 font-medium">
                                <li className="mb-4"><a href="#" className="hover:underline">Nusa-UI</a></li>
                                <li><a href="#" className="hover:underline">Tailwind CSS</a></li>
                            </ul>
                            </div>
                            <div>
                            <h2 className="mb-6 text-sm font-semibold text-zinc-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-zinc-500 dark:text-zinc-400 font-medium">
                                <li className="mb-4"><a href="#" className="hover:underline">Github</a></li>
                                <li><a href="#" className="hover:underline">Discord</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <hr className="my-6 border-zinc-200 sm:mx-auto dark:border-zinc-700 lg:my-8" />
                        <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-400">© 2023 <a href="#" className="hover:underline">Nusa-UI™</a>. All Rights Reserved.</span>
                        </div>
                    </div>
                </footer>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}