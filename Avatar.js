var Avatar = React.createClass({
	getDefaultProps: function(){
		return {
			path:'https://a.disquscdn.com/uploads/users/10381/5805/avatar92.jpg?1437158490'
		}
	},
	render:function(){
		return (
			<div>
			<a href={this.props.path}>
			<img src={this.props.path} />
			</a>
			</div>
			);
	}
});
ReactDOM.render(<Avatar path="http://s3.amazonaws.savoir.com.br/cea.com.br/imagem/cadastrocqlv/imagem/cadastrocqlv-53440.jpg" />,document.body);
