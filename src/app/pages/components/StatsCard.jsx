import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import StatsCard from "../../components/ui/StatsCard";
import { CurrencyDollarIcon, UsersIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function StatsCardPage() {
  const revenueData = [10, 20, 15, 30, 25, 40, 35];
  const usersData = [5, 8, 6, 12, 10, 15, 13];
  const salesData = [40, 30, 35, 20, 25, 15, 10];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Stats Card</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Kartu ringkas untuk menampilkan statistik kunci dengan visualisasi chart mini.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Usage</h2>
          <CodeBlock code={`<StatsCard
  title="Total Revenue"
  value="$45,231.89"
  change="+20.1%"
  icon={CurrencyDollarIcon}
  chartData={[10, 20, 15, 30, 25, 40, 35]}
  chartColor="green"
/>`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <StatsCard
                title="Total Revenue"
                value="$45,231.89"
                change="+20.1%"
                icon={CurrencyDollarIcon}
                chartData={revenueData}
                chartColor="green"
              />
              <StatsCard
                title="Active Users"
                value="+2,350"
                change="+18.1%"
                icon={UsersIcon}
                chartData={usersData}
                chartColor="blue"
              />
              <StatsCard
                title="Sales"
                value="1,234"
                change="-2.5%"
                changeType="negative"
                icon={ShoppingCartIcon}
                chartData={salesData}
                chartColor="red"
              />
            </div>
          </CodeBlock>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Without Chart</h2>
          <CodeBlock code={`<StatsCard
  title="Total Revenue"
  value="$45,231.89"
  change="+20.1%"
  icon={CurrencyDollarIcon}
/>`}>
            <div className="w-full max-w-xs">
              <StatsCard
                title="Total Revenue"
                value="$45,231.89"
                change="+20.1%"
                icon={CurrencyDollarIcon}
              />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}