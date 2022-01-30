import React, { useContext, useState } from 'react';

import SwipeableViews from 'react-swipeable-views';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";


import * as S from './elements'
import { ItemContext } from '../../context';

const Card = ({ data }) => {

    const [amount, setAmount] = useState(data.amount)
    const [item, setItem] = useState(data.item)
    const [value, setValue] = useState(data.value)
    const {removeItem, addCart, removeCart} = useContext(ItemContext)

    const handleSubmit = () => {
    }

    return (
        <S.Container>
            <SwipeableViews
                enableMouseEvents
                index={1}
                onChangeIndex={(index) => {
                    if (index === 0 && !data.inCart) {
                        addCart(data.id)
                    }
                    if (index === 0 && data.inCart) {
                        removeCart(data.id)
                    }
                    if (index === 1) {
                        return
                    }
                    if (index === 2) {
                        removeItem(data.id)
                    }
                }}>
                <S.Slide1 inCart={data.inCart}>{data.inCart
                    ? <BsFillCartDashFill />
                    : <BsFillCartPlusFill />
                }
                    <FaCaretRight />
                </S.Slide1>
                <S.Slide2>
                    <S.Information onBlur={handleSubmit}>
                        <S.Amount inCart={data.inCart}
                            type='number'
                            value={amount}
                            onChange={(event) => {setAmount(event.target.value)}}
                            placeholder='0'
                        />
                        <S.Item inCart={data.inCart}
                            type='text'
                            value={item}
                            onChange={(event) => {setItem(event.target.value)}}
                            placeholder='Item'
                        />
                        <S.Value inCart={data.inCart}>
                            <p>R$:</p>
                            <input
                                type='number'
                                value={value}
                                onChange={(event) => {setValue(event.target.value)}}
                                placeholder='0,00'
                            />
                        </S.Value>
                    </S.Information>
                </S.Slide2>
                <S.Slide3><FaCaretLeft /><IoMdTrash /></S.Slide3>
            </SwipeableViews>
        </S.Container>
    );
}

export default Card;
