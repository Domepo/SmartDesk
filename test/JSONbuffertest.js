const buf1 = Buffer.from('1,2,3,3,3,1,1');
const buf2 = Buffer.from('3,2,1,1,1,2,3');

let json1 = buf1.toJSON();
let json2 = buf2.toJSON();

var can_recieve = {
    can: 
           {
            id: "112",
            frame: 
            {
                button1: json1['data'],
            }
        
        },
    can1: 
        {
         id: "96",
         frame: 
         {
             button1: json2['data'],
         }
     
     }        
}

if(json1.data[0]==49){

    for(var i=4; i<=8; i++){
        var newUser = "user" + i;
        var newValue = "value" + i;
        can_recieve.can.frame[newUser] = newValue ;

    }
}


 
console.log(can_recieve);
