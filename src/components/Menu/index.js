import React, { useContext } from 'react';

import { useLocation } from 'react-router-dom';

import { ItemContext } from '../../context';
import ButtonMenu from '../ButtonMenu';
import * as S from './elements';

const Menu = () => {

    const { pathname } = useLocation()
    const {items, totalCart} = useContext(ItemContext)
    
    return (
        <S.Container>
            <ButtonMenu $isActive={pathname === '/'} url='/' title='Restantes' value={items.filter(item => item.inCart === false).length}/>
            <ButtonMenu $isActive={pathname === '/cart'} url='/cart' title='Carrinho' value={totalCart} cart={true}/>
            <ButtonMenu $isActive={pathname === '/all'} url='/all' title='Todos Itens' value={items.length}/>
        </S.Container>
    )
};

export default Menu;