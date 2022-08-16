import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
    const products = useSelector((state: any) => state.allProducts.products);
    const imageStyle = {
        'height': '100%', 
        'display': 'block', 
        'margin': 'auto'
    }
    const allProducts = products.map(({title, id, price, category, image, description}: any) => {
        return (
            <Link to={`/product-details/${id}`}>
                <div className="flex flex-col justify-between bg-white w-auto h-96 shadow-md rounded-md px-2 py-2 my-2" key={id}>
                    <div className="image h-52">
                        <img src={image} alt={description} style={imageStyle}></img>
                    </div>
                    <div className="flex flex-col pt-6">
                        <span>{title}</span>
                        <span className="font-bold">${price}</span>
                        <span className="text-gray-400">{category}</span>
                    </div>
                </div>
            </Link>
        );
    });

    return (
        <div className="grid grid-cols-4 grid-flow-row gap-6">{allProducts} </div>
    );
}

export default Product;