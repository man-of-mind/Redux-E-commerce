import React from "react";
import './index.css';


const Navbar = () => {
    return (
        <div className="flex justify-between items-center flex-row w-full py-4 px-6 shadow-xl">
            <p className="text-3xl text-black">Shopping mall</p>
            <span>Cart</span>
        </div>
        
    );
}

export default Navbar;