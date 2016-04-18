import React,{PropTypes} from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'

const TodosList = ({todos, onTodoClick}) => (
	<ul>
	{ 
		todos.map(todo => 
			<Todo key={todo.id}
			{...todo}
			onClick={() => onTodoClick(todo.id)} />
			)
		}
		</ul>
		)

export default TodosList