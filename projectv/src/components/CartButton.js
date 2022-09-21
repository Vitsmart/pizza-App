import Cart from './Cart/Cart';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import CartIcon from './Cart/Carticon';
import { useState } from 'react';
    
    
    const CartButton = (props) => {
      const [cartIsVisible, setCartIsVisible] = useState(false);
    const cartQuantity = useSelector(state => state.cart.totalQuantity);
      
    const openCart = () => {
setCartIsVisible(true)
    };
      
      return (
        <>
        {cartIsVisible && <Cart />}
        <button className="button" onClick={openCart}>
             <span className="icon">
        <CartIcon />
      </span>
       <span>My Cart</span>
          <span className="badge">{cartQuantity}</span>
        </button>
        </>
      );
    };

export default CartButton;