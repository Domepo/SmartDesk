var can = require('socketcan');
//our canbus is the can0
var channel = can.createRawChannel("can0", true);

// Log all data [8bit]
channel.addListener("onMessage", function(msg) {
  
const buf1 = Buffer.from(msg.data);

let json = buf1.toJSON();

let djson = {
    "id": 123,
    "msg": 1
};
djson.id = msg.id;
djson.msg = json["data"];
console.log(djson)

;});
// Log everything | uncomment this and comment the code above
//channel.addListener("onMessage", function(msg) { console.log(msg); } );

channel.start();
