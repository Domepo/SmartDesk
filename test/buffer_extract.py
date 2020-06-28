const buf1 = Buffer.from('1,2,3,3,3,1,1');

let json = buf1.toJSON();

console.log(json['data'][1]);
