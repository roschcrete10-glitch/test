const assert = require('node:assert/strict');
const { keyFor, daysInMonth, holidays } = require('../app.js');
assert.equal(keyFor(2026, 0, 26), '2026-01-26');
assert.equal(daysInMonth(2026, 1), 28);
assert.equal(daysInMonth(2028, 1), 29);
assert.ok(holidays.some(({ date, name }) => date === '2026-01-26' && name === 'Republic Day'));
console.log('✓ Calendar helpers and holiday data passed');
