const readConfig = require("../index");

var config = readConfig({ghi:[1,2,3,4]}, "./example/myConfig.json");
console.log(config) ;