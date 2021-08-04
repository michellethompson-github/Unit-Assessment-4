const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express(); 

app.use(cors());
app.use(bodyParser.json());

const products = [
    {
        "name": "Bird Choice Solar Water Wiggler",
        "price": 59.95,
        "salePrice": 0,
        "rating": 0,
        "image": "birds-choice-solar-water-wiggler.webp"
    },
    {
        "name": "Self-Watering Insert for 2' x 8' Planter",
        "price": 120.00,
        "salePrice": 0,
        "rating": 5,
        "image": "8609008_2167_self-watering-insert-for-2x8-planter_blk.webp"
    },
    {
        "name": "Self-Watering Insert for 2' x 4' Planter",
        "price": 59.95,
        "salePrice": 0,
        "rating": 4,
        "image": "8609009_2130_blk.webp"
    },
    {
        "name": "Teardrop Bamboo Mason Bee House",
        "price": 19.95,
        "salePrice": 16.90,
        "rating": 3,
        "image": "8609032_8002_teardrop-bamboo-mason-bee-house.webp"
    },
    {
        "name": "Dewdrop Window Bird Feeder",
        "price": 29.95,
        "salePrice": 0,
        "rating": 5,
        "image": "8609061_02v.webp"
    },
    {
        "name": "High Output LED Fixtures",
        "price": 156.00,
        "salePrice": 0,
        "rating": 4,
        "image": "8609175_5295_edk-24w-ho-led-2-ft-fixtures-with-magnetic-clips-set-of-2.webp"
    },
    {
        "name": "Solitary Bee Hive",
        "price": 59.95,
        "salePrice": 0,
        "rating": 0,
        "image": "8609060_05v_solitary-bee-hive.jpg"
        
    },
    {
        "name": "Gardener's Cross Body Tool Bag",
        "price": 59.95,
        "salePrice": 0,
        "rating": 5,
        "image": "8609076_0093_gardeners-cross-body-canvas-tool-bag-khaki-green.webp"
    }
];

let cart = [];

app.get('/products', (req, res) => {
    res.send(products);
});

app.get('/cart', (req, res) => {
    res.send(cart);
});

app.post('/cart/add', (req, res) => {
    for(let i = 0; i < products.length; i++) {
        if (products[i].name == req.body.productName) {
            cart.push({
                name: products[i].name,
                price: products[i].price,
                salePrice: products[i].salePrice,
                rating: products[i].rating,
                image: products[i].image,
                quantity: 1
            });
            break;
        }
    }
    res.send({
        "status": "done"
    });
});

app.put('/cart/update/:productName', (req, res) => {
    
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == req.params.productName) {
            if (req.body.quantity == 0) {
                cart.splice(i, 1);
            }
            else {
                cart[i].quantity = req.body.quantity;
            }
        }
    }
    res.send({
        "status": "done"
    });
});

app.delete('/cart/delete', (req, res) => {
    cart = [];
    res.send({
        "status": "done"
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});