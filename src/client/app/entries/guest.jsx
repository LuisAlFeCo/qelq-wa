
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Navbar, NavMenu, NavBrand, NavLink } from '../../components/navbar/navbar.component';
import IconMain from '../../../both/components/icons/icon-main.jsx';

import NoMatch from '../../modules/stage/errors/no-match';
import GuestHome from '../../modules/guest/guest-home';

/****************************************************************************************/

class Guest extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="workspace">
				<header>
					<Navbar>
						<NavMenu>
							<NavBrand logoComponent={IconMain}/>
							<NavLink to="/">Inicio</NavLink>
						</NavMenu>
						<NavMenu>
							<NavLink text="Iniciar sesión" to="/iniciar"></NavLink>
						</NavMenu>
					</Navbar>
				</header>
				<main>
					<Switch>
						<Route exact={true} path="/" component={GuestHome}/>

						<Route component={NoMatch}/>
					</Switch>
				</main>
				<footer>
				</footer>
			</div>
		);
	}
}

/****************************************************************************************/

export default Guest;

/****************************************************************************************/
