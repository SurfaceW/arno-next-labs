import { headers } from 'next/headers';
import { getTestValue } from '../demo/global-sample';

export const dynamic = 'force-dynamic';


export const GET = function () {
  const hds = headers();
  // @ts-ignore
  console.log('Global', global['test']);
  return new Response(JSON.stringify({
    data: 'Demo2',
    date: new Date(),
    hds,
    test: getTestValue(),
    // @ts-ignore
    symbolTest: global[Symbol.for('test')],
  }));
}
