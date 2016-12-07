var vpack = require('bindings')('node-velocypack');

var test_vpack_buffer = vpack.encode(
{ "dog": "arfarfarf"
, "jsteeman" : "was muss ich machen??"
, "numbers" : [ 4711, 23, 42 ]
, "programmer" : { "languages" : [ "rust", "cpp", "go", "pyton", "js"]
                 , "food" : [ "coffee", "fruits" ,"steaks" ]
                 , "min_iq" : 150
                 }
});

console.log("buffer:");
console.log(test_vpack_buffer);
console.log("js object:");
console.log(vpack.decode(test_vpack_buffer));

vpack.decode(new Buffer([11,37,3,49,70,112,111,116,97,116,97,51,243,23,59,10,0,0,0,0,0,50,75,95,85,76,79,49,100,45,79,45,45,45,11,3,21]));
