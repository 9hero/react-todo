import React from "react";
import {MdDone, MdDelete} from 'react-icons/md'
import styled, { css } from "styled-components";

const Remove = styled.div`
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: red;
    }
`
const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px gray solid;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${(props)=>{
        return props.done &&
        css`
            border: 1px solid #38d9a9;
            color: #38d9a9;
        `
    }}
`
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props =>
        (props.done && css`
            color: #ced4da;
        `)
    }
`

const TodoItemBlock = styled.div`
    display: flex;
    padding: 12px 0px;
    /* overflow-y: auto; */
    &:hover{
        ${Remove} {
            opacity: 1;
        }    
}
    
`
function TodoItem({id,done,text}) {
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone/>}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;