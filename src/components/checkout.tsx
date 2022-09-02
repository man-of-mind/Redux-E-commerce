import React from 'react';


const Checkout = () => {
    return (
        <div>
            <p>product 1</p>
            <hr></hr>
            <p>product 2</p>
            <hr />
            <p>product 3</p>
            <hr />
        </div>
    );
}

const Product = ({quantity, description, image}: any) => {
    return (
        <div className='rounded shadow-xl w-4/5 flex items-center justify-items'>
            <img src={image} alt={description}/>
            <span>Quantity: 0</span>
        </div>
    );
}

export default Checkout;