import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen(props) {
        return <ul className="products">
        {
         data.products.map(product =>
         <li key={product._id}>
         <div className="product">
         <Link to={'/products/' + product._id}>
             <img className="product-image" src={product.image} alt="product"/>
             </Link>
             <div className="product-name">
                <Link to={'/products/' + product._id}>{product.name}</Link>
             </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">&#8358;{product.price}</div>
              <div className="product-ratings">{product.rating} stars {product.numReviews}</div>
        </div> 
     
     </li>)
 
     }     

 </ul>  

    }  
export default HomeScreen;
