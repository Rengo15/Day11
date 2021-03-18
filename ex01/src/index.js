// Create an array here
var myArr =[2,4,0,8,10];
// End of creating an array

function myArrayFunction(arr){
    var MyItems =[arr]
    // Only change code below this line

    // Only change code above this line
    var MyItems=myArr;
    MyItems[2]=6;
    return MyItems;
}
console.log(myArrayFunction());
module.exports=myArrayFunction;