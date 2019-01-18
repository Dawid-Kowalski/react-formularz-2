class Title extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}

class Motor extends React.Component {
	render() {
		return (
			<tbody>
				{this.props.motors.map(motor =>
					<tr>
						<td>{motor.powerSupply}</td>
						<td>{motor.powerConsuption}</td>
						<td>{motor.rotationSpeed}</td>
					</tr>
				)}
			</tbody>
		)
	}
}

class MotorsList extends React.Component {
	render() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<td>napięcie zasialania</td>
							<td>pobór prądu</td>
							<td>prędkość obrotowa</td>
						</tr>
					</thead>
					<Motor motors={this.props.motors} />
				</table>
			</div>
		)
	}
}


class App extends React.Component {

	motors = [
		{
			id: 1,
			powerSupply: 5,
			powerConsuption: 180,
			rotationSpeed: 80
		},
		{
			id: 2,
			powerSupply: 6,
			powerConsuption: 30,
			rotationSpeed: 90
		},
		{
			id: 3,
			powerSupply: 7,
			powerConsuption: 50,
			rotationSpeed: 10300
		},

	]



	render() {
		return (
			<div>
				<Title title="formularz"/>
				<MotorsList motors={this.motors} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('App'));