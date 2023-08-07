// @ts-ignore
if (global['test'] === undefined) {
  // @ts-ignore
  global['test'] = Math.random().toString();
}

// @ts-ignore
console.log('global test', global['test'])


export function getTestValue() {
  // @ts-ignore
  console.log('internal test', global['test']);
  // @ts-ignore
  return global['test'];
}
