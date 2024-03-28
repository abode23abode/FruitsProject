const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true})

const fruitSchema= new mongoose.Schema ({

   name:{
    type:String,
    required:[true,"add a name :("]
   },
   rating:{
    type:Number,
    min:1,
    max:10
   },
   review:String

});

const Fruit=mongoose.model("Fruit",fruitSchema);

const fruit=new Fruit ({
    rating:9,
    review:"yem"
})
const mango = new Fruit({
   name: "mango",
   score:9,
   review:"Great stuff !"

})
// mango.save();

// Fruit.updateOne({_id:"634a796c6b734d6d0f40a234"},{name:"orange"},function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(" updated successful")
//     }
// })

// Fruit.deleteOne({_id:"634a796c6b734d6d0f40a234"},function(err){
//     if(err){
//     console.log(err)
//     }else{
//         console.log(" deleted successful")
//     }
// })






// fruit.save();


const peopleSchema=new mongoose.Schema({

    name:String,
    age:Number,
    favouriteFruit:fruitSchema
})

const Person=mongoose.model("Person",peopleSchema)

const person= new Person({
     name:"sukta",
     age:18,
     favouriteFruit:mango
})

// person.save();

// Person.deleteMany({naem:"mai"},function(err){
//     if(err){
//         console.log(err)
//             }else{
//                 console.log(" deleted successful")
//             }
// })



// const kiwi = new Fruit({
// name :"kiwi",
// rating:10,
// review:"awesom"

// })
// const waterMellon = new Fruit({
//     name :"watermellon",
//     rating:100,
//     review:"level 100"
    
//     })
//     const banana = new Fruit({
//         name :"banana",
//         rating:8,
//         review:"great "
        
//         })

        // Fruit.insertMany([kiwi,waterMellon,banana], function(err){
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log("succesfully inserted fruits")
        //     }
        // });



Person.updateOne({name:"mai"},{favouriteFruit:mango},function(err){
    if(err){
        console.log(err)
    }else{
        console.log(" updated successful")
    }
})



Fruit.find( function(err,fruits){
    if(err){
        console.log(err);
    }else{
        mongoose.connection.close();
        fruits.forEach(fruit => {
            console.log(fruit.name) 
        });
      
    }
});



const findDocuments = function(db,callback){


    const collection=db.collection('fruits');

    collection.find({}).toArray(function(err,fruits){
assert.equal(err,null);
console.log("found the following records");
console.log(fruits)
callback(fruits);

    })
}