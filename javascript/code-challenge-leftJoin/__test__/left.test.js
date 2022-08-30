const HashMap = require('../HashMap');
const leftJoin = require('../leftJoin');

let h1 = new HashMap(1024);
let h2 = new HashMap(1024);
let h3 = new HashMap(1024);
let h4 = new HashMap(1024);

describe('Testing Left Join', () => {
  it('should create a left join', () => {
    h1.add('diligent', 'employed');
    h2.add('diligent', 'idle');
    expect(leftJoin(h1, h2)).toEqual(leftJoin(h1, h2));
  });
  it('should create a left join with or without existing right join', () => {
    h3.add('diligent', 'employed');
    h3.add('fond', 'enamored');
    h3.add('outfit', 'garb');

    h4.add('diligent', 'idle');
    h4.add('fond', 'averse');
    h4.add('guide', 'follow');

    expect(leftJoin(h3, h4)).toEqual(leftJoin(h3, h4));
  });
  it('should create a left join without a right join', () => {
    h1.add('outfit', 'garb');
    expect(leftJoin(h1, h2)).toEqual(leftJoin(h1, h2));
  });
});
