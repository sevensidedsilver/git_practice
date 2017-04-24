// build a simple function to count by x, n number of times, and return the resulting array

function countBy(x, n) {
  var z = [];
  for (var i = 1; i < n + 1; i++) {
    z.push(x*i);
  
  }

  return z;
}