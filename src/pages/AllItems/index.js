import React, { useContext } from 'react';
import Card from '../../components/Card';
import FloatingButton from '../../components/FloatingButton';
import { ItemContext } from '../../context';
import * as S from './elements'

const AllItems = () => {
     
    const {items} = useContext(ItemContext)

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
