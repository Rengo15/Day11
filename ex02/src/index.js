// Create a temps array here
var temps=[ 
   [31, 32, 19, 37],
   [29, 27, 55, 36],
   [17, 27, 42, 46],
   [29, 52, 21, 64],
   [91, 27, 31, 61]
];
// End of temps array
function myArrayFunction(arr){
    var newTemps=[arr];
    
    var averageDayTemp=[];
    // Only change code below this line

    // Only change code above this line
    var a =temps[0];
    var count =0;
    var total=0;
    for(var i=0; i<a.length; i++){
        if(a[i] !== undefined){
            count++;
            total+=a[i];

        }
        
    }
    var a1 =temps[1];
    var count1 =0;
    var total1=0;
    for(var i=0; i<a.length; i++){
        if(a1[i] !== undefined){
            count1++;
            total1+=a1[i];

        }
        
    }
    var a2 =temps[2];
    var count2 =0;
    var total2=0;
    for(var i=0; i<a.length; i++){
        if(a2[i] !== undefined){
            count2++;
            total2+=a2[i];

        }
        
    }
    var a3 =temps[3];
    var count3 =0;
    var total3=0;
    for(var i=0; i<a.length; i++){
        if(a3[i] !== undefined){
            count3++;
            total3+=a3[i];

        }
        
    }
    var a4 =temps[4];
    var count4 =0;
    var total4=0;
    for(var i=0; i<a.length; i++){
        if(a4[i] !== undefined){
            count4++;
            total4+=a4[i];

        }
        
    }
    

    var aavg=total/count;
    var a1avg=total1/count1;
    var a2avg=total2/count2;
    var a3avg=total3/count3;
    var a4avg=total4/count4;
    
    averageDayTemp.push(aavg, a1avg, a2avg, a3avg, a4avg);
    
    

    return averageDayTemp;
}

console.log(myArrayFunction());
module.exports = myArrayFunction;