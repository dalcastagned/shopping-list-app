import React, { useContext } from 'react';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";
import * as S from './elements'
import { ItemContext } from '../../context';
import ReactSwipe from 'react-swipe';

const Card = ({ data }) => {
  const { removeItem, addCart, removeCart } = useContext(ItemContext)

  let reactSwipeEl;

  return (
    <S.Container>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false, startSlide: 1, transitionEnd: function (index) {
          if (index === 0 && !data.inCart) {
            reactSwipeEl.next()
            addCart(data.id)
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
        }}}
        ref={el => (reactSwipeEl = el)}
      >
       <S.Slide1 inCart={data.inCart}>{data.inCart
          ? <BsFillCartDashFill />
          : <BsFillCartPlusFill />
        }
          <FaCaretRight />
        </S.Slide1>
        <S.Slide2>
          <S.Information>
            <S.Amount >{data.amount}</S.Amount>
            <S.Item >{data.item}</S.Item>
            <S.Value >
              <p>R$:<span>{data.value}</span></p>
            </S.Value>
          </S.Information>
        </S.Slide2>
        <S.Slide3><FaCaretLeft /><IoMdTrash /></S.Slide3>
      </ReactSwipe>
    </S.Container>
  )
}

export default Card;
