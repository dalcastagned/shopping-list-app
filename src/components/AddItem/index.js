import React, { useContext, useState } from 'react';
import { ItemContext } from '../../context';
import * as S from './elements'

const AddItem = () => {

    const [item, setItem] = useState('')
    const {addItem} = useContext(ItemContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        addItem(item)
        setItem('')
        document.getElementById("inputItem").focus();
    }

    return (
        <S.Container onSubmit={handleSubmit}>
            <input 
            id='inputItem'
            type='text' 
            placeholder='Adicione um item' 
            value={item}
            onChange={(event) => {setItem(event.target.value)}}
            />
            <button type='submit'><S.AddIcon /></button>
        </S.Container>
    )
};

export default AddItem;
