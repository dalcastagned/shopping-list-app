import React from 'react';
import * as S from './elements';

const ButtonMenu = ({ $isActive, url, title, value, cart }) => {
    return (
        <S.Container $isActive={$isActive} to={url}>
            <S.ContainerInfo $isActive={$isActive}>
                <h1>{title}</h1>
                {cart
                    ? <p>(R$:<span>{value.toFixed(2)}</span>)</p>
                    : <p>({value})</p>
                }
            </S.ContainerInfo>
        </S.Container>
    )
};

export default ButtonMenu;
