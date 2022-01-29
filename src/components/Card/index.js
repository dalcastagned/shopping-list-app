import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#0f0',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    color: '#fff',
    fontSize: '35px'
  },
  slide2: {
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '35px'
  },
  slide3: {
    backgroundColor: '#f00',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    color: '#fff',
    fontSize: '35px'
  },
};

const Card = () => {
  return (
    <SwipeableViews index={1} enableMouseEvents onChangeIndex={(index)=>{console.log(index)}}>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>Adicionar ao Carrinho</div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>Item da lista</div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>Remover Item</div>
    </SwipeableViews>
  );
}

export default Card;
