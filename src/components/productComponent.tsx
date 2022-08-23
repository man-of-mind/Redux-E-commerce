import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "./redux/actions/productActions";

const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.allProducts.products);
    const imageStyle = {
        'height': '100%', 
        'display': 'block', 
        'margin': 'auto'
    }
    const handleOnClick = (product: any) => dispatch(addToCart(product));
    const allProducts = products.map((product: any) => {
        const {title, id, price, category, image, description} = product
        return (
            <Link to={`/product-details/${id}`} key={id}>
                <div className="flex flex-col justify-between bg-white w-auto h-96 shadow-md rounded-md px-2 py-2 my-2">
                    <div className="image h-52">
                        <img src={image} alt={description} style={imageStyle}></img>
                    </div>
                    <div className="flex flex-col pt-6">
                        <span>{title}</span>
                        <span className="font-bold">${price}</span>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">{category}</span>
                            <button className="py-2 px-6 text-white text-sm bg-blue-600 rounded" onClick={ () => handleOnClick(product) }>Add to Cart</button>
                        </div>
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