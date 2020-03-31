const fs        = require("fs") ;
let merge       = require('merge-objects') ;

//mudar para usar o config com fs
function readConfig(defaultConfig, configPath = "./config.json"){
    var configJson = {} ;
    try{
        configJson = JSON.parse(fs.readFileSync(configPath, 'utf8')) ;
    } catch(e){
        console.log( "Erro ao ler o config", e ) ;
    }
    return merge( defaultConfig, configJson ) ;
}

module.exports = readConfig ;