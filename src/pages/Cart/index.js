import React, { useContext } from 'react';
import Card from '../../components/Card';
import FloatingButton from '../../components/FloatingButton';
import { ItemContext } from '../../context';
import * as S from './elements'

const Cart = () => {

    const { items } = useContext(ItemContext)

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
