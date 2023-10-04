require("dotenv").config();
const connectdb = require ("./db/connect");
const product = require ("./models/product");
const productjson = require ("./products.json")
const start = async () => {
        await connectdb (process.env.monguri);
        await product.deleteMany();
        await product.create(productjson).then((r)=>{
            
            console.log ("success");
        }).catch((e)=>{
            console.log(e)
        })
    
};

start ();