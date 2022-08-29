'use strict';

function leftJoin(hashmap1, hashmap2) {
  if (hashmap1.table.length > 1) {
    for (let i = 0; i < hashmap1.table.length; i++) {
      if (hashmap1.table[i]) {
        hashmap1.addHashed(i, hashmap2.table[i]);
      }
    }
  }
  return hashmap1;
}

module.exports = leftJoin;
