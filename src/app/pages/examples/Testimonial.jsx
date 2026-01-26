import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Carousel from "../../components/ui/Carousel";
import { StarIcon } from "@heroicons/react/24/solid";

export default function TestimonialPage() {
  const testimonials = [
    {
      name: "Bonnie Green",
      role: "Developer at Open AI",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      content: "Nusa-UI is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
      rating: 5
    },
    {
      name: "Jese Leos",
      role: "Designer at Google",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      content: "I really like the clean design and the code quality. It's very easy to customize and integrate into my projects. Highly recommended!",
      rating: 4
    },
    {
      name: "Michael Gough",
      role: "CEO at Facebook",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
      content: "This library has saved me so much time. The components are well-documented and look great out of the box. A must-have for any React developer.",
      rating: 5
    }
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Testimonials</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Tampilkan ulasan dan kepercayaan pelanggan dengan berbagai gaya testimonial.
        </p>
      </div>

      <div className="space-y-12">
        {/* Grid Layout */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Grid Layout</h2>
          <CodeBlock code={`<div className="grid mb-8 border border-zinc-200 rounded-lg shadow-sm dark:border-zinc-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-zinc-800">
  {testimonials.map((testimonial, index) => (
    <figure key={index} className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-zinc-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-zinc-800 dark:border-zinc-700">
      <blockquote className="max-w-2xl mx-auto mb-4 text-zinc-500 lg:mb-8 dark:text-zinc-400">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Very easy this was to integrate</h3>
        <p className="my-4">"{testimonial.content}"</p>
      </blockquote>
      <figcaption className="flex items-center justify-center space-x-3">
        <img className="rounded-full w-9 h-9" src={testimonial.avatar} alt="profile picture" />
        <div className="space-y-0.5 font-medium dark:text-white text-left">
          <div>{testimonial.name}</div>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</div>
        </div>
      </figcaption>
    </figure>
  ))}
</div>`}>
            <div className="grid mb-8 border border-zinc-200 rounded-lg shadow-sm dark:border-zinc-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-zinc-800">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <figure key={index} className={`flex flex-col items-center justify-center p-8 text-center bg-white border-b border-zinc-200 md:border-r dark:bg-zinc-800 dark:border-zinc-700 ${index === 0 ? 'rounded-t-lg md:rounded-tr-none md:rounded-tl-lg' : 'md:rounded-tr-lg'}`}>
                  <blockquote className="max-w-2xl mx-auto mb-4 text-zinc-500 lg:mb-8 dark:text-zinc-400">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Very easy this was to integrate</h3>
                    <p className="my-4">"{testimonial.content}"</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center space-x-3">
                    <img className="rounded-full w-9 h-9" src={testimonial.avatar} alt="profile picture" />
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                      <div>{testimonial.name}</div>
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </CodeBlock>
        </section>

        {/* Simple Card */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Simple Card</h2>
          <CodeBlock code={`<div className="grid gap-8 md:grid-cols-3">
  {testimonials.map((testimonial, index) => (
    <div key={index} className="p-6 bg-white rounded-lg border border-zinc-200 shadow-md dark:bg-zinc-800 dark:border-zinc-700">
      <div className="flex items-center mb-4 text-yellow-400">
         {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={\`w-5 h-5 \${i < testimonial.rating ? 'text-yellow-400' : 'text-zinc-300 dark:text-zinc-600'}\`} />
         ))}
      </div>
      <p className="mb-4 text-zinc-500 dark:text-zinc-400">"{testimonial.content}"</p>
      <div className="flex items-center space-x-3">
        <img className="w-8 h-8 rounded-full" src={testimonial.avatar} alt="profile" />
        <div className="font-medium dark:text-white">
            <div>{testimonial.name}</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</div>
        </div>
      </div>
    </div>
  ))}
</div>`}>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 bg-white rounded-lg border border-zinc-200 shadow-md dark:bg-zinc-800 dark:border-zinc-700">
                  <div className="flex items-center mb-4 text-yellow-400">
                     {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-zinc-300 dark:text-zinc-600'}`} />
                     ))}
                  </div>
                  <p className="mb-4 text-zinc-500 dark:text-zinc-400">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <img className="w-8 h-8 rounded-full" src={testimonial.avatar} alt="profile" />
                    <div className="font-medium dark:text-white">
                        <div>{testimonial.name}</div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CodeBlock>
        </section>

        {/* Slider / Carousel */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Slider / Carousel</h2>
          <CodeBlock code={`<Carousel autoSlide autoSlideInterval={5000}>
  {testimonials.map((testimonial, index) => (
    <div key={index} className="flex flex-col items-center justify-center p-12 text-center bg-zinc-50 dark:bg-zinc-800 rounded-2xl h-full">
        <img className="w-20 h-20 mb-4 rounded-full shadow-lg" src={testimonial.avatar} alt={testimonial.name} />
        <blockquote className="max-w-2xl mx-auto mb-4 text-zinc-500 lg:mb-8 dark:text-zinc-400">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">"Excellent Design"</h3>
            <p className="text-lg italic">"{testimonial.content}"</p>
        </blockquote>
        <div className="font-medium text-zinc-900 dark:text-white">{testimonial.name}</div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</div>
    </div>
  ))}
</Carousel>`}>
            <div className="w-full max-w-4xl mx-auto h-96">
              <Carousel autoSlide autoSlideInterval={5000}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-12 text-center bg-zinc-50 dark:bg-zinc-800 rounded-2xl h-full w-full">
                      <img className="w-20 h-20 mb-4 rounded-full shadow-lg" src={testimonial.avatar} alt={testimonial.name} />
                      <blockquote className="max-w-2xl mx-auto mb-4 text-zinc-500 lg:mb-8 dark:text-zinc-400">
                          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">"Excellent Design"</h3>
                          <p className="text-lg italic">"{testimonial.content}"</p>
                      </blockquote>
                      <div className="font-medium text-zinc-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</div>
                  </div>
                ))}
              </Carousel>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}