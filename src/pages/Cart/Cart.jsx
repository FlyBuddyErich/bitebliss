import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import back from '../../assets/arrow_left.png';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState('');

  const validPromoCodes = ['BITE100', 'HELLO', 'PROMO'];

  const handleApplyPromoCode = () => {
    if (validPromoCodes.includes(promoCode.toUpperCase())) {
      setDiscount(4.99);
      setMessage('Promo is working!');
    } else {
      setDiscount(0);
      setMessage('This promo does not exist');
    }
  };

  const totalAmount = getTotalCartAmount();
  const finalTotal = totalAmount + 1.99 - discount;

  return (
    <div className='cart'>
      <Link to="/"><img src={back} alt="" className='arrow-icon'/></Link>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tax</p>
              <p>${1.99.toFixed(2)}</p>
            </div>
            <hr />
            {discount > 0 && (
              <div className="cart-total-details">
                <p>Discount</p>
                <p>-${discount.toFixed(2)}</p>
              </div>
            )}
            <div className="cart-total-details">
              <b>Total</b>
              <b>${finalTotal.toFixed(2)}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode, you can enter it here! For first order use: BITE100</p>
            <div className='cart-promocode-input'>
              <input 
                type="text" 
                placeholder='Promo' 
                value={promoCode} 
                onChange={(e) => setPromoCode(e.target.value)} 
              />
              <button onClick={handleApplyPromoCode}>Submit</button>
            </div>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;