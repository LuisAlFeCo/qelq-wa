
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Starter from './entries/starter.jsx';
import Guest from './entries/guest.jsx';
import Basic from './entries/basic.jsx';
import School from './entries/school.jsx';

import LoaderModal from '../components/modal/loader/loader-modal.component';
import ErrorModal from '../components/modal/error/error-modal.component';

import User from '../gears/user';

/****************************************************************************************/

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.query = gql`
			query q {
				user {
					userName displayName email roles status
				}
			}
		`;

		window.user =  new User({ history: props.history });
	}

	render() {
		let user = window.user;

		return (
			<Query query={this.query} errorPolicy="all">
				{({ loading, error, data, refetch }) => {
					if(loading) return (
						<LoaderModal visible={true}/>
					);
					if(error) return (
						<ErrorModal data={error} accept={false}/>
					);

					user.set(data.user, refetch);

					/*if(user.isUnverified()) return (
						<Switch>
							<Route exact={true} path="/" component={Guest}/>
							<Route exact={true} path="/iniciar" component={Starter}/>
							<Route exact={true} path="/registro/verificar" component={Starter}/>
							<Route exact={true} path="/registro/verificar/:hash" component={Starter}/>
							<Redirect from="/registro" to="/registro/verificar"/>
							<Redirect from="/cuenta/perfil" to="/registro/verificar"/>
						</Switch>
					);*/
					if(user.isGuest()) return (
						<Switch>
							<Route exact={true} path="/" component={Guest}/>
							<Route exact={true} path="/iniciar" component={Starter}/>
							{/* <Route exact={true} path="/registro" component={Starter}/>
							<Route exact={true} path="/registro/verificar/:hash" component={Starter}/> */}
							<Redirect from="/registro/verificar" to="/registro"/>
							<Redirect from="/cuenta/perfil" to="/iniciar"/>
							<Route component={Guest}/>
						</Switch>
					);
					if(user.isAuthorized()) return (
						<Switch>
							<Route path="/ue/:ue" component={School}/>
							<Route path="/" component={Basic}/>
						</Switch>
					);
					return (<ErrorModal data="No se encontró ningún rol apropiado para el usuario" accept={false}/>);
				}}
			</Query>
		);
	}
}

/****************************************************************************************/

export default withRouter(Main);

/****************************************************************************************/
