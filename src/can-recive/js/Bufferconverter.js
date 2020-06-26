var can = require('socketcan');

var channel = can.createRawChannel("can0", true);

var mein_buffer = Buffer.from([0x1,0x1,0x0,0x0,0x0,0x0,0x0,0x0])
// Log any message

channel.addListener("onMessage", function(msg) { 



//Buffer in HEX
    if (msg.data.toString('hex') == mein_buffer.toString('hex')) {
        console.log("Button wurde gedrueckt"); 
        
    }

} );


channel.start();
