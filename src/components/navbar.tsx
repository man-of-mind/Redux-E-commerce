import React from "react";
import './index.css';
import cart from '../components/cart.svg';

const Navbar = () => {
    let totalCollectin = 4;
    return (
        <div className="flex justify-between items-center flex-row w-full py-4 px-6 shadow-xl">
            <p className="text-3xl text-black">Shopping mall</p>
            <div className="flex w-20 items-center">
                <h3 className="pr-2 text-xl">{totalCollectin}</h3>
                <img src={cart} alt="cart icon" style={{width: "36px", height: "36px"}}></img>
            </div>
        </div>
        
    );
}

export default Navbar;