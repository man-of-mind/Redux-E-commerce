import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./productComponent";
import { setProducts } from "./redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector((state: any) => state.allProducts.products);
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
    console.log(products);
    return (
        <div className="flex flex-col items-center px-4 my-4">
            <Product />
        </div>
    );
}

export default ProductListing;