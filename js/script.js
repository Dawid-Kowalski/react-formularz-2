class Title extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}


class Form extends React.Component {
	render() {
		return (
			<form>
				<label>napięcie zasialania</label>
				<select>
					<option value='1'>1</option>
					<option value='1.5'>1.5</option>
					<option value='3'>3</option>
					<option value='3.7'>3.7</option>
					<option value='4'>4</option>
					<option value='4.5'>4.5</option>
					<option value='5'>5</option>
					<option value='6'>6</option>
					<option value='9'>9</option>
					<option value='12'>12</option>
				</select>
				<label>pobór prądu</label>
				<select>
					<option value='22'>22</option>
					<option value='30'>30</option>
					<option value='35'>35</option>
					<option value='40'>40</option>
					<option value='45'>45</option>
					<option value='50'>50</option>
					<option value='60'>60</option>
					<option value='70'>70</option>
					<option value='80'>80</option>
					<option value='94'>94</option>
					<option value='100'>100</option>
					<option value='120'>120</option>
					<option value='125'>125</option>
					<option value='130'>130</option>
					<option value='150'>150</option>
					<option value='170'>170</option>
					<option value='180'>180</option>
					<option value='190'>190</option>
					<option value='200'>200</option>
					<option value='250'>250</option>
					<option value='275'>275</option>
					<option value='300'>300</option>
					<option value='350'>350</option>
					<option value='400'>400</option>
					<option value='450'>450</option>
					<option value='500'>500</option>
					<option value='550'>550</option>
					<option value='750'>750</option>
					<option value='770'>770</option>
					<option value='800'>800</option>
					<option value='1350'>1350</option>
					<option value='1850'>1850</option>
					<option value='4480'>4480</option>
				</select>
				<label>prędkość obrotowa</label>
				<select>
					<option value='12'>12</option>
					<option value='14'>14</option>
					<option value='15'>15</option>
					<option value='25'>25</option>
					<option value='30'>30</option>
					<option value='32'>32</option>
					<option value='33'>33</option>
					<option value='40'>40</option>
					<option value='45'>45</option>
					<option value='46'>46</option>
					<option value='50'>50</option>
					<option value='57'>57</option>
					<option value='60'>60</option>
					<option value='65'>65</option>
					<option value='75'>75</option>
					<option value='80'>80</option>
					<option value='85'>85</option>
					<option value='90'>90</option>
					<option value='100'>100</option>
					<option value='120'>120</option>
					<option value='130'>130</option>
					<option value='133'>133</option>
					<option value='135'>135</option>
					<option value='140'>140</option>
					<option value='150'>150</option>
					<option value='160'>160</option>
					<option value='165'>165</option>
					<option value='170'>170</option>
					<option value='180'>180</option>
					<option value='185'>185</option>
					<option value='200'>200</option>
					<option value='210'>210</option>
					<option value='220'>220</option>
					<option value='225'>225</option>
					<option value='230'>230</option>
					<option value='250'>250</option>
					<option value='275'>275</option>
					<option value='285'>285</option>
					<option value='290'>290</option>
					<option value='294'>294</option>
				</select>
				<button>dodaj</button>
			</form>
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
			powerSupply: 6,
			powerConsuption: 50,
			rotationSpeed: 10300
		},

	]



	render() {
		return (
			<div>
				<Title title="formularz"/>
				<Form />
				<MotorsList motors={this.motors} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('App'));