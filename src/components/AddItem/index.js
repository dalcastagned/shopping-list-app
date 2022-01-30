import React, { useState } from 'react';
import * as S from './elements'

const AddItem = () => {

    const [item, setItem] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(item)
    }

    return (
        <S.Container onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Adicione um item' 
            value={item}
            onChange={(event) => {setItem(event.target.value)}}
            />
            <S.AddIcon type='submit' />
        </S.Container>
    )
};

export default AddItem;
