/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var name = 'Tyler';
// Do not edit the code above.

/*
  Create a function called isTyler that accepts name as it's only parameter.
  If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
*/

function isTyler (name){
  if(name === 'Tyler'){
    return true;
  }else return false;
};



////////// PROBLEM 2 //////////

/*
  Create a function called getName that uses prompt() to prompt the user for their name and then returns the given name.
*/

function getName(name){
  return prompt(name);
}


////////// PROBLEM 3 //////////

/*
  Create a function called welcome that uses your getName function you created in the previous problem to get the user's name.
  Then alert "Welcome, " plus the given user's name.

  Example: "Welcome, Bob Joe"
*/

const welcome = () => {
  getName(name);
  alert('Welcome, '+ getName(name))
};



////////// PROBLEM 4 //////////

/*
  What is the difference between arguments and parameters?
*/

//  Arguments are use to specify a item and parameters are the number or type of items that return the data for/from arguments. 



////////// PROBLEM 5 //////////

/*
  What are all the falsy values in JavaScript and how do you check if something is falsy?
*/

/*
1)False
2)0
3)Nan
4)"" -empty string
5)null
6)undefined

Test to see if it evaluates to false.
*/





////////// PROBLEM 6 //////////

/*
  Create a function called myName that returns your name
*/

let myName = name => "Donnell";
  


/*
  Now save the function definition of myName into a new variable called newMyName
*/

var newMyName = myName;



/*
  Now alert the result of invoking newMyName
*/

alert(newMyName);



////////// PROBLEM 7 //////////

/*
  Create a function called outerFn which returns an anonymous function which returns your name.
*/

var outerFn = () => {
  return myName=()=>"Donnell";
}



/*
  Now save the result of invoking outerFn into a variable called innerFn.
*/

var innerFn = outerFn();



/* 
  Now invoke innerFn.
*/

innerFn;