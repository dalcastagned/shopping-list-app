import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import firebase from 'firebase'

import AddItem from '../AddItem';
import Menu from '../Menu';
import * as S from './elements'

const Header = () => {

    const { pathname } = useLocation()
    const navigate = useNavigate();

    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            navigate('/')
        }).catch(() => {

        });
    }

    if (pathname === '/' || pathname === '/signup') {
        return null
    } else {
        return (
            <S.Container>
                <S.ContainerHeader>
                    <p></p>
                    <h1>Lista de Compras</h1>
                    <S.Logout onClick={() => handleLogout()} />
                </S.ContainerHeader>
                <AddItem />
                <Menu />
            </S.Container>
        )
    }
};

export default Header;
