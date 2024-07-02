
const mongoose=require('mongoose')

//Cakes
const CakesSchema=new mongoose.Schema({
    id: String,
    image : String,
    name : String,
    description :String,
    price: String ,
    quantity: Number 
    

})

const CakesModel=mongoose.model("cakes",CakesSchema)
//beverages
const BeveragesSchema=new mongoose.Schema({
    id: String,
    image : String,
    name : String,
    description :String,
    price: String ,
    quantity: Number 
    

})

const BeveragesModel=mongoose.model("Beverages",BeveragesSchema)
//deserts
const DesertsSchema=new mongoose.Schema({
    id: String,
    image : String,
    name : String,
    description :String,
    price: String ,
    quantity: Number 
    

})

const DesertsModel=mongoose.model("deserts",DesertsSchema)
//noodles
const NoodlesSchema=new mongoose.Schema({
    id: String,
    image : String,
    name : String,
    description :String,
    price: String ,
    quantity: Number 
    

})

const NoodlesModel=mongoose.model("noodles",NoodlesSchema)
//pasta
const PastaSchema=new mongoose.Schema({
    id: String,
    image : String,
    name : String,
    description :String,
    price: String ,
    quantity: Number 
    

})

const PastaModel=mongoose.model("pastas",PastaSchema)
//pureveg

const PurevegsSchema=new mongoose.Schema({
    id: String,
    image : String,
    name : String,
    description :String,
    price: String ,
    quantity: Number 
    

})

const PurevegsModel=mongoose.model("s",PurevegsSchema)

//rolls
const rollsSchema=new mongoose.Schema({
    id: String,
    image : String,
    name : String,
    description :String,
    price: String ,
    quantity: Number 
    

})

const RollsModel=mongoose.model("rolls",rollsSchema)
// salad
const SaladsSchema=new mongoose.Schema({
    id: String,
    image : String,
    name : String,
    description :String,
    price: String ,
    quantity: Number 
    

})

const SaladsModel=mongoose.model("salads",SaladsSchema)
// sandwich
const SandwichsSchema=new mongoose.Schema({
    id: String,
    image : String,
    name : String,
    description :String,
    price: String ,
    quantity: Number 
    

})

const SandwichsModel=mongoose.model("sandwichs",SandwichsSchema)

//cart
const CartSchema=new mongoose.Schema({
    id: String,
    image : String,
    name : String,
    description :String,
    price: String,
    quantity: Number
    

})

const CartModel=mongoose.model("carts",CartSchema)
//buy
const BuySchema=new mongoose.Schema({
    id : String,
    fullName:String ,
    streetAddress: String,
    city: String,
    pincode: String,
    state: String,
    phoneNumber: String,
    country: String,
    countryCode:String
    

})

const BuyModel=mongoose.model("buys",BuySchema)

//pay
const PaySchema=new mongoose.Schema({
    id : String,
    cardName: String,
    cardNumber:  Number,
    expiryDate: String,
    cvv: Number
})

const PayModel=mongoose.model("pays",PaySchema)




module.exports={CakesModel:CakesModel,
CartModel:CartModel,
BeveragesModel:BeveragesModel,
DesertsModel:DesertsModel,
NoodlesModel:NoodlesModel,
PastaModel:PastaModel,
PurevegsModel:PurevegsModel,
RollsModel:RollsModel,
SaladsModel:SaladsModel,
SandwichsModel:SandwichsModel,
BuyModel:BuyModel,
PayModel:PayModel,


};

