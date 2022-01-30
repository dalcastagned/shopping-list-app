import React from 'react';
import { useLocation } from 'react-router-dom';
import ButtonMenu from '../ButtonMenu';
import * as S from './elements';

const Menu = () => {

    const { pathname } = useLocation()
    
    return (
        <S.Container>
            <ButtonMenu $isActive={pathname === '/'} url='/' title='Restantes' value={1}/>
            <ButtonMenu $isActive={pathname === '/cart'} url='/cart' title='Carrinho' value={1} cart={true}/>
            <ButtonMenu $isActive={pathname === '/all'} url='/all ' title='Todos Itens' value={1}/>
        </S.Container>
    )
};

export default Menu;