const express=require('express')
const mongoose=require('mongoose') 
const cors=require('cors')
const { CakesModel, CartModel,BeveragesModel,DesertsModel,NoodlesModel,PastaModel,PurevegsModel,RollsModel,SaladsModel,SandwichsModel,BuyModel,PayModel } = require('./model/schema');



const app = express()
app.use(express.json())
app.use(cors())
async function connectdb(){
  try{
await mongoose.connect("mongodb+srv://vekkash1:vekkash0101@cluster0.w5enrod.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0");
console.log("db connnection success")
         const x= 4000;
         app.listen(x,function(){
             console.log(`starting port ${x}...`)
         })
     }
     catch(err){
        console.log("db not connected: "+err);
    }
}
connectdb();

// Add cakes
app.post('/addcakes', async (req, res) => {
  try {
    const { id, image, name, description, price, quantity } = req.body;

    const cakes = new CakesModel({
      id,
      image,
      name,
      description,
      price,
      quantity
    });

    await cakes.save();
    res.status(201).json({ message: "Cakes added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//add beverages
app.post('/addbeverages', async (req, res) => {
  try {
    const { id, image, name, description, price, quantity } = req.body;

    const Beverages = new BeveragesModel({
      id,
      image,
      name,
      description,
      price,
      quantity
    });

    await Beverages.save();
    res.status(201).json({ message: "beverages added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// add desert
app.post('/adddesert', async (req, res) => {
  try {
    const { id, image, name, description, price, quantity } = req.body;

    const deserts = new DesertsModel({
      id,
      image,
      name,
      description,
      price,
      quantity
    });

    await deserts.save();
    res.status(201).json({ message: "deserts added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// add noodles
app.post('/addnoodles', async (req, res) => {
  try {
    const { id, image, name, description, price, quantity } = req.body;

    const noodles = new NoodlesModel({
      id,
      image,
      name,
      description,
      price,
      quantity
    });

    await noodles.save();
    res.status(201).json({ message: "noodles added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// add pasta
app.post('/addpasta', async (req, res) => {
  try {
    const { id, image, name, description, price, quantity } = req.body;

    const pasta = new PastaModel({
      id,
      image,
      name,
      description,
      price,
      quantity
    });

    await pasta.save();
    res.status(201).json({ message: "pasta added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//add pureveg
app.post('/addpurevegs', async (req, res) => {
  try {
    const { id, image, name, description, price, quantity } = req.body;

    const purevegs = new PurevegsModel({
      id,
      image,
      name,
      description,
      price,
      quantity
    });

    await purevegs.save();
    res.status(201).json({ message: "purevegs added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//add rolls
app.post('/addrolls', async (req, res) => {
  try {
    const { id, image, name, description, price, quantity } = req.body;

    const rolls = new RollsModel({
      id,
      image,
      name,
      description,
      price,
      quantity
    });

    await rolls.save();
    res.status(201).json({ message: "rolls added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//add salad
app.post('/addsalads', async (req, res) => {
  try {
    const { id, image, name, description, price, quantity } = req.body;

    const salads = new SaladsModel({
      id,
      image,
      name,
      description,
      price,
      quantity
    });

    await salads.save();
    res.status(201).json({ message: "salads added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//add sandwich
app.post('/addsandwichs', async (req, res) => {
  try {
    const { id, image, name, description, price, quantity } = req.body;

    const sandwichs = new SandwichsModel({
      id,
      image,
      name,
      description,
      price,
      quantity
    });

    await sandwichs.save();
    res.status(201).json({ message: "sandwichs added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//cakes get
app.get('/getallcakes', async (req, res) => {
  try {
    const cakes = await CakesModel.find();
    res.json(cakes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//beverags get
app.get('/getallbeverages', async (req, res) => {
  try {
    const Beverages = await BeveragesModel.find();
    res.json(Beverages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// desrts get
app.get('/getalldeserts', async (req, res) => {
  try {
    const deserts = await DesertsModel.find();
    res.json(deserts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// noodles get
app.get('/getallnoodles', async (req, res) => {
  try {
    const noodles = await NoodlesModel.find();
    res.json(noodles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//pasta get
app.get('/getallpasta', async (req, res) => {
  try {
    const pasta = await PastaModel.find();
    res.json(pasta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
/// pureveg get
app.get('/getalls', async (req, res) => {
  try {
    const purevegs = await PurevegsModel.find();
    res.json(purevegs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//rolls get
app.get('/getallrolls', async (req, res) => {
  try {
    const rolls = await RollsModel.find();
    res.json(rolls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//get salad
app.get('/getallsalads', async (req, res) => {
  try {
    const salads = await SaladsModel.find();
    res.json(salads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//get sandwich
app.get('/getallsandwichs', async (req, res) => {
  try {
    const sandwichs = await SandwichsModel.find();
    res.json(sandwichs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//cart
app.post('/addcart', async (req, res) => {
    try {
        const { id, image, name, description, price, quantity } = req.body;
        
        const cart = new CartModel({
          id,
          image,
          name,
          description,
          price,
          quantity
        });
        await cart.save();
        res.status(201).json({ message: "cart items added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
  
  app.get('/getallcarts', async (req, res) => {
    try {
      const carts = await CartModel.find();
      res.json(carts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.delete('/deletecart/:id', async (req, res) => {
    const id = req.params.id;
    console.log(`Deleting cart with id: ${id}`); // Log the id for debugging
    try {
      const deletedCart = await CartModel.findOneAndDelete({ id: id });
      if (!deletedCart) {
        return res.status(404).json({ message: "Cart not found" });
      }
      res.json({ message: "Cart deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  
  
  
  
  app.patch('/increasequantity/:id', async (req, res) => {
    try {
      const cart = await CartModel.findOneAndUpdate(
        { id: req.params.id }, // Filter by cartId
        { $inc: { quantity: 1 } }, // Increment quantity by 1
        { new: true }
      );
      if (!cart) {
        return res.status(404).json({ message: 'Cart item not found' });
      }
      return res.json(cart); // Respond with the updated cart item
    } catch (err) {
      console.error('Error increasing quantity:', err);
      return res.status(400).json({ message: err.message });
    }
  });
  
  app.patch('/decreasequantity/:id', async (req, res) => {
    try {
      const cart = await CartModel.findOneAndUpdate(
        { id: req.params.id }, // Filter by cartId
        { $inc: { quantity: -1 } }, // Decrease quantity by 1
        { new: true }
      );
      if (!cart) {
        return res.status(404).json({ message: 'Cart item not found' });
      }
      return res.json(cart); // Respond with the updated cart item
    } catch (err) {
      console.error('Error decreasing quantity:', err);
      return res.status(400).json({ message: err.message });
    }
  });
  // addbuy
app.post('/addbuy', async (req, res) => {
  try {
      const { id, fullName, streetAddress, city, pincode, state, phoneNumber} = req.body;
      
      const buy = new BuyModel({
        id,
        fullName, 
        streetAddress,  
        city, 
        pincode, 
        state, 
        phoneNumber, 
        
          
      });
      await buy.save();
      res.status(201).json({ message: "Buy added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// addpay
app.post('/addpay', async (req, res) => {
  try {
      const { id, cardName, cardNumber, expiryDate, cvv} = req.body;
      
      const pay = new PayModel({
        id,
        cardName, 
        cardNumber, 
        expiryDate, 
        cvv
        
          
      });
      await pay.save();
      res.status(201).json({ message: "Payment added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});