import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
    const products = useSelector((state: any) => state.allProducts.products);
    const allProducts = products.map(({title, id, price, category, image, description}: any) => {
        return (
            <div className="flex items-center flex-col bg-white w-80 shadow-md rounded-md px-2 py-2 my-2" key={id}>
                <div className="image">
                    <img src={image} alt={description}></img>
                </div>
                <div className="flex flex-row justify-between">
                    <span>{title}</span>
                    <span>${price}</span>
                    <span>{category}</span>
                </div>
            </div>
        );
    });

    return (
        <div className="grid grid-cols-4 grid-flow-row gap-4">{allProducts} </div>
    );
}

export default Product;