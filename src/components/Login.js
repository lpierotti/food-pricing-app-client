import React from 'react'
import AuthAdapter from '../adapters/authAdapter'
import { Form, Button, Segment } from 'semantic-ui-react'

class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			username: "",
			password: ""
		}
	}

	handleUsernameChange = (event) => {
		this.setState({username: event.target.value})
	}  

	handlePasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const userParams = {
			username: this.state.username,
			password: this.state.password
		}
		AuthAdapter.login(userParams)
			.then((user) => {
				this.setState({username: "", password: ""})
				localStorage.setItem("token", user.jwt)
				this.props.history.replace("/")
			})
		this.props.handleLoginAndSignup()
	}

	render() {
		return (
			<div className='form-container'>
				<Segment className="form-segment">
					<h2>Login</h2>
					<Form onSubmit={this.handleSubmit}>
						<Form.Input value={this.state.username} onChange={this.handleUsernameChange} type="text" placeholder="email" />
						<Form.Input value={this.state.password} onChange={this.handlePasswordChange} type='password' placeholder="password" />
						<Button>Submit</Button>
					</Form>
				</Segment>
			</div>
		)
	}
}

export default Login