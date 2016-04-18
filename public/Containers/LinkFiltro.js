import React from "react"
import {connect} from "react-redux"
import {mudancaDeFiltro} from "../acoes/filtro"
import Link from "../componentes/Link"

const mapStateToPros = (state, ownProps) => {
	return {
		ativo: ownProps.filtro === state.filtro
	}
}

const mapDispatchToPros = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(mudancaDeFiltro(ownProps.filtro))
		}
	}
}

const LinkFiltro = connect(mapStateToPros, mapDispatchToPros)(Link)

export default LinkFiltro