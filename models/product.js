const mongoose = require ("mongoose");
const productschema = new mongoose.Schema ({ // we used schema function to create a schema i.e structure of query table
    name: {
        type: String  ,
        required: true
    },
    price: {
        type :Number ,
        required: [true, "price must be provided"] //and condtn kinda
    },
    feature: {
        type : Boolean, 
        default : false
        
    },
    rating: {
        type : Number,
        default : 0.5
    },
    createdate: {
        type : Date,
        default : Date.now 
    },
    company: {
        type: String,
          },
    
    
});
 module.exports = mongoose.model("Product", productschema, "Product");