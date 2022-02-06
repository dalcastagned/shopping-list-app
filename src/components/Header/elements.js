import styled from "styled-components";
import { MdLogout } from "react-icons/md";

export const Container = styled.header`
    background: #303134;

`

export const ContainerHeader = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr 60px;
    height: 60px;

    h1 {
            text-align: center;
            color: #fff;
            font-size: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
`

export const Logout = styled(MdLogout)`
    height: 100%;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: #fff;
`