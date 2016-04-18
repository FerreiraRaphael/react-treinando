export function alterarEstadoTodo(id){
	return {
		type: "ALTERAR_ESTADO",
		id
	}
}
export function novoTodo(text){
	return {
		type: "NOVO_TODO",
		todo:{
			id: new Date().getTime(),
			text,
			completo: false,
			arquivado: false
		}
	}
}