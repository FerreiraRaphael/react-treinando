export const filtro = (state="MOSTRAR_TODOS", action) => {
	switch(action.type){
		case"MUNDAÇA_DE_FILTRO":
		return action.filtro
	}
	return state
}