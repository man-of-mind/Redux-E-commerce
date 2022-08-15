import React from "react";
import Product from "./productComponent";

const ProductListing = () => {
    return (
        <div className="grid grid-flow-row grid-flow-col px-8 my-4">
            <Product />
        </div>
    );
}

export default ProductListing;