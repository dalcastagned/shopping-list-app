import React, { useContext, useEffect } from 'react';

import Card from '../../components/Card';
import FloatingButton from '../../components/FloatingButton';
import * as S from './elements'

import { ItemContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const { items, userId } = useContext(ItemContext)
    const navigate = useNavigate();

    useEffect(()=>{
        if (userId === null){
            navigate('/')
        }
        return
    })

    return (
        <S.Container>
            {items.filter((item) => item.inCart !== false).length > 0
                && <FloatingButton type={'removeCart'} />
            }
            {React.Children.toArray(items
                .filter((item) => item.inCart !== false)
                .map(item => (
                    <Card data={item} />
                )))}
        </S.Container>
    )
};

export default Cart;
