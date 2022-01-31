import styled from "styled-components";
import { MdDeleteSweep } from "react-icons/md";
import { BsFillCartDashFill } from "react-icons/bs";

import { MdDone, MdClose } from "react-icons/md";

export const Button = styled.button`
    height: 55px;
    width: 55px;
    background:  ${({ background }) => background};
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

const PopupContainer = styled.div`
    cursor: pointer;
    position: fixed;
    user-select: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    -webkit-tap-highlight-color: transparent;
    bottom: 40px;
    right: 20px;
`

const PopupQuestion = styled.span`
    visibility: ${({ showPopup }) => (showPopup ? 'visible' : 'hidden')};
    width: 200px;
    background: #757B80;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 15px 0;
    position: fixed;
    transform: translate(-96%, -172%);

    ::after {
        content: "";
        position: absolute;
        top: 99%;
        left: 50%;
        margin-left: 60px;
        border-width: 5px;
        border-style: solid;
        border-color: #757B80 transparent transparent transparent;
    }
`

const ContainerButtonsPopup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const ButtonPopup = styled.button`
    width: 60px;
    height: 30px;
    margin: 10px 5px 0 0;
    color: #FFF;
    background: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DoneIcon = styled(MdDone)`
    width: 20px;
    height: 20px;
`

const CancelIcon = styled(MdClose)`
    width: 20px;
    height: 20px;
`

export const Popup = ({ showPopup, functionOk, setShowPopup, text }) => (
    <PopupContainer>
        <PopupQuestion showPopup={showPopup}>{text}
            <ContainerButtonsPopup>
                <ButtonPopup onClick={() => {
                    functionOk()
                    setShowPopup(!showPopup)
                }
                }>
                    <DoneIcon />
                </ButtonPopup>
                <ButtonPopup onClick={() => { setShowPopup(!showPopup) }}>
                    <CancelIcon />
                </ButtonPopup>
            </ContainerButtonsPopup>
        </PopupQuestion>
    </PopupContainer>
)