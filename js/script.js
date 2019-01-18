class Title extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<Title title="formularz"/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('App'));