// Find common values in 2 binary trees.
//Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.

const HashMap = require('./HashMap');


function tree_intersection(tree1, tree2) {
  let common = tree1.filter(x => tree2.indexOf(x) !== -1);
  console.log('common  :>> ', common);
}

module.exports = tree_intersection;