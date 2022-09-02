import React from "react";
import './index.css';
import cart from '../components/cart.svg';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckOutModal from "./checkOutModal";
import Checkout from "./checkout";

const Navbar = () => {
    const productCart = useSelector((state: any) => state.allCart);
    let totalCollection = productCart.carts.length;
    const [open , setIsOpen] = React.useState(false)
    return (
        <div className="flex justify-between items-center flex-row w-full py-4 px-6 shadow-xl">
            <Link to="/">
                <p className="text-3xl text-black">Shopping mall</p>
            </Link>
            <div className="flex w-20 items-center">
                <h3 className="pr-2 text-xl">{totalCollection}</h3>
                <button onClick={() => setIsOpen(!open)}>
                    <img src={cart} alt="cart icon" style={{width: "36px", height: "36px"}}></img>
                </button>
                <CheckOutModal show={open} handleClose={() => setIsOpen(false)}>
                    <Checkout />
                </CheckOutModal>
            </div>
        </div>
        
    );
}

export default Navbar;