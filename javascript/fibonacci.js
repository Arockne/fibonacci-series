function fibonacci(num) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file


//i 
  //nth index
//o
  //fib number 
//e
  //none
//c
  //none
//HLP
  /*
    Find the nth element in fibonacci series
    fibbonacci sequence start with a 0 then a 1
    after that every value is the sum of the two values preceding it
    example: 
      input = 10
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34
  */
  function fibonacci(n) {
    if (n === 0) {
      return 0
    }
    if (n === 1) {
      return 1
    }

    const fibArray = [0, 1];
    
    for (let i = 2; i < n; i++) {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2])
    }

    return fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
  }

  function fibonacci(n) {
    let nth = 0;
    let first = 0;
    let second = 1;

    for (let i = 2; i <= n; i++) {
      nth = first + second
      first = second
      second = nth
    }
    return nth;
  }

// And a written explanation of your solution


