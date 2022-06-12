// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// PREP

// passed a name. No special characters or numbers in name. Even if there is the program should pass that. Fix capitalizations.If blank, return hello world

// Return hello + name

function hello(name) {
    // make sure a string is being passed
    if(name === '' || !name){
        return `Hello, World!`
    }else{
    //fix the cases of the name
    let newName = name[0].toUpperCase() + name.slice(1).toLowerCase()
    // return the string in the form of a template literal
    return `Hello, ${newName}!`
    }
  }

// example

console.log(hello('JaMIl')) // hello Jamil
console.log(hello('jamal')) // hello Jamil
console.log(hello('JIM BOB')) // hello Jamil