import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {render} from 'react-dom'
import {novoTodo} from '../acoes/todo'

let Input = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(novoTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(Input)
