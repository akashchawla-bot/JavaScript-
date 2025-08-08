// /* Lexical Scoping Example */
// In JavaScript, functions are lexically scoped, meaning they can access variables from their outer scope. 
// This is a fundamental concept in JavaScript that allows for closures and encapsulation.


// In this example,// we define an outer function that contains two inner functions.
// innerone and innertwo are nested within outer, allowing them to access the variable 'name' defined in outer's scope.
// but they each have their own local variable 'age'.and there is no conflict between them.
// inner one cannot access age of innertwo and vice versa.because they are defined in different scopes.they are like siblings.
function outer() {
  let name = "Akash";

  function innerone() {
    let age = 25; // Local variable to inner function
    console.log("Hello " + name); // ✅ Can access 'name'
  }
  function innertwo() {
    let age = 30; // Local variable to innertwo function
    console.log("Hello " + name); // ✅ Can access 'name'
  }

  innerone();
  innertwo();
}

outer();
