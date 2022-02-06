import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";

export const Container = styled.form`
    height: 80px;
    background: #303134;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 15px;
    padding: 15px;

    button{
        background: transparent;
        border: none;
    }
`

export const Item = styled.input`
        width: 100%;
        border: none;
        outline: none;
        background: transparent;
        border-bottom: 2px solid #757B80;
        font-size: 18px;
        color: #fff;
        padding: 8px;

        ::placeholder {
            color: #fff;
            opacity: 0.7; 
        }

        :-ms-input-placeholder { 
            color: #fff;
            opacity: 0.7; 
        }

        ::-ms-input-placeholder { 
            color: #fff;
            opacity: 0.7; 
        }

        :-webkit-autofill,
        :-webkit-autofill:hover, 
        :-webkit-autofill:focus {
            border-bottom: 2px solid #757B80;
            -webkit-text-fill-color: #fff;
            -webkit-box-shadow: 0 0 0px 1000px transparent inset;
            transition: background-color 5000s ease-in-out 0s;
        }
`

export const Amount = styled.input`
        width: 50px;
        border: none;
        outline: none;
        background: transparent;
        border-bottom: 2px solid #757B80;
        font-size: 18px;
        color: #fff;
        padding: 8px;
        text-align: center;
        -moz-appearance: textfield;

        ::placeholder {
            color: #fff;
            opacity: 0.8; 
        }

        :-ms-input-placeholder { 
            color: #fff;
            opacity: 0.7; 
        }

        ::-ms-input-placeholder { 
            color: #fff;
            opacity: 0.7; 
        }
        
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }   

`

export const AddIcon = styled(AiFillPlusCircle)`
    font-size: 40px;
    color: #fff;
`