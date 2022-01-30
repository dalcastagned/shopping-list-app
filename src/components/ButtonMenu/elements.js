import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    width: 100%;
    height: 60px;
    background: #303134;
    border-bottom: 2px solid ${({$isActive}) => $isActive ? '#fff' : '#757B80'};
    text-decoration: none;

`

export const ContainerInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    gap: 5px;

    h2{
        color: ${({$isActive}) => $isActive ? '#fff' : '#757B80'};
        font-size: 15px;
    } 
    
    p{
        color: ${({$isActive}) => $isActive ? '#fff' : '#757B80'};
        font-size: 15px;
    }
`