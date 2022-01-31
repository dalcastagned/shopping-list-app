import React, { useContext, useState } from 'react';

import * as S from './elements'

import { ItemContext } from '../../context';

const AddItem = () => {

    const [item, setItem] = useState('')
    const [amount, setAmount] = useState(1)
    const { addItem } = useContext(ItemContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (amount > 0 && item.length > 0) {
            addItem(item, amount)
            setItem('')
            setAmount(1)
            document.getElementById("inputItem").focus();
        } else {
            return
        }
    }

    return (
        <S.Container onSubmit={handleSubmit}>
            <S.Amount
                type='number'
                placeholder='Qtd.'
                maxLength={2}
                value={amount}
                onChange={(event) => { setAmount(event.target.value) }}
            />
            <S.Item
                id='inputItem'
                type='text'
                placeholder='Digite um item'
                value={item}
                onChange={(event) => { setItem(event.target.value) }}
            />
            <button type='submit'><S.AddIcon /></button>
        </S.Container>
    )
};

export default AddItem;
