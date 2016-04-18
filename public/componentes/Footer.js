import React from "react"
import LinkFiltro from "../Containers/LinkFiltro"

const Footer = () => (
	<p>
	Filtro:
	{" "}
	<LinkFiltro filtro="MOSTRAR_TODOS">
	Todos
	</LinkFiltro>
	{" "}
	<LinkFiltro filtro="MOSTRAR_INCOMPLETOS">
	Incompletos
	</LinkFiltro>
	{" "}
	<LinkFiltro filtro="MOSTRAR_COMPLETOS">
	Completos
	</LinkFiltro>
	{" "}
	<LinkFiltro filtro="MOSTRAR_ARQUIVADOS">
	Arquivo
	</LinkFiltro>
	</p>
	)

export default Footer