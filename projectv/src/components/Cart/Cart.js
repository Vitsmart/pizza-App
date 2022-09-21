import { useSelector } from 'react-redux/';
import CartItem from './CartItems';

const Cart = (props) => {
const cartItems = useSelector(state => state.cart.items)
//const hasItems = () => { return cartItems.length > 0};
 const Totalprice = useSelector(state => state.cart.totalprice) 


return (
    <>
    <div className='wrapper'>
      <h2>My Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
 <CartItem
 item={{ 
  id: item.id,
  key: item.id,
  title: item.name, 
  quantity: item.quantity, 
  total: item.totalprice, 
  price: item.price
  }}
/>
        ))}
      </ul>
      <div className="actions">
        <button className='button--alt' onClick={props.onClose}>
          Close
        </button>
        <span className='badge'>{Totalprice}</span>
        <button className="button">Buy Now</button>
      </div>
      </div>
      </>
  );
};


export default Cart;
