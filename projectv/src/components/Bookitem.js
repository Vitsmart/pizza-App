import React from "react";
import Card from "./Card";
import { cartActions } from "../store/cartslice";
import { useDispatch } from "react-redux";


const Bookitem = (props) => {
    const dispatch = useDispatch();
    const { title, price, description, id } = props;

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
          id,
          title,
          price,
          description,
        }));
      };



return (
    <Card>
        <li className="item" key={id}>
    <header>
        <h3>{title}</h3>
        <div className="price">${price.toFixed(2)}</div>
    </header>
    <p>{description}</p>
    <div>
        <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
        </li>
        </Card>
)
}

export default Bookitem;
