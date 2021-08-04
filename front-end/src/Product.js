import React from 'react';
import ProductDetails from './ProductDetails';

class Product extends React.Component {

    constructor(props){
        super(props)
        this.addToCartClicked = this.addToCartClicked.bind(this)
        // const {product, productIndex, addToCart} = this.props

    }
    
    addToCartClicked() {
        const {product, productIndex, addToCart} = this.props
        // alert('Clicked!' + this.props.productIndex)
        // alert('Object: ' + JSON.stringify(this.props))
        // this.props.addToCart(this.props.productIndex);
        if(typeof(this.props.addToCart) === 'function') {
            //call this.props.showName(d);
            addToCart(productIndex)
            console.log('Found');
                // alert('Found')

            // return null;
        }else{

            alert("Not Found")
            // return this.props.showName;
        }    
        }

     render(){
        const {product, productIndex, addToCart} = this.props
        console.log(product)
        return (
           
            <li>
                         <div class="product">
                             <img class="product-image" src={"images/" + product.image} alt="Planter"></img>
                             <div class="product-name">
                                 <a>{product.name}</a>
                             </div>
                             <ProductDetails product={product}></ProductDetails>
                             <img class="cart-button" src={process.env.PUBLIC_URL + "images/cart-icon.png"} alt="star" onClick={this.addToCartClicked}></img>
                         </div>
                     </li>
                );
     }   
}

// function Product(props) {

//     return (
//         <li>
//             <div class="product">
//                 <img class="product-image" src={"images/" + props.product.image} alt="Planter"></img>
//                 <div class="product-name">
//                     <a>{props.product.name}</a>
//                 </div>
//                 <ProductDetails product={props.product}></ProductDetails>
//                 <img class="cart-button" src={process.env.PUBLIC_URL + "images/cart-icon.png"} alt="star" onClick={addToCartClicked}></img>
//             </div>
//         </li>
//     );
// }

export default Product;