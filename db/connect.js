const mongoose = require ("mongoose");  
const connectdb =  (uri) => {
    console.log ("pugis");
    return mongoose.connect(uri, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
}
module.exports= connectdb;