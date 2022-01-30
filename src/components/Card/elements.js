import styled from "styled-components";

export const Container = styled.div`
    padding-bottom: 10px;
`

export const Slide1 = styled.div`
    background-color: ${({inCart}) => inCart ? '#00b' : '#0b0'};
    display: flex;
    justify-content: right;
    align-items: center;
    color: #fff;
    font-size: 30px;
    min-height: 50px;
    padding: 15px;
`

export const Slide2 = styled.div`
    background-color: #303134;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    min-height: 60px;
`
export const Slide3 = styled.div`
    background-color: #f00;
    display: flex;
    justify-content: left;
    align-items: center;
    color: #fff;
    font-size: 30px;
    min-height: 50px;
    padding: 15px;
`

export const Information = styled.form`
    width: 100%;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 25px 1fr 90px;
    gap: 10px;
`

export const Amount = styled.input`
    width: 100%;
    border: none;
    background-color: transparent;
    outline: none;
    color: #fff;
    font-size: 18px;
    text-decoration: ${({inCart}) => inCart && 'line-through'};
    opacity: ${({inCart}) => inCart && '0.6'};
    font-style: ${({inCart}) => inCart && 'italic'};
`

export const Item = styled.input`
    width: 100%;
    border: none;
    background-color: transparent;
    outline: none;
    color: #fff;
    font-size: 18px;
    text-decoration: ${({inCart}) => inCart && 'line-through'};
    opacity: ${({inCart}) => inCart && '0.6'};
    font-style: ${({inCart}) => inCart && 'italic'};
`

export const Value = styled.div`
    display: flex;
    color: #fff;

    p {
        padding-right: 2px;
        font-size: 18px;
        text-decoration: ${({inCart}) => inCart && 'line-through'};
        opacity: ${({inCart}) => inCart && '0.6'};
        font-style: ${({inCart}) => inCart && 'italic'};
    }
    
    input {
        width: 100%;
        border: none;
        background-color: transparent;
        outline: none;
        color: #fff;
        font-size: 18px;
        text-decoration: ${({inCart}) => inCart && 'line-through'};
        opacity: ${({inCart}) => inCart && '0.6'};
        font-style: ${({inCart}) => inCart && 'italic'};
    }
   
`
