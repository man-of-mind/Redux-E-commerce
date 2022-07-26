import React, { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectedProduct } from "./redux/actions/productActions";

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [show, setShow] = React.useState(false);
    
    const product = useSelector((state: any) => state.singleProduct.product);
//    const { image, title, price, category, description} = product;

    useEffect(() => {
        if (productId && productId !== ""){
            axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
                dispatch(selectedProduct(res.data));
                setShow(true)
            }).catch(err => console.log(err.message));
        }
        dispatch(selectedProduct({}));
    }, [dispatch, productId]);

    const handleOnClick = () => {
        dispatch(addToCart(product));
    };

    return (
        <>
            {!show ? (<span className="text-xl">Loading</span>) : 
            (<div className="flex flex-col items-center m-auto rounded-md my-5 w-3/5 shadow-xl">
                <div className="grid grid-cols-2">
                    <div className="py-4 shadow-md px-4">
                        <img src={product?.image} alt={product?.description}></img>
                    </div>
                    <div className="py-4 pr-4 pl-6">
                        <h3 className="font-bold">{product?.title}</h3>
                        <div className="my-2 py-1 px-6 bg-green-400 text-white w-fit rounded">${product?.price}</div>
                        <div className="my-2 bg-gray-200 pl-2 py-2 text-gray-700">{product?.category}</div>
                        <p className="text-sm text-gray-500 pb-3">{product?.description}</p>
                        <button className="py-2 px-8 text-white text-sm bg-rose-600 rounded" onClick={handleOnClick}>Add to Cart</button>
                        <Link to="/">
                            <button className="mx-4 py-2 px-8 text-white text-sm bg-blue-700 rounded">Back</button>
                        </Link>
                    </div>
                </div>
            </div>)}
        </>
    );
}

export default ProductDetail;