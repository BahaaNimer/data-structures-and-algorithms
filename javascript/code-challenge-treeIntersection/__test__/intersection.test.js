const TreeIntersection = require('../tree-intersection');

describe('Tree Intersection Test', () => {
  it('Should return a tree intersection', () => {
    const tree1 = [1, 20, 30, 40, 50, 65, 70, 80];
    const tree2 = [1, 20, 30, 45, 50, 60, 70, 80];
    TreeIntersection(tree1, tree2);
    expect(TreeIntersection(tree1, tree2)).toEqual([1, 20, 30, 50, 70, 80]);
  });
  it('Should return a tree intersection', () => {
    const tree1 = [1, 20, 11, 40, 50, 60, 70, 80];
    const tree2 = [1, 20, 30, 40, 54, 60, 70, 15];
    TreeIntersection(tree1, tree2);
    expect(TreeIntersection(tree1, tree2)).toEqual([1, 20, 40, 60, 70]);
  });
  it('Should return a tree intersection', () => {
    const tree1 = [1, 20, 30, 40];
    const tree2 = [1, 20, 30, 45];
    TreeIntersection(tree1, tree2);
    expect(TreeIntersection(tree1, tree2)).toEqual([1, 20, 30]);
  });
})