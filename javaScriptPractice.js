let name = {
    firstname: "Vaishnavi",
    lastname : "Jinde",
  

}
printFullName= function(hometown) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown);
}

let name2 = {
    firstname : "Sachin",
    lastname : "Tendulkar",
}
//printFullName.apply(name2,["Rishikesh"]);
//printFullName.apply(name,["Ranchi"]);
// In apply Method we pass the arguments to the function as a list
//bind method
/**
 * 
 * Looks exactly same as call but it binds the method to the class and returns a function
 */
let printMyName = printFullName.bind(name2,"Mumbai");
console.log(printMyName);
printMyName();
/**Bind gives a copy of a function which is binded to a method which can be invoked later */