  
var CommentForm = React.createClass({
	getInitialState() {
		return {author:'', text:''}
	},
	handleAuthorChange(e){
		var author = e.target.value;
		this.setState({author});
	},
	handleTextChange(e){
		var text = e.target.value;
		this.setState({text});
	},
	handleFormSubmit(e){
		e.preventDefault();
		var author = this.state.author;
		var text = this.state.text;
		if(!author || !text) return;
		this.props.onCommentSubmit({
			author: author,
			text: text
		})
		this.setState({text:'',author:''});
	},
	render() {
		return (
			<form className="comment-form" onSubmit={this.handleFormSubmit}>	
			<input 
			type="text"
			placeholder="Seu nome"
			value={this.state.author}
			onChange={this.handleAuthorChange}/>
			<br/>
			<input 
			type="text"
			placeholder="Seu comentario"
			value={this.state.text}
			onChange={this.handleTextChange}/>
			<br/>
			<input type="submit" value="Post"/>
			</form>
			);
	}
})

var CommentList = React.createClass({
	render() {
		var commentNodes = this.props.data;
		if(typeof commentNodes === 'object')
			commentNodes = commentNodes.map(function(comment) {
				return (
					<Comment author={comment.author} key={comment.id}>
					{comment.text}
					</Comment>
					);
			});
		return (
			<div className="comment-list">
			{commentNodes}
			</div>
			);
	}
})

var Comment = React.createClass({
	rawMarkup() {
		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
		return { __html: rawMarkup};
	},
	render() {
		return (
			<div className="comment">
			<h2 className="nome-author">
			{this.props.author}
			</h2>
			<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
			);
	}
})

var CommentBox = React.createClass({
	carregarComentarios(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({data})
			}.bind(this),
			error: function(xhr,status,err){
				console.log('deu ruim galera');
				console.log(this.props.url, status, err.toString());
			}.bind(this)
		})
	},
	handleCommentSubmmit(comment){
		var comments = this.state.data;
		comment.id = Date.now();
		var newComments = comments.concat([comment]);
		this.setState({data: newComments});
		$.ajax({
			url:this.props.url,
			dataType: 'json',
			cache: false,
			type:'POST',
			data: comment,
			success:function(data){
				this.setState({data});
			}.bind(this),
			error: function(xhr,status,err){
				this.setState({data: comments});
				console.log(this.props.url, status, err.toString());
			}.bind(this)
		})
	},
	componentDidMount(){
		this.carregarComentarios();
		setInterval(this.carregarComentarios, this.props.intervalo);
	},
	getInitialState(){
		return {data:[]};
	},
	render() {
		var state = this.state.data;
		if(this.state.data.length === 0)
			state = 'Sem comentarios ...'
		return (
			<div className="commentBox">
			<h1>ALO MUNDÃO, eu sou uma caixa de comentarios</h1>
			<CommentList data={state} />
			<CommentForm onCommentSubmit={this.handleCommentSubmmit}/>
			</div>
			);
	}	
});

ReactDOM.render(
	<CommentBox url='/api/comments' intervalo={2000}/>,
	document.getElementById('content')
	);