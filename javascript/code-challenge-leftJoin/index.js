// const util = require('util');

const HashMap = require('./HashMap');
const leftJoin = require('./leftJoin');

let h1 = new HashMap(1024);
let h2 = new HashMap(1024);

h1.add('diligent', 'employed');
h1.add('fond', 'enamored');
h1.add('guide', 'usher');
h1.add('outfit', 'garb');
h1.add('wrath', 'anger');

h2.add('diligent', 'idle');
h2.add('fond', 'averse');
h2.add('guide', 'follow');
h2.add('flow', 'jam');
h2.add('wrath', 'delight');

console.log('leftJoin :>> ', leftJoin(h1, h2));

// console.log('first :>>', h1);
// console.log('second :>> ', h2);

// let joined = leftJoin(h1, h2);
// console.log(util.inspect(joined, false, null, true));
