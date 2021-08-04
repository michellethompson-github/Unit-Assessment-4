import React from 'react'

class ProductDetails extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
                    <div className="product-details-wrapper">
                        <div className="product-price">${this.props.product.price}</div>
                        <div className="product-rating">
                            { this.props.product.rating > 0 &&
                                [...Array(5)].map((x, i) =>
                                 <img className="product-stars" src={((i + 1) <= this.props.product.rating) ? process.env.PUBLIC_URL + "images/" + "star-100.webp" : process.env.PUBLIC_URL + "images/" + "star-0.webp"} alt="star"></img>
                                )
                            }
                        </div>
                    </div>
                );
    }
}

// function ProductDetails(props) {
//     return(
//         <div className="product-details-wrapper">
//             <div className="product-price">${props.product.price}</div>
//             <div className="product-rating">
//                 { props.product.rating > 0 &&
//                     [...Array(5)].map((x, i) =>
//                      <img class="product-stars" src={((i + 1) <= props.product.rating) ? process.env.PUBLIC_URL + "images/" + "star-100.webp" : process.env.PUBLIC_URL + "images/" + "star-0.webp"} alt="star"></img>
//                     )
//                 }
//             </div>
//         </div>
//     );
// }

export default ProductDetails;