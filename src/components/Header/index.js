import React from 'react';

import AddItem from '../AddItem';
import Menu from '../Menu';
import * as S from './elements'

const Header = () => {
    return (
        <S.Container>
            <h1>Lista de Compras</h1>
            <AddItem />
            <Menu />
        </S.Container>
    )
};

export default Header;
