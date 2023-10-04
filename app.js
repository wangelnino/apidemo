require("dotenv").config();
const express= require("express");
const app= express();
const port = 4000;  
const product_routes = require ("./routes/products");
const connectdb = require("./db/connect");
app.get("/",(req,res) =>
{
    res.send("hi");
});
app.use("/api/products", product_routes); // setting routes or linking with route
const start = async () => {
    try {
            await connectdb(process.env.monguri); // function vayo connectdb call vayo 
        app.listen(port,"0.0.0.0",  ()=> {
            console.log(`${port} Yes iam connecd`);
        });

    }
    catch (error)  {    
        console.log (error);
    }
};
start();
