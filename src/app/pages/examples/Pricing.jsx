import React, { useState } from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Button from "../../components/ui/Button";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Switch from "../../components/ui/Switch";

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: annual ? 99 : 19,
      description: "Best for personal use and small projects.",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
      unavailable: ["Custom domain", "Advanced analytics", "24/7 Support"],
      buttonVariant: "light",
    },
    {
      name: "Company",
      price: annual ? 499 : 99,
      description: "Best for larger teams and growing businesses.",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 10 developers",
        "Premium support: 24 months",
        "Free updates: 24 months",
        "Custom domain",
        "Advanced analytics",
      ],
      unavailable: ["24/7 Support"],
      buttonVariant: "primary",
      popular: true,
    },
    {
      name: "Enterprise",
      price: annual ? 999 : 199,
      description: "Best for large scale uses and extended redistribution rights.",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 100+ developers",
        "Premium support: 36 months",
        "Free updates: 36 months",
        "Custom domain",
        "Advanced analytics",
        "24/7 Support",
      ],
      unavailable: [],
      buttonVariant: "light",
    },
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Pricing</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Tampilkan opsi harga dan fitur produk Anda dengan jelas.
        </p>
      </div>

      <div className="space-y-12">
        {/* Pricing Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Pricing Cards</h2>
          <CodeBlock code={`const [annual, setAnnual] = useState(false);

<div className="flex justify-center items-center gap-4 mb-8">
  <span className={\`text-sm font-medium \${!annual ? 'text-zinc-900 dark:text-white' : 'text-zinc-500'}\`}>Monthly</span>
  <Switch checked={annual} onChange={(e) => setAnnual(e.target.checked)} />
  <span className={\`text-sm font-medium \${annual ? 'text-zinc-900 dark:text-white' : 'text-zinc-500'}\`}>Annual <span className="text-cyan-500 text-xs">(Save 20%)</span></span>
</div>

<div className="grid lg:grid-cols-3 gap-8">
  {plans.map((plan) => (
    <div key={plan.name} className="flex flex-col p-6 mx-auto max-w-lg text-center text-zinc-900 bg-white rounded-2xl border border-zinc-200 shadow dark:border-zinc-800 xl:p-8 dark:bg-zinc-900 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>
      <p className="font-light text-zinc-500 sm:text-lg dark:text-zinc-400">{plan.description}</p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">\${plan.price}</span>
        <span className="text-zinc-500 dark:text-zinc-400">/{annual ? 'year' : 'month'}</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center space-x-3">
            <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={plan.buttonVariant} className="mt-auto">Get started</Button>
    </div>
  ))}
</div>`}>
            <div className="w-full">
              <div className="flex justify-center items-center gap-4 mb-8">
                <span className={`text-sm font-medium ${!annual ? 'text-zinc-900 dark:text-white' : 'text-zinc-500'}`}>Monthly</span>
                <Switch checked={annual} onChange={(e) => setAnnual(e.target.checked)} />
                <span className={`text-sm font-medium ${annual ? 'text-zinc-900 dark:text-white' : 'text-zinc-500'}`}>Annual <span className="text-cyan-500 text-xs font-bold ml-1">(Save 20%)</span></span>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {plans.map((plan) => (
                  <div key={plan.name} className={`flex flex-col p-6 mx-auto max-w-lg text-center text-zinc-900 bg-white rounded-2xl border shadow-sm xl:p-8 dark:bg-zinc-900 dark:text-white ${plan.popular ? 'border-cyan-500 ring-2 ring-cyan-500/20 dark:border-cyan-500' : 'border-zinc-200 dark:border-zinc-800'}`}>
                    {plan.popular && <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-cyan-900 dark:text-cyan-300 mb-4 w-fit mx-auto">Most Popular</span>}
                    <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>
                    <p className="font-light text-zinc-500 sm:text-lg dark:text-zinc-400">{plan.description}</p>
                    <div className="flex justify-center items-baseline my-8">
                      <span className="mr-2 text-5xl font-extrabold">${plan.price}</span>
                      <span className="text-zinc-500 dark:text-zinc-400">/{annual ? 'year' : 'month'}</span>
                    </div>
                    <ul role="list" className="mb-8 space-y-4 text-left">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-3">
                          <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {plan.unavailable.map((feature) => (
                        <li key={feature} className="flex items-center space-x-3 text-zinc-400 dark:text-zinc-600 line-through decoration-zinc-400 dark:decoration-zinc-600">
                          <XMarkIcon className="flex-shrink-0 w-5 h-5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant={plan.buttonVariant} className="mt-auto">Get started</Button>
                  </div>
                ))}
              </div>
            </div>
          </CodeBlock>
        </section>

        {/* Comparison Table */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Comparison Table</h2>
          <CodeBlock code={`<div className="relative overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
  <table className="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
    <thead className="text-xs text-zinc-700 uppercase bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-400">
      <tr>
        <th scope="col" className="px-6 py-4">Feature</th>
        <th scope="col" className="px-6 py-4 text-center">Starter</th>
        <th scope="col" className="px-6 py-4 text-center">Company</th>
        <th scope="col" className="px-6 py-4 text-center">Enterprise</th>
      </tr>
    </thead>
    <tbody>
      {/* Rows */}
    </tbody>
  </table>
</div>`}>
            <div className="relative overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <table className="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
                <thead className="text-xs text-zinc-700 uppercase bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-400">
                  <tr>
                    <th scope="col" className="px-6 py-4">Feature</th>
                    <th scope="col" className="px-6 py-4 text-center">Starter</th>
                    <th scope="col" className="px-6 py-4 text-center">Company</th>
                    <th scope="col" className="px-6 py-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-zinc-900 dark:border-zinc-800">
                    <th scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">Individual configuration</th>
                    <td className="px-6 py-4 text-center"><CheckIcon className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckIcon className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckIcon className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-zinc-900 dark:border-zinc-800">
                    <th scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">No setup, or hidden fees</th>
                    <td className="px-6 py-4 text-center"><CheckIcon className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckIcon className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckIcon className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-zinc-900 dark:border-zinc-800">
                    <th scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">Team size</th>
                    <td className="px-6 py-4 text-center">1 developer</td>
                    <td className="px-6 py-4 text-center">10 developers</td>
                    <td className="px-6 py-4 text-center">100+ developers</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-zinc-900 dark:border-zinc-800">
                    <th scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">Premium support</th>
                    <td className="px-6 py-4 text-center">6 months</td>
                    <td className="px-6 py-4 text-center">24 months</td>
                    <td className="px-6 py-4 text-center">36 months</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <th scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">Custom domain</th>
                    <td className="px-6 py-4 text-center"><XMarkIcon className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckIcon className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckIcon className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}