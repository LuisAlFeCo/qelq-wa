
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
	Navbar, NavMenu, NavLink, NavBrand,
	NavUser, NavUserLink, NavUserAction,
	NavDropdown, NavDropdownLink
} from '../../../components/navbar/navbar.component';

import IconMain from '../../../../both/components/icons/icon-main.jsx';
import IconMenu from '../../../../both/components/icons/icon-menu.jsx';
import IconPlus from '../../../../both/components/icons/icon-plus.jsx';

import SchoolOwnerHome from '../../../modules/school/owner/school-owner-home';
import StudentsIndex from '../../../modules/school/owner/students/students-index';
import StudentsInsert from '../../../modules/school/owner/students/students-insert';
import StudentsUpdate from '../../../modules/school/owner/students/students-update';
import TeachersIndex from '../../../modules/school/owner/teachers/teachers-index';
import NoMatch from '../../../modules/stage/errors/no-match';

/****************************************************************************************/

function schoolOwnerIndexView() {
	let user = window.user,
		schoolId = this.props.schoolId;
	
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
							<NavDropdownLink text="Estudiantes" to={`/ue/${schoolId}/estudiantes`}/>
							<NavDropdownLink text="Docentes" to={`/ue/${schoolId}/docentes`}/>
							<NavDropdownLink text="Materias" to={`/ue/${schoolId}/materias`}/>
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
					<Route exact={true} path="/ue/:ue" component={SchoolOwnerHome}/>

					<Route exact={true} path="/ue/:ue/estudiantes" component={StudentsIndex}/>
					<Route exact={true} path="/ue/:ue/estudiantes/nuevo" component={StudentsInsert}/>
					<Route exact={true} path="/ue/:ue/estudiantes/:rude" component={StudentsUpdate}/>

					<Route exact={true} path="/ue/:ue/docentes" component={TeachersIndex}/>

					<Route component={NoMatch}/>
				</Switch>
			</main>
		</div>
	);
}

/****************************************************************************************/

export default schoolOwnerIndexView;

/****************************************************************************************/
