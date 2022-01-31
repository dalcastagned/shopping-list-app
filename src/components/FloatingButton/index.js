import React from 'react';
import * as S from './elements'

const FloatingButton = ({ type }) => {

    const background = (type === 'trash' ? '#f00' : type === 'removeCart' && '#00b')

    return (
        <S.Button background={background}>
            {type === "trash" && <S.ButtonTrashIcon />}
            {type === "removeCart" && <S.ButtonRemoveIcon />}
        </S.Button>
    )
};

export default FloatingButton;
