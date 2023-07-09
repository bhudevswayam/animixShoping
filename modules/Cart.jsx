import React from 'react';
import Card from './Card';
import SData from '../src/SData';
import { useCart } from 'react-use-cart';
import './cart.css';
import Navbar from './Navbar';
import { CheckOutlined } from '@material-ui/icons';

const Cart = () =>{
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
      } = useCart();

      const CheckOut = () => {
        alert(`Your Items of $${cartTotal} Will Be Perchased`);
        const processing = document.getElementById('processing');
        processing.innerHTML = 'Please wait, while me make your purchase......';
        setTimeout(() => {
          alert('Purchase completed successfully');
          emptyCart()
        }, 4000);
      }

      if(isEmpty) return <h1 className='cartTitle'>Your Cart is empty :(</h1>
    return <>
    <h1 className='cartTitle'>Cart</h1>
    <h2 className='cartItemCount'>Cart : {totalItems} Total Items : {totalUniqueItems}</h2>
    
    <div className='cartItemsContainer'>
    <ul className='cartUl'>
      <ol id='olTitle'>
        <li id='liTitle'>Product Name</li>
        <li id='liTitle'>Remove</li>
        <li id='liTitle'>Add</li>
        <li id='liTitle'>Delete</li>
        <li id='liTitle'>Product Price</li>
        <li id='liTitle'>Product Total</li>
      </ol>
          {items.map((item) => (
            <li className='cartLi' key={item.id}>
              {item.quantity} x {item.title} &mdash;
              <button id='removeItem' 
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button id='addItem'
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button id='deleteItem' onClick={() => removeItem(item.id)}>&times;</button>
              <h2 className='ItemPrice'>${item.price}</h2>
              <h2 className='ItemPrice'>${item.price*item.quantity}</h2>
            </li>
          ))}
    </ul>
    </div>
    <div className='totalConntainer'>
        <h3 className='totalCheckout'>Your Total is {cartTotal}</h3>
        <button id='checkoutbtn' onClick={()=>CheckOut()}>Check Out</button>
        <h3 id="processing"></h3>
    </div>
    </>
}

export default Cart;