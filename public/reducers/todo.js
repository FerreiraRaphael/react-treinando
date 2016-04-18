const TODOS_INITIAL = {
	todos: [],
	count: 0,
	todo: {},
	filtro: {}
}

export const todo = (state = TODOS_INITIAL, action) => {
	if(action === undefined) return state;
	let idx = 0;
	switch(action.type){
		case "ALTERAR_ESTADO":
		idx = state.todos.findIndex(todo => { return todo.id === action.id});
		if(idx > -1){
			let todoAlterado = state.todos[idx];
			todoAlterado.completo = !todoAlterado.completo
			return Object.assign({},state,{
				todo: action.todo,
				todos: [
				...state.todos.slice(0,idx),
				todoAlterado,
				...state.todos.slice(idx+1)
				] 
			})
		}
		else
			return Object.assign({},state)
		break;
		
		case "NOVO_TODO":
		return Object.assign({},state,{
			todo: action.todo,
			count: state.count+1,
			todos: [
			...state.todos,
			action.todo,
			] 
		})
		break;
	}
	return state;
}