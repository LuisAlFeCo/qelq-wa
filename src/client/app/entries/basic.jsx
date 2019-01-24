
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import BasicHome from '../../modules/basic/basic-home';
import Profile from '../../modules/account/profile';
import SchoolRegister from '../../modules/basic/school-register';

import {
	Navbar, NavMenu, NavBrand, NavLink,
	NavUser, NavUserLink, NavUserAction,
	NavDropdown, NavDropdownLink
} from '../../components/navbar/navbar.component';
import IconMain from '../../../both/components/icons/icon-main.jsx';
import IconPlus from '../../../both/components/icons/icon-plus.jsx';

/****************************************************************************************/

class Basic extends React.Component {
	constructor(props) {
		super(props);
	}

	onLogout() {
		window.user.logout('/iniciar');
	}

	render() {
		let user = window.user;

		return (
			<div className="workspace">
				<header>
					<Navbar>
						<NavMenu>
							<NavBrand logoComponent={IconMain}/>
							<NavLink to="/">Inicio</NavLink>
						</NavMenu>
						<NavMenu>
							<NavDropdown iconComponent={IconPlus}>
								<NavDropdownLink text="Registrar Nueva Unidad Educativa" to="/nuevo"/>
							</NavDropdown>
							<NavUser user={user}>
								<NavUserLink text="Perfil" to="/cuenta/perfil"/>
								<NavUserAction text="Cerrar sesión" onClick={this.onLogout.bind(this)}/>
							</NavUser>
						</NavMenu>
					</Navbar>
				</header>
				<main>
					<Switch>
						<Route exact={true} path="/" component={BasicHome}/>
						<Route exact={true} path="/cuenta/perfil" component={Profile}/>

						<Route exact={true} path="/nuevo" component={SchoolRegister}/>

						<Redirect from="/iniciar" to="/cuenta/perfil"/>
						<Redirect from="/registro" to="/cuenta/perfil"/>
						<Redirect from="/registro/verificar" to="/cuenta/perfil"/>
					</Switch>
				</main>
			</div>
		);
	}
}

/****************************************************************************************/

export default Basic;

/****************************************************************************************/
