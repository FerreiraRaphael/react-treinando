import React from "react"

const Link = ({ativo, children, onClick}) => {
	if(ativo)
		return (
			<span>{children}</span>
			)
	return (
		<a
		href="#"
		onClick={(e)=>{
					e.preventDefault();
					onClick();
				}}
		>
		{children}
		</a>
		)
}

export default Link