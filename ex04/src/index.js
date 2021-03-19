var monitorsListArray=["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr){
    var MonitorList=[arr];
    var MonitorList=[];
    var a=[1, 2, 3];
    var monitor=[];
    var number=[];
    
    

    for(var i=0; i<monitorsListArray.length; i++){
        
        MonitorList.push(monitorsListArray[i],a[i]);
        
        

    }

    return MonitorList;
}
console.log(myMonitorsFunction());
module.exports=myMonitorsFunction;