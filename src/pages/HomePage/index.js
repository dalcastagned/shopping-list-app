import React, { useContext } from 'react';
import Card from '../../components/Card';
import { ItemContext } from '../../context';

const HomePage = () => {

    const { items } = useContext(ItemContext)

    return (
        <div>
            {React.Children.toArray(items
                .filter((item) => item.inCart !== true)
                .map(item => (
                    <Card data={item} />
                )))}
        </div>
    )
};

export default HomePage;
