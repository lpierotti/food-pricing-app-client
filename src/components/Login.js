import React from 'react'
import AuthAdapter from '../adapters/authAdapter'

class Login extends React.Component {
	

	render(){
		return (
			<form>
				<input type="text" placholder="email" />
				<input type='password' placholder="password" />
			</form>
		)
	}
}

export default Login