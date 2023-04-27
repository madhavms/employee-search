import chalk from "chalk";

function logMetric({ name, delta, id }: {name: string; delta: number; id: number}) {
   const formattedDelta = delta.toFixed(2);
   const formattedId = chalk.gray(`(${id})`);
   console.log(`${chalk.blue(name)}: ${chalk.green(formattedDelta)}ms ${formattedId}`);
}

export const webVitalCallback = (metric: any) => {
   const metricMap: { [key: string]: string } = {
      FCP: "First Contentful Paint",
      LCP: "Largest Contentful Paint",
      CLS: "Cumulative Layout Shift",
      FID: "First Input Delay",
      TTFB: "Time to First Byte",
   };    
   const mappedMetric = {
      ...metric,
      name: metricMap[metric.name] ?? metric.name,
   };
   logMetric(mappedMetric);
};
  