import React, { useContext } from 'react';
import Card from '../../components/Card';
import { ItemContext } from '../../context';

const AllItems = () => {
     
    const {items} = useContext(ItemContext)

    return (
        <div>
            {React.Children.toArray(items
            .map(item => (
                <Card data={item} blockFunctions={true}/>
            )))}
        </div>
    )
};

export default AllItems;
