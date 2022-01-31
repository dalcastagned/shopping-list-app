import React, { useContext, useEffect, useState } from 'react';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";
import * as S from './elements'
import { ItemContext } from '../../context';
import ReactSwipe from 'react-swipe';

const Card = ({ data, blockFunctions }) => {

  const { removeItem, addCart, removeCart, updateItem } = useContext(ItemContext)
  const [amount, setAmount] = useState(data.amount)
  const [item, setItem] = useState(data.item)
  const [value, setValue] = useState(data.value)

  const handleUpdateItem = () => {
    updateItem(data.id, parseInt(amount), item, parseFloat(value))
  }

  useEffect(() => {
    setAmount(data.amount)
    setItem(data.item)
    setValue(data.value)
  }, [data])

  let reactSwipeEl;

  if (blockFunctions) {
    return (
      <S.Container>
        <S.Slide2>
          <S.Information onBlur={handleUpdateItem}>
            <S.Amount inCart={data.inCart}
              type='number'
              value={amount}
              onChange={(event) => { setAmount(event.target.value) }}
              placeholder='0'
              disabled
            />
            <S.Item inCart={data.inCart}
              type='text'
              value={item}
              onChange={(event) => { setItem(event.target.value) }}
              placeholder='Item'
              disabled
            />
            <S.Value inCart={data.inCart}>
              <p>R$:</p>
              <input
                type='number'
                value={value}
                onChange={(event) => { setValue(event.target.value) }}
                placeholder='0,00'
                disabled
              />
            </S.Value>
          </S.Information>
        </S.Slide2>
      </S.Container>
    )
  } else {
    return (
      <S.Container>
        <ReactSwipe
          className="carousel"
          swipeOptions={{
            continuous: false,
            startSlide: 1,
            speed: 10,
            transitionEnd: function (index) {
              if (index === 0 && !data.inCart) {
                reactSwipeEl.next()
                addCart(data.id, parseInt(amount), item, parseFloat(value))
                document.getElementById("amountInput").blur();
                document.getElementById("itemInput").blur();
                document.getElementById("valueInput").blur();
              }
              if (index === 0 && data.inCart) {
                reactSwipeEl.next()
                removeCart(data.id)
              }
              if (index === 1) {
                return
              }
              if (index === 2) {
                reactSwipeEl.prev()
                removeItem(data.id)
              }
            }
          }}
          ref={el => (reactSwipeEl = el)}
        >
          <S.Slide1 inCart={data.inCart}>{data.inCart
            ? <BsFillCartDashFill />
            : <BsFillCartPlusFill />
          }
            <FaCaretRight />
          </S.Slide1>
          <S.Slide2>
            <S.Information onBlur={handleUpdateItem}>
              <S.Amount inCart={data.inCart}
                id='amountInput'
                type='number'
                value={amount}
                onChange={(event) => { setAmount(event.target.value) }}
                placeholder='0'
              />
              <S.Item inCart={data.inCart}
                id='itemInput'
                type='text'
                value={item}
                onChange={(event) => { setItem(event.target.value) }}
                placeholder='Item'
              />
              <S.Value inCart={data.inCart}>
                <p>R$:</p>
                <input
                  id='valueInput'
                  type='number'
                  value={value}
                  onChange={(event) => { setValue(event.target.value) }}
                  placeholder='0,00'
                />
              </S.Value>
            </S.Information>
          </S.Slide2>
          <S.Slide3><FaCaretLeft /><IoMdTrash /></S.Slide3>
        </ReactSwipe>
      </S.Container>
    )
  }
}

export default Card;
