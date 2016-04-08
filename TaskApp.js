var TaskApp = React.createClass({
	getInitialState : function(){
		return { tarefas:[] }
	},
	render:function  () {
		<div>
			<h1>Tarefas</h1>
			<TaskList tarefas={this.state.tarefas} />
		</div>
	}
})
ReactDOM.render(<TaskApp />,document.body)