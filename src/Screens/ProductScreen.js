import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data';

function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x=> x._id === props.match.params.id)
    return <div>
        <div className="back-to-result">
            <Link to="/">Back to result</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} stars ({product.numReviews} reviews)
                    </li>
                    <li>
                        Price: <b>&#8358;{product.price}</b>
                    </li>
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: {product.price}
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Qty: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <li>
                        <button className="button">Add to Cart</button>

                        </li>
                </ul>
            </div>
        </div>
       
    </div>
    
    
}
export default ProductScreen;