import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
    const products = useSelector((state: any) => state.allProducts.products);
    const { id, title } = products[0];
    return (
        <div className="flex items-center flex-col bg-white w-80 shadow-md rounded-md px-2 py-2">
            <div className="image">

            </div>
            <div className="flex flex-row justify-between">
                <span>{title}</span>
            </div>
        </div>
    );
}

export default Product;