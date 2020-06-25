var can = require('socketcan');

var channel = can.createRawChannel("can0", true);

var mein_buffer = Buffer.from([0x1,0x1,0x0,0x0,0x0,0x0,0x0,0x0])
// Log any message

channel.addListener("onMessage", function(msg) { 

    console.log(msg.data);

} );


channel.start();
