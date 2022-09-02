import React from 'react';
import { useSelector } from 'react-redux';


const Checkout = () => {
    interface prop {
        id: number,
        count: number,
        product: any
    }
    const cartProducts = useSelector((state: any) => state.allCart.carts);
    const checkoutList: prop[] = [];
    
    cartProducts.forEach((element: any) => {
        const count = cartProducts.reduce((total: number, x: any) => total + (JSON.stringify(x) === JSON.stringify(element) ? 1 : 0), 0);
        checkoutList.push(
            {
                id: element.id,
                count: count,
                product: element
            }
        );
    });

    const displayCartProduct = checkoutList.map(item => {
        return <Product 
            count={item.count} 
            key={item.id} 
            description={item.product.description} 
            image={item.product.image} />
    })
    
    return (
        <div>
            <h1 className='text-3xl'>CheckList</h1>
            {displayCartProduct}
        </div>
    );
}

const Product = ({count, description, image}: any) => {
    return (
        <div className='rounded shadow-xl w-4/5 h-24 flex items-center justify-between p-2'>
            <img src={image} alt={description} width={48} height={48}/>
            <span>Quantities: {count}</span>
        </div>
    );
}

export default Checkout;