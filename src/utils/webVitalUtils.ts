import chalk from 'chalk';

function logMetric({ name, delta, id }:{name:string, delta:number, id:number}) {
    const formattedDelta = delta.toFixed(2);
    const formattedId = chalk.gray(`(${id})`);
  
    console.log(`${chalk.blue(name)}: ${chalk.green(formattedDelta)}ms ${formattedId}`);
  }

export const webVitalCallback = (metric:any) => {
    switch (metric.name) {
      case 'FCP':
        logMetric({ ...metric, name: 'First Contentful Paint' });
        break;
      case 'LCP':
        logMetric({ ...metric, name: 'Largest Contentful Paint' });
        break;
      case 'CLS':
        logMetric({ ...metric, name: 'Cumulative Layout Shift' });
        break;
      case 'FID':
        logMetric({ ...metric, name: 'First Input Delay' });
        break;
      case 'TTFB':
        logMetric({ ...metric, name: 'Time to First Byte' });
        break;
    }
};