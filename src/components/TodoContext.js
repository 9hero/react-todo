import React, { createContext, useContext, useReducer, useRef } from 'react'

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트',
    done: true,
  },
  {
    id: 3,
    text: '컨텍스트 만들기',
    done: true,
  },
  {
    id: 4,
    text: '기능 구현',
    done: false,
  },
]
/*
    CREATE
    TOGGLE
    REMOVE
*/

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo)
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      )
    case 'REMOVE':
      return state.filter((todo) => action.id !== todo.id)
    default:
      throw new Error(`Uncatched err`)
  }
}

const TodoStateContext = createContext()
const TodoDispatchContext = createContext()
const TodoNextIdContext = createContext() // 렌더링 불필요한 변수값 필요시

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos)
  const nextId = useRef(5)
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export function useTodoState() {
  const context = useContext(TodoStateContext)
  if (!context) {
    throw new Error('err')
  }
  return context
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext)
  if (!context) {
    throw new Error('err')
  }
  return context
}

// 디스패치랑 스테이트 같은 컨텍스트 넣으면,
// 스테이트 업데이트시에 디스패치만 사용하는 컴포넌트도 같이 업데이트 됨.

export function useNextId() {
  const context = useContext(TodoNextIdContext)
  if (!context) {
    throw new Error('err')
  }
  return context
}
