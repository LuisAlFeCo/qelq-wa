
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/*
import School from '../../modules/professional/school';
import StudentsIndex from './school/students/students-index';
import StudentsInsert from './school/students/students-insert';
*/
import {
	Navbar, NavMenu, NavLink, NavBrand,
	NavUser, NavUserLink, NavUserAction,
	NavDropdown, NavDropdownLink
} from '../../../components/navbar/navbar.component';

import IconMain from '../../../../both/components/icons/icon-main.jsx';
import IconMenu from '../../../../both/components/icons/icon-menu.jsx';
import IconPlus from '../../../../both/components/icons/icon-plus.jsx';

/****************************************************************************************/

class TeacherIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	onLogout() {
		window.user.logout('/iniciar');
	}

	render() {
		let user = window.user,
			ue = this.props.school;
        
		return (
			<div className="workspace">
				<header>
					<Navbar>
						<NavMenu>
							<NavBrand logoComponent={IconMain}></NavBrand>
							<NavLink to="/">Inicio</NavLink>
						</NavMenu>
						<NavMenu>
							<NavDropdown iconComponent={IconPlus}>
								<NavDropdownLink text="Registrar Nueva Unidad Educativa" to="/nuevo"/>
							</NavDropdown>
							<NavDropdown iconComponent={IconMenu}>
								<NavDropdownLink text="Cursos" to={`/ue/${ue.schoolID}/profesor/cursos`}/>
							</NavDropdown>
							<NavUser user={user}>
								<NavUserLink text="Perfil" to="/cuenta/perfil"/>
								<NavUserAction text="Cerrar sesión" onClick={this.onLogout.bind(this)}/>
							</NavUser>
						</NavMenu>
					</Navbar>
				</header>
				<main>
					{/*<Switch>
						<Route exact={true} path="/ue/:ue" component={School}/>
						<Route exact={true} path="/ue/:ue/estudiantes" component={StudentsIndex}/>
						<Route exact={true} path="/ue/:ue/estudiantes/nuevo" component={withApollo(StudentsInsert)}/>
					</Switch>*/}
				</main>
			</div>
		);
	}
}

/****************************************************************************************/

export default TeacherIndex;

/****************************************************************************************/
