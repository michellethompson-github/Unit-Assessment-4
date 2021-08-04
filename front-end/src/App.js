import './App.css';
import './Header';
import Header from './Header';
import Cart from './Cart';
import Product from './Product';
import ApiClient from './api-client';
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      products: [],  //Products as an Empty Array
      cart: []    //Carts as an Empty Array
    }
  this.addToCart = this.addToCart.bind(this)
  this.deleteFromCart = this.deleteFromCart.bind(this)
  this.emptyTheCart = this.emptyTheCart.bind(this)
  
  }

  componentDidMount(){
    console.log('Hello Mount!')
    this.loadProducts()
    this.loadCart()
  }

  componentDidUpdate(){
    console.log('Hello Updated!')
    this.loadProducts()
    this.loadCart()
  }

  async loadProducts() {

    console.log('Inside Load Products')
    ApiClient.getProducts().then((prod) => {
      if (prod.data.length != this.state.products.length) {
        this.setState({
          products:prod.data
        });
      }
    });

  }

  async loadCart() {

    console.log("Inside loadCart");
    ApiClient.getCart().then((c) => {
      if (c.data.length != this.state.cart.length) {
        this.setState({
          cart: c.data
        });
      }
    });
  }

  //We don't add function keyword in class components
  addToCart(productIndex) {
    console.log('Add to Cart called!');
    
    let productToAdd = this.state.products[productIndex];

    let found = false;
    let temp = [...this.state.cart];

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].name == productToAdd.name) {
        ApiClient.updateCart(temp[i].name, temp[i].quantity + 1).then((res) => {
          if (res.data.status == "done") {
            temp[i].quantity++;
            this.setState({
              cart:temp
            });
          }
        });
        found = true;
        break;
      }
    }

    if (!found) {

      ApiClient.addToCart(productToAdd.name).then((res) => {
        if (res.data.status == "done") {
          temp.push({
            name: productToAdd.name,
            price: productToAdd.price,
            salePrice: productToAdd.salePrice,
            rating: productToAdd.rating,
            image: productToAdd.image,
            quantity: 1
          });

          this.setState({
            cart:temp
          });
        }
      });

    }
  }

   deleteFromCart(i) {
    let temp = [...this.state.cart];
    let productToDelete = temp[i];

    ApiClient.updateCart(productToDelete.name, productToDelete.quantity - 1).then((res) => {
      if (res.data.status == "done") {
        productToDelete.quantity--;

        if (productToDelete.quantity == 0) {
          temp.splice(i, 1);
        }
        
        this.setState({
          cart:temp
        })
      }
    })

  }

   emptyTheCart() {
     ApiClient.deleteCart().then((res) => {
       if (res.data.status == "done") {
        this.setState({
          cart:[]
        })
       }
     })
  }

  render(){
    return (
      <div className="grid-container">
      <Header></Header>
      <main className="main">
        <div className="content">
          <ul className="products">
            {
              this.state.products.map((product, index) =>
                <Product key={index} product={product} productIndex={index} addToCart={this.addToCart}></Product>
              )
            }
          </ul>
        </div>
        <Cart cart={this.state.cart} deleteFromCart={this.deleteFromCart} emptyTheCart={this.emptyTheCart}></Cart>
      </main>
    </div>
    )
  }
}

      export default App;
