import './App.css';
import './Header';
import Header from './Header';
import Cart from './Cart';
import Product from './Product';
import ApiClient from './api-client';
import React, { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(loadProducts);

  async function loadProducts() {
    let prod = await ApiClient.getProducts();
    if (prod.length != products.length) {
      setProducts(prod);
    }
  }

  function addToCart(productIndex) {
    let productToAdd = products[productIndex];

    let found = false;
    let temp = [...cart];

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].name == productToAdd.name) {
        temp[i].quantity++;
        found = true;
        break;
      }
    }

    if (!found) {

      temp.push({
        name: productToAdd.name,
        price: productToAdd.price,
        salePrice: productToAdd.salePrice,
        rating: productToAdd.rating,
        image: productToAdd.image,
        quantity: 1
      });

    }

    setCart(temp);
  }

  function deleteFromCart(i) {
    let temp = [...cart];
    let productToDelete = temp[i];

    productToDelete.quantity--;

    if (productToDelete.quantity == 0) {
      temp.splice(i, 1);
    }
    
    setCart(temp);
  }
  
  function emptyTheCart() {
    setCart([]);
  }

  return (
    <div class="grid-container">
      <Header></Header>
      <main className="main">
        <div className="content">
          <ul className="products">
            {
              products.map((product, index) => 
                <Product key={index} product={product} productIndex={index} addToCart={addToCart}></Product>
              )
            }        
          </ul>
        </div>

        <Cart cart={cart} deleteFromCart={deleteFromCart} emptyTheCart={emptyTheCart}></Cart>
      </main>
    </div>
      );
}

      export default App;
