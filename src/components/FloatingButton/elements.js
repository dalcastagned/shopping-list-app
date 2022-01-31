import styled from "styled-components";
import { MdDeleteSweep } from "react-icons/md";
import { BsFillCartDashFill } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";

export const Button = styled.button`
    height: 55px;
    width: 55px;
    background:  ${({background}) => background};
    border-radius: 50%;
    border: none;
    position: fixed;
    bottom: 40px;
    right: 20px;
    box-shadow: 3px 3px 20px 5px rgba(0,0,0,0.6);
    z-index: 999;
`

export const ButtonTrashIcon = styled(MdDeleteSweep)`
    color: #fff;
    font-size: 35px;
`

export const ButtonRemoveIcon = styled(BsFillCartDashFill)`
    color: #fff;
    font-size: 32px;
`