import React from 'react';
import Card from '../../components/Card';

const HomePage = () => {
    return (
        <div>
            <Card data={{ amount: 1, item: 'Item de Teste', value: 25.99, inCart: true }} />
        </div>
    )
};

export default HomePage;
