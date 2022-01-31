import React, { useContext, useState } from 'react';

import * as S from './elements'

import { ItemContext } from '../../context';

const FloatingButton = ({ type }) => {

    const { removeAll, emptyCart } = useContext(ItemContext)
    const [showPopup, setShowPopup] = useState(false)
    const background = (type === 'trash' ? '#f00' : type === 'removeCart' && '#00b')

    return (
        <>
            {type === 'trash'
                && <S.Popup
                    showPopup={showPopup}
                    functionOk={removeAll}
                    setShowPopup={setShowPopup}
                    text="Apagar tudo?"
                />}
            {type === 'removeCart' && <S.Popup
                showPopup={showPopup}
                functionOk={emptyCart}
                setShowPopup={setShowPopup}
                text="Esvaziar carrinho?"
            />}
            <S.Button
                background={background}
                onClick={() => {
                    setShowPopup(!showPopup)
                }}>
                {type === "trash" && <S.ButtonTrashIcon />}
                {type === "removeCart" && <S.ButtonRemoveIcon />}
            </S.Button>
        </>
    )
};

export default FloatingButton;
