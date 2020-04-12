function toUpperArray(items) {
  // end condition
  if (!items.length) return [];

  // item to operate on
  var head = items[0];

  // perform action
  head = head.toUpperCase();

  // next
  var tail = items.slice(1);

  // recursive step
  return [head].concat(toUpperArray(tail));
}

console.log(toUpperArray(["hello", "world"]));
// => ['HELLO', 'WORLD']
