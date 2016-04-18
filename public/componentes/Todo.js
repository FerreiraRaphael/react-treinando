import React from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { alterarEstadoTodo } from 'redux'



const Todo = ({ completo, text, onClick}) => (
		<li 
		style={
			{textDecoration: completo ? "line-through" : "none"}
		}
		onClick={onClick}
		>
		{text}
		</li>
	)
	export default Todo
// 	render() {
// 		return (
	
// 			)
// 	}
// })

// const mapDispatchToProps = dispatch => {
// 	return bindActionCreators({
// 		alterarEstadoTodo
// 	},dispatch)
// }


// export default connect(mapDispatchToProps)(Todo)