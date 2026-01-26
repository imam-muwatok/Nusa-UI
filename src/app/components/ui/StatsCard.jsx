import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import Chart from './Chart';

const StatsCard = ({
  title,
  value,
  change,
  changeType = 'positive',
  icon: Icon,
  chartData,
  chartColor = 'primary',
  className = '',
}) => {
  const changeColor = changeType === 'positive' ? 'text-green-500' : 'text-red-500';

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />}
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-2xl font-bold">{value}</div>
            {change && (
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                <span className={changeColor}>{change}</span> from last month
              </p>
            )}
          </div>
          {chartData && chartData.length > 0 && (
            <div className="h-10 w-24">
              <Chart data={chartData} color={chartColor} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;