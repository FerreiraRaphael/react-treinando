import React from "react"
import {connect} from "react-redux"
import TodosList from "../componentes/TodosList"
import {alterarEstadoTodo} from "../acoes/todo"

const getTodosVisiveis = (todos, filtro) => {
	switch(filtro){
		case "MOSTRAR_COMPLETOS":
		return todos.filter((todo)=>{return todo.completo})
		case "MOSTRAR_INCOMPLETOS":
		return todos.filter((todo)=>{return !todo.completo})
		case "MOSTRAR_ARQUIVADOS":
		return todos.filter((todo)=>{return todo.arquivado})
		default:
		return todos
	}
}

const mapStateToPros = (state) =>{
	return {
		todos: getTodosVisiveis(state.todo.todos, state.filtro),
		filtro: state.filtro
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {dispatch(alterarEstadoTodo(id))}
	}
}

export default connect(mapStateToPros, mapDispatchToProps)(TodosList)