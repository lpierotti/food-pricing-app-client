import React from 'react'
import AuthAdapter from '../adapters/authAdapter'

class Signup extends React.Component {
	constructor() {
		super()
		this.state = {
			username: "",
			password: ""
		}
	}

	handleEmailChange = (event) => {
		this.setState({username: event.target.value})
	}

	handlePasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	handleSubmit = () => {
		event.preventDefault();
		const userParams = {
			username: this.state.username,
			password: this.state.password
		}
		AuthAdapter.signup(userParams)
			.then((user) => {
				this.setState({username: "", password: ""})
				localStorage.setItem("token", user.jwt)
				this.props.history.replace("/")
			})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input value={this.state.username} onChange={this.handleEmailChange} type="text" placholder="email" />
				<input value={this.state.password} onChange={this.handlePasswordChange} type='password' placholder="password" />
				<input type="submit">Submit</input>
			</form>
		)
	}
}

export default Signup