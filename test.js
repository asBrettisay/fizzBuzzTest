// write a program called fizzBuzz that console.logs numbers from 1 to 100, but for multiples of three print 'fizz,' for multiples of five print 'buzz,' and for multiples of both three and five print 'fizzbuzz.'
function fizzBuzz() {
  for (var i = 1, ans; i <= 100; i++) {
    ans = '';
    if (i % 3 === 0) ans += 'fizz';
    if (i % 5 === 0) ans += 'buzz';
    if (ans) console.log(ans);
    else console.log(i)
  }
}
