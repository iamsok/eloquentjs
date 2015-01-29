// straight control flow
var theNumber = Number(prompt("Pick a number 1-10", "a"));
alert("Your number is the square root of " + theNumber * theNumber);

// conditional execution if/else
var theNumber = prompt("Pick a number", "");
if (!isNaN(theNumber)) //unless theNumber is not-a-number, do this
  alert("Your number is the square root of " + theNumber * theNumber);
else
  alert("Hey, why didn't you give me a number?");

//while loops
var number = 0;
while (number <= 12){
  console.log(number);
  number = number + 2;
}

var result = 1;
var counter = 0;
while (counter < 10){
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

//do loops
do {
  var name = prompt("Who are you?");
} while (!name);
console.log(name);

//for loops
for (var number = 0; number <= 12; number = number + 2)

//breaking out of a loop
for (var current = 20; ; current++){
  if (current & 7 == 0)
    break;
}
console.log(current);

