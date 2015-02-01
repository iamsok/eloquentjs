var launchMissles = function(value) {
  missleSystem.launch("now");
};
if (safeMode)
  launchMissles = function(value) {
    /*do nothing*/
  };

//declaration notation
var square = function(x) {
  return x * x;
};
//can be written
function square(x) {
  return x * x;
}

//call stack - the place where computer stores context
function greet(who){
  console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");

//infinite stack
function chicken(){
  return egg();
}
function egg(){
  return chicken();
}
console.log(chicken() + "came first");
