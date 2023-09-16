const mongoose = require('mongoose');


//now we connect the mongoose to the mongodb...
mongoose.connect("mongodb://127.0.0.1:27017/e-comm");


// in this we defined the every field in our data..
const productSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String


});



//1. We insert or save the data..

const saveInDB = async ()=>{
   

    // In this we define the model so we can connect the nodejs and mongodb

    const ProductsModel = mongoose.model('products',productSchema);

    // in this we defined the data according to the schem..

    let data = new ProductsModel(
        {
            name:"m8",
            brand:"samsung",
            price:678,
            category:"mobile"
        }
    );

    // at last we save our data in the database and also store data in result..
    let result = await data.save();

    // now we print our data in console, so we can see what is actually store in our database..


    console.log(result);
}

// saveInDB();


// 2. Update in DB

const updateInDB = async ()=>{
    const Product = mongoose.model('products',productSchema);
    let data = await Product.updateOne(
        {name:"m8"},
        {
            $set:{price:700}
        }
    )
console.log(data);

}

// updateInDB();

//3. Delete in DB

const deleteInDB = async ()=>{
    let Product = mongoose.model('products',productSchema);

    let data = await Product.deleteOne(
        {name:"m8"}
    )
    console.log(data);
}

// deleteInDB();


//4. find in DB


const findInDB = async ()=>{
    const Product = mongoose.model('products',productSchema);

    let data = await Product.find({name:"i phone max pro"});

    console.log(data);
}
findInDB();