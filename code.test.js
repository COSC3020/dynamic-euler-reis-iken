const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert.strictEqual(e(0), 1);
assert.strictEqual(e(1), 2);
assert.strictEqual(e(2), 2.5);
assert.strictEqual(e(5), 2.7166666666666663);
assert.strictEqual(e(10), 2.7182818011463845);
