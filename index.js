var oatts = require('oatts');
var fs = require('fs'); 

var options = {
    // see "Options" section below for available options
};
 
oatts.generate('http://localhost:3002/api/docs').then((res) => {
    res.generated.forEach(({ filename, contents } ) => {

        fs.writeFileSync(`./tests/${filename}`, Buffer.from(contents), 'utf8')
    })
})