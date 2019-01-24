
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import { withApollo } from 'react-apollo';

import SignIn from '../../modules/account/signin';
//import SignUp from '../../modules/account/signup';
//import VerifyEmail from '../../modules/account/verify-email';

/****************************************************************************************/

class Starter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Switch>
				<Route exact={true} path="/iniciar" component={SignIn}/>
				{/* <Route exact={true} path="/registro" component={withApollo(SignUp)}/>
				<Route exact={true} path="/registro/verificar" component={VerifyEmail}/>
				<Route exact={true} path="/registro/verificar/:hash" component={VerifyEmail}/> */}
			</Switch>
		);
	}
}

/****************************************************************************************/

export default Starter;

/****************************************************************************************/
