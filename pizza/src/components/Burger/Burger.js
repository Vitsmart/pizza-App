import React from "react";
import classes from './burger.css';
import Burgeringredient from "./BurgerIngredients/BurgerIngredient.js";

const burger = () => {
return (
    <div className={classes.Burger}>
        <Burgeringredient type="bread-top" />
        <Burgeringredient type="cheese" />
        <Burgeringredient type="meat" />
        <Burgeringredient type="bread-bottom" />
   
    </div>
)
};

export default burger;