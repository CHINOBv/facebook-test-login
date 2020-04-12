import React from 'react';

import FacebookLogin from 'react-facebook-login';
//import GoogleLogin from 'react-google-login';

export class Login extends React.Component {
	

	render() {
	const responseFacebook = response => {
		console.log(response);
	}
		return (
			<>
				<h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

				<FacebookLogin
				appId="989551551459545" //APP ID NOT CREATED YET
				fields="name,email,picture"
				callback={responseFacebook}
				/>
			</>
		)
	}
}

export default Login