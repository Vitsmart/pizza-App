import React from "react";
import classes from './Burger.css';
import Burgeringredient from "./BurgerIngredients/BurgerIngredient.css";

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