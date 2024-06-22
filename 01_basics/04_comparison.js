"use strict";

console.log(null > 0); // Expected false
console.log(null < 0);  // Expected false
console.log(null == 0); // Expected false
console.log(null >= 0);  // Expected True

// Because Equality check '==' and comparisons Works differently '>', '<', '<=' '>='. Comparisons convert null to 0, treating it as 0 thats why The last ome true and others are false.

console.log(undefined > 0); // Expected false
console.log(undefined < 0);  // Expected false
console.log(undefined == 0); // Expected false
console.log(undefined >= 0); // Expected false
console.log(undefined); // Because undefined means undefined

console.log('2' > 9); //Expected Output false, Because in comparison strings treating as number
console.log('7' == 7); // Expected Output true, Because in comparison string treating as number
console.log('7' === 7); //Expected output flase. ..............................................
