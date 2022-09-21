import React from "react";
import MainHeader from "./mainHeader";

const Home = (props) => {
return (
        <MainHeader onClick={props.onShowCart}/>
)
};


export default Home;