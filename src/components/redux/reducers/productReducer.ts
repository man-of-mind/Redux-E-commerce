import { ActionTypes } from "../constants/action-types"

const initialState = {
    products: []
};

export const productReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }: any) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, product: payload};
        default:
            return state;
    }
}