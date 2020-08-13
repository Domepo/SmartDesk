var can = require('socketcan');
var fs = require("fs");


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

    parsedDataJson.Knopflicht.id = msg.id;
    parsedDataJson.Knopflicht.data = msg.data;
    parsedDataJson.Knopflicht.timestamp = TimeInGoodFormat;

    var dataOutput = JSON.stringify(parsedDataJson,null,"\t");

    fs.writeFile("data.json",dataOutput,(err)=>{});


});

;});

channel.start();

