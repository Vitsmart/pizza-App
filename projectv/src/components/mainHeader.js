import CartButton from "./CartButton";


const MainHeader = (props) => {
    return (
        <header className="header">
            <h1>My Book Store</h1>
            
                <ul>
                    <li>
                        <CartButton />
                    </li>
                    <li>Sort</li>
                </ul>
            
        </header>
    )
};

export default MainHeader;