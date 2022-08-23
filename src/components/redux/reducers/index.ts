import { combineReducers } from "redux";
import { addToCartReducer, productReducer, selectedProductReducer } from "./productReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    singleProduct: selectedProductReducer,
    allCart: addToCartReducer
});