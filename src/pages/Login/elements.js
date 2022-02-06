import styled from "styled-components";
import { GoAlert } from "react-icons/go";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: calc(100vh - 40px);
`

export const Title = styled.h1`
    font-size: 30px;
    color: #757B80;
    padding-bottom: 20px;
    padding-top: 50px;
`
export const Input = styled.input`
    width: 260px;
    margin-top: 10px;
    padding: 10px;
    height: 60px;
    font-size: 18px;
    border: none;
    border-bottom: 2px solid #757B80;
    color: #fff;
    background: transparent;
    outline: none;
`

export const Erro = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    justify-content: center;

    p {
        color: #f00;
        opacity: 0.8;
        padding-left: 10px;
        font-size: 18px;
    }
`

export const ErroIcon = styled(GoAlert)`
    color: #f00;
    opacity: 0.8;
    font-size: 18px;
`

export const Button = styled.button`
    width: 200px;
    height: 50px;
    color: #fff;
    background: #757B80;
    border: none;
    border-radius: 10px;
    font-size: 18px;
`

export const Registration = styled.p`
    color: #757B80;
    padding: 20px 10px 0 10px;
    text-align: center;

    span {
        color: #1877f2;
        font-size: 16px;
    }
`