import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card';

import { ItemContext } from '../../context';

const HomePage = () => {

    const { items, userId } = useContext(ItemContext)
    const navigate = useNavigate();

    useEffect(()=>{
        if (userId === null){
            navigate('/')
        }
        return
    })

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
