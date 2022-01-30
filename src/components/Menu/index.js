import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ItemContext } from '../../context';
import ButtonMenu from '../ButtonMenu';
import * as S from './elements';

const Menu = () => {

    const { pathname } = useLocation()
    const {items} = useContext(ItemContext)
    
    return (
        <S.Container>
            <ButtonMenu $isActive={pathname === '/'} url='/' title='Restantes' value={items.filter(item => item.inCart === false).length}/>
            <ButtonMenu $isActive={pathname === '/cart'} url='/cart' title='Carrinho' value={1} cart={true}/>
        </S.Container>
    )
};

export default Menu;