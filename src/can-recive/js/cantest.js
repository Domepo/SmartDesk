var can = require('socketcan');
var fs = require("fs");

var arrayForCanIDStorage = [];

var channel = can.createRawChannel("can0", true);


channel.addListener("onMessage", function(msg) {
  

function secsToCurrentDate(secs) {
    var date_output = new Date(1970, 0, 1); //since 1970
    date_output.setSeconds(secs);
    return date_output;
}


fs.readFile("data.json","utf8",function(err,data){

    var parsedDataJson = JSON.parse(data);
    var TimeInGoodFormat = secsToCurrentDate(msg.ts_sec);


function IdFilter(){
    if(!arrayForCanIDStorage.includes(msg.id)){
        arrayForCanIDStorage.push(msg.id);
    }
    arrayForCanIDStorage.forEach(function(element){
        console.log(element);
        if(element == msg.id){
            parsedDataJson["ID"+String(element)]={};
            parsedDataJson["ID"+String(element)]["id"]=msg.id;
            parsedDataJson["ID"+String(element)]["data"] = msg.data;
            
        }
    });

}
IdFilter();


var dataOutput = JSON.stringify(parsedDataJson,function(k,v){
    if(v instanceof Array)
        return JSON.stringify(v);
    return v;
    },2);

fs.writeFile("data.json",dataOutput,(err)=>{});


});

;});

channel.start();

