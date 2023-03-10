import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import styled, { css } from "styled-components";


const CircleButton = styled.button`
    background-color: #38d9a9;
    &:hover{
        background: #63e6be;
    }
    &:active {
        background-color: #20c997;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%,50%);

    font-size: 60px;
    color: white;
    border-radius:40px;

    border: none;
    outline: none;
    transition: 0.1s all ease-in;
    ${props => props.open && css`
        background-color: #ff6b6b;
        :hover{
            background: #ff8787;
        }
        :active{
            background-color: #fa5252;
        }

        transform: translate(-50%,50%) rotate(45deg);
    `}
`
const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`
const InsertForm = styled.div`
    background-color: #e0e0e0;
    padding: 32px;
    padding-bottom: 72px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`
const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: navajowhite;
    font-size: 18px;
    box-sizing: border-box;
`

function TodoCreate() {
    const [open,setOpen] = useState(false)
    const onToggle = ()=>{
        setOpen(!open)
    }

    
    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm>
                        <Input autoFocus placeholder="할일을 적어"/>
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd></MdAdd>
            </CircleButton>
        </>
    );
}

export default TodoCreate;