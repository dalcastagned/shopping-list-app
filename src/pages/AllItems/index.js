import React, { useContext, useEffect } from 'react';

import Card from '../../components/Card';
import FloatingButton from '../../components/FloatingButton';
import * as S from './elements'

import { ItemContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const AllItems = () => {
     
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
            {items.length>0 && <FloatingButton type={'trash'}/>}
            {React.Children.toArray(items
            .map(item => (
                <Card data={item} blockFunctions={true}/>
            )))}
        </S.Container>
    )
};

export default AllItems;
