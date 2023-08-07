import { headers } from 'next/headers';
import './global-sample';
import { getTestValue } from './global-sample';

export const dynamic = 'force-dynamic';


export const GET = function() {
  const hds = headers();
  // @ts-ignore
  console.log('Global', global['test']);
  return new Response(JSON.stringify({
    data: 'Hello World!1234',
    date: new Date(),
    hds,
    test: getTestValue(),
  }));
}
