import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import Chart from "../../components/ui/Chart";
import StatsCard from "../../components/ui/StatsCard";
import { UsersIcon, CurrencyDollarIcon, ShoppingCartIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

export default function DashboardPage() {
  const stats = [
    { name: 'Total Revenue', value: '$45,231.89', change: '+20.1%', changeType: 'positive', icon: CurrencyDollarIcon, chartData: [10, 25, 15, 30, 12, 15, 20], chartColor: "green" },
    { name: 'Active Users', value: '2,345', change: '+15.1%', changeType: 'positive', icon: UsersIcon, chartData: [10, 12, 15, 20, 25, 30, 35], chartColor: "blue" },
    { name: 'New Sales', value: '+12,234', change: '+4.5%', changeType: 'positive', icon: ShoppingCartIcon, chartData: [10, 25, 15, 30, 12, 15, 20], chartColor: "yellow" },
    { name: 'Bounce Rate', value: '42.3%', change: '-2.1%', changeType: 'negative', icon: ArrowTrendingUpIcon, chartData: [35, 30, 25, 20, 15, 12, 10], chartColor: "red" },
  ];

  const recentSales = [
    { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00' },
    { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00' },
    { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00' },
    { name: 'William Kim', email: 'will@email.com', amount: '+$99.00' },
    { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00' },
  ];

  const overviewData = [
    30, 50, 45, 65, 70, 90, 110, 100, 120, 145, 130, 150
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Dashboard</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Contoh layout dashboard analitik dengan kartu statistik dan daftar aktivitas.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Example Layout</h2>
          <CodeBlock code={`<div className="flex flex-col gap-4">
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    {stats.map((stat) => (
      <StatsCard
        key={stat.name}
        title={stat.name}
        value={stat.value}
        change={stat.change}
        changeType={stat.changeType}
        icon={stat.icon}
        chartData={stat.chartData}
        chartColor={stat.chartColor}
      />
    ))}
  </div>
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
    <Card className="col-span-4">
      <CardHeader><CardTitle>Overview</CardTitle></CardHeader>
      <CardContent>
        <Chart data={[30, 50, 45, 65, 70, 90, 110, 100, 120, 145, 130, 150]} className="h-[300px]" />
      </CardContent>
    </Card>
    <Card className="col-span-3">
      <CardHeader><CardTitle>Recent Sales</CardTitle></CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recentSales.map((sale, i) => (
            <div key={i} className="flex items-center">
              <div className="h-9 w-9 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold">{sale.name.charAt(0)}</div>
              <div className="ml-4 space-y-1"><p className="text-sm font-medium leading-none">{sale.name}</p><p className="text-xs text-zinc-500">{sale.email}</p></div>
              <div className="ml-auto font-medium">{sale.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
</div>`}>
            <div className="flex flex-col gap-4 w-full">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <StatsCard
                    key={stat.name}
                    title={stat.name}
                    value={stat.value}
                    change={stat.change}
                    changeType={stat.changeType}
                    icon={stat.icon}
                    chartData={stat.chartData}
                    chartColor={stat.chartColor}
                  />
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader><CardTitle>Overview</CardTitle></CardHeader>
                  <CardContent>
                    <Chart data={overviewData} className="h-[300px]" />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader><CardTitle>Recent Sales</CardTitle><p className="text-sm text-zinc-500 dark:text-zinc-400">You made 265 sales this month.</p></CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {recentSales.map((sale, i) => (
                        <div key={i} className="flex items-center">
                          <div className="h-9 w-9 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold">{sale.name.charAt(0)}{sale.name.split(' ')[1]?.charAt(0)}</div>
                          <div className="ml-4 space-y-1"><p className="text-sm font-medium leading-none">{sale.name}</p><p className="text-xs text-zinc-500 dark:text-zinc-400">{sale.email}</p></div>
                          <div className="ml-auto font-medium">{sale.amount}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}