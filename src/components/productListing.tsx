import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Product from "./productComponent";
import { setProducts } from "./redux/actions/productActions";

const ProductListing = () => {
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        await axios.get("https://fakestoreapi.com/products").then(
            (response) => dispatch(setProducts(response.data))
        ).catch((err) => {
            console.log(err);
        });
    }
    
    useEffect(() => {
        fetchProducts();
    }, []);
    
    return (
        <div className="flex flex-col items-center px-8 my-6">
            <Product />
        </div>
    );
}

export default ProductListing;