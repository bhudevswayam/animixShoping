import React from 'react';
import "./card.css";
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Card = (props) =>{
    const { addItem } = useCart();
    const moveToCart = (e) => {
        e.preventDefault();
    }
    return <>
        <div className="card-container">
            <div className="card">
                <img src={props.img} alt="product_pic" className="card-image" />
                <div className="card-info">
                    <span className="card-category">{props.title}</span>
                    <h3 className="card-title">${props.price}</h3>
                    <a target="blank">
                    {/* <Link to='/cart'><button onClick={moveToCart}>Buy Now</button></Link> */}
                        <button id='addcart' onClick={()=>addItem(props.item)}>Add To Cart</button>
                    </a>
                </div>
            </div>
        </div>
    </>
};

export default Card;
