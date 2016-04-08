 var TaskList = React.createClass({
 	render: function(){
 		var mostrarItems = (tarefa) => <li>{tarefa}</li>
 		return (
 				<ul>
 					{this.props.tarefas.map(mostrarTarefas)}
 				</ul>
 			)
 	}
 })

