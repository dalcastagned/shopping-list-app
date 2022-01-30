import React, { useContext } from 'react';
import Card from '../../components/Card';
import { ItemContext } from '../../context';

const Cart = () => {
     
    const {items} = useContext(ItemContext)

    return (
        <div>
            {React.Children.toArray(items
            .filter((item) => item.inCart !== false)
            .map(item => (
                <Card data={item} />
            )))}
        </div>
    )
};

export default Cart;
