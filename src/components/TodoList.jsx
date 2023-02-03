import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
const ListBLock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    
`   
function TodoList() {
    return (
        
        <ListBLock>
            <TodoItem text={"플젝생성"} done={true}/>
            <TodoItem text={"1"} done={true}/>
            <TodoItem text={"23432"} done={false}/>
            <TodoItem text={"ggggg"} done={true}/>
        </ListBLock>
    );
}

export default TodoList;