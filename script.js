// Eloquent Javascript
// Chapter 2 
// Fizzbuzz
function fizzBuzz() {
  for (num = 1; num < 101; num++)
    if (num % 3 == 0 && num % 5 == 0)
      console.log("fizzbuzz");
    else if (num % 3 == 0)
      console.log("fizz");
    else if (num % 5 == 0)
      console.log("buzz");
    else
      console.log(n);
}

// Chapter 3
// Minimum

var min = function (number1, number2) {
  if (number1 < number2) {
    return number1;
  } else {
    return number2;
  }
}

// JS Way
// Chapter 6
// Bank Account

function bank() {
  const account = {
    owner: 'Alex',
    balance = 0,
    credit(amount) {
      this.balance += amount;
    },
    describe() {
      return `owner: ${this.owner}, balance: ${this.balance}`;
    }
  }
  console.log(account.describe());
  account.credit(250);
  account.credit(-80);
  console.log(account.describe());
}

// Chapter 7
// Musketeers

function musketeers() {
  const musketeers = ["athos", "porthos", "aramis"];
  for (i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
  }
  musketeers.push("D'Artagnan");
  musketeers.forEach(musketeer => {
    console.log(musketeer);
  })
  musketeers.splice(2, 1);
  for (const musketeer of musketeers) {
    console.log(musketeer);
  }
}


// Chapter 8
// Word Info

function wordInfo(word) {
  console.log(`The length of the word is ${word.length}, in lowercase it's ${word.toLowerCase()}, in uppercase it's ${word.toUpperCase()}`);
  //Palindrome
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[length - 1 - i]) {
      return `It's not a palindrome`
    } else {
      return `It's a palindrome`
    }
  }
}