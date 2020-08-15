var can = require('socketcan');
var fs = require("fs");

var arrayForCanIDStorage = [];
var arrayForCanDataIdentifierStorage = [];



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

        if(element == msg.id){
            parsedDataJson["ID"+String(element)]={};
            parsedDataJson["ID"+String(element)]["id"]=msg.id;

            var firstByte = Array.from(msg.data)[0];
            if(!(firstByte - 1)<= 0){

                if(!arrayForCanDataIdentifierStorage.includes(firstByte)){
                    if(!arrayForCanDataIdentifierStorage.includes(1)){
                        arrayForCanDataIdentifierStorage.push(1);
                    };
                    arrayForCanDataIdentifierStorage.push(firstByte);
                    arrayForCanDataIdentifierStorage.sort(function(a, b){return a-b});
                }
            }else{             
                console.log(arrayForCanDataIdentifierStorage);
                arrayForCanDataIdentifierStorage = [];
            }

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
