import React, { useState } from 'react';
import { useSelector } from 'react-redux/';
import CartItem from './CartItems';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const Cart = (props) => {
const cartItems = useSelector(state => state.cart.items)
//const hasItems = () => { return cartItems.length > 0};
 const Totalprice = useSelector(state => state.cart.totalprice) 
 console.log(Totalprice);
  const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };
 
 
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
 
   return (
     <div>
       <Button onClick={handleOpen}>See Cart</Button>
       <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
       >
         <Box sx={style}>
           <Typography id="modal-modal-title" variant="h6" component="h2">
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
        <button className='button--alt' onClick={handleClose}>
          Close
        </button>
        <span className='badge'>{Totalprice}</span>
        <button className="button">Buy Now</button>
</div>

           </Typography>
          
         </Box>
       </Modal>
     </div>
   );
 }
 

export default Cart;
