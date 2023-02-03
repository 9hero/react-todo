import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { TodoProvider } from './components/TodoContext'

import TodoCreate from './components/TodoCreate'
import TodoHead from './components/TodoHead'
import TodoList from './components/TodoList'
import TodoTemplete from './components/TodoTemplete'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9ecef;
  }
`

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplete>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplete>
    </TodoProvider>
  )
}

export default App
