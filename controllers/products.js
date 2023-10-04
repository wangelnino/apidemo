
const { query } = require("express");
const proddy = require ("../models/product");
const getallproducts = async  (req,res) => {
    const mydata = await proddy.find({});

    res.status(200).json ({mydata})  //called function
}
const getallproductstesting = async (req,res) => {
    // let query={}
    const {company,name,feature,sort,select,price} =req.query;
    const queryobj= {};
    if (company) {
        queryobj.company=company;
        
    }
    if (name) {
        queryobj.name={$regex : name , $options : "i"};
        console.log(queryobj); 
    }
    if (feature) {
        queryobj.feature=feature;
        
    }
    if (price) {
        queryobj.price=price;
        
    }
    let apidata= proddy.find(queryobj);
    if (sort) {
        let sortfix = sort.replace(",", " "); // in api there is sort = name,price to replace coma with space its necessary
        apidata = apidata.sort (sortfix); // for removing default sorting
    }
    if (select) {
        let selectfix = select.split (",") .join(" "); // for i.e select = name,comp,price so jata jata coma teta space haldine 
        apidata = apidata.select (selectfix); 
    }
    // if(req?.query?.company){
    //     query.$or = [{ company: { $regex: req?.query?.company, $options: "i" } }];
    // }
    // if(req?.query?.name){
    //     query.$or = [{ name: { $regex: req?.query?.name, $options: "i" } }];
    // }
    // if(req.query.feature){
    //     query.$or = [{ feature: { $regex: req.query.feature, $options: "i" } }];
    // }
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 2 ;
    let skip = (page-1) * limit ;
    apidata= apidata.skip(skip).limit(limit);
    const mydata = await apidata // filtering api
    res.status(200).json ({mydata, nhHits: mydata.length}) // 200 vaneko success so if success then show msg
};
module.exports = {getallproducts, getallproductstesting}; // exporting 