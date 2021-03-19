// Create a myPetsArray here
var myPetsArray=["Dog", "Cat"];
// End of myPetsArray

function myArrayFunction(myPets){
    
    var myNewPets = [myPets];
    var myNewPets=[];
    
    myNewPets.push("Bird", "Fish");

    
    myNewPets.pop();
    myNewPets.unshift(myPetsArray[1])
    var lastPet=myNewPets.slice(-1);
    myNewPets.unshift("Lion");
    var firstPet=myNewPets[0];

   
    return myNewPets;

}

console.log(myArrayFunction());
module.exports=myArrayFunction;