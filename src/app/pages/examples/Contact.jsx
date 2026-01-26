import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Contact</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Halaman kontak dengan formulir dan informasi lokasi.
        </p>
      </div>

      <div className="space-y-12">
        {/* Contact Form & Info */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Contact Form & Info</h2>
          <CodeBlock code={`<section className="bg-white dark:bg-zinc-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-zinc-500 dark:text-zinc-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-zinc-900 bg-zinc-50 rounded-lg border border-zinc-300 shadow-sm focus:ring-cyan-500 focus:border-cyan-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-zinc-900 bg-zinc-50 rounded-lg shadow-sm border border-zinc-300 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Leave a comment..."></textarea>
          </div>
          <Button type="submit">Send message</Button>
      </form>
  </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-white dark:bg-zinc-900">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-900 dark:text-white">Contact Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-zinc-500 dark:text-zinc-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                        <form action="#" className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">Your email</label>
                                <input type="email" id="email" className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300">Subject</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-zinc-900 bg-zinc-50 rounded-lg border border-zinc-300 shadow-sm focus:ring-cyan-500 focus:border-cyan-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-400">Your message</label>
                                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-zinc-900 bg-zinc-50 rounded-lg shadow-sm border border-zinc-300 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <Button type="submit">Send message</Button>
                        </form>
                    </div>
                </section>
            </div>
          </CodeBlock>
        </section>

        {/* Contact with Map */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Contact with Map</h2>
          <CodeBlock code={`<section className="bg-white dark:bg-zinc-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">Let's find us</h2>
              <p className="mb-6 font-light text-zinc-500 dark:text-zinc-400 md:text-lg">We are located in the heart of the city. Come visit us for a coffee and a chat.</p>
              <div className="space-y-4">
                  <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                          <MapPinIcon className="h-6 w-6" />
                      </div>
                      <div>
                          <h3 className="font-bold text-zinc-900 dark:text-white">Our Office</h3>
                          <p className="text-zinc-500 dark:text-zinc-400">123 Main Street, New York, NY 10001</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                          <PhoneIcon className="h-6 w-6" />
                      </div>
                      <div>
                          <h3 className="font-bold text-zinc-900 dark:text-white">Phone</h3>
                          <p className="text-zinc-500 dark:text-zinc-400">+1 (555) 123-4567</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                          <EnvelopeIcon className="h-6 w-6" />
                      </div>
                      <div>
                          <h3 className="font-bold text-zinc-900 dark:text-white">Email</h3>
                          <p className="text-zinc-500 dark:text-zinc-400">info@company.com</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="h-96 w-full rounded-lg bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1560412335496!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Google Map"
              ></iframe>
          </div>
      </div>
  </div>
</section>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <section className="bg-white dark:bg-zinc-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="flex flex-col justify-center">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">Let's find us</h2>
                                <p className="mb-6 font-light text-zinc-500 dark:text-zinc-400 md:text-lg">We are located in the heart of the city. Come visit us for a coffee and a chat.</p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                                            <MapPinIcon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-zinc-900 dark:text-white">Our Office</h3>
                                            <p className="text-zinc-500 dark:text-zinc-400">123 Main Street, New York, NY 10001</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                                            <PhoneIcon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-zinc-900 dark:text-white">Phone</h3>
                                            <p className="text-zinc-500 dark:text-zinc-400">+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                                            <EnvelopeIcon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-zinc-900 dark:text-white">Email</h3>
                                            <p className="text-zinc-500 dark:text-zinc-400">info@company.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-96 w-full rounded-lg bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1560412335496!5m2!1sen!2sus" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy"
                                    title="Google Map"
                                ></iframe>
                            </div>
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