// same keys and values
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
}

// same keys and values ES2015
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
}

// computed property names
var favoriteNumber = 7;

var instructor = {
  firstName: "Alexa"
}

instructor[favoriteNumber] = "That number is my favorite."

// computed property names ES2015
let favoriteNumber = 7;

const instructor = {
  firstName: "Alexa",
  [favoriteNumber]: "That number is my favorite."
}


// object methods
var instructor = {
    firstName: "Alexa",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + "says bye!";
    }
  }

// object methods ES2015
const instructor = {
    firstName: "Alexa",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + "says bye!";
    }
  }

// createAnimal function
// write a function which generates an animal object. the function should accept 3 arguments: 
// species: the species of an animal
// verb: a string used to name a function
// noise: a string to be printed when above function is called

const d = createAnimal("frog", "croak", "ribbit")
// {species: "frog", croak: ƒ}
f.croak()  //"ribbit!"
