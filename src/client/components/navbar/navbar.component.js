
/****************************************************************************************

	Copyright (c) 2018, SAM.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';

import {
	navbarView, navMenuView, navLinkView, navBrandView,
	navUserView, navUserLinkView, navUserActionView,
	navDropdownView, navDropdownLinkView
} from './navbar.view.jsx';

/****************************************************************************************/

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return navbarView.call(this);
	}
}

/****************************************************************************************/

class NavMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return navMenuView.call(this);
	}
}

/****************************************************************************************/

class NavLink extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return navLinkView.call(this);
	}
}

/****************************************************************************************/

class NavBrand extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return navBrandView.call(this);
	}
}

/*NavBrand.propTypes = {
	logoComponent: PropTypes.element.isRequired
};*/

/****************************************************************************************/

class NavUser extends React.Component {
	constructor(props) {
		super(props);

		this.status = {
			hideOnClick: true
		};
	}

	componentDidMount() {
		let uopt = this.refs.userOptions.classList;
		window.addEventListener('click', ()=>{
			if (uopt.contains('nav-user-dropdown-show') && this.status.hideOnClick) {
				uopt.remove('nav-user-dropdown-show');
			}
			this.status.hideOnClick = true;
		});
	}

	onSummary() {
		this.status.hideOnClick = false;
		this.refs.userOptions.classList.toggle('nav-user-dropdown-show');
	}

	render() {
		return navUserView.call(this);
	}
}

/****************************************************************************************/

class NavUserLink extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return navUserLinkView.call(this);
	}
}

/****************************************************************************************/

class NavUserAction extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return navUserActionView.call(this);
	}
}

/****************************************************************************************/

class NavDropdown extends React.Component {
	constructor(props) {
		super(props);

		this.status = {
			hideOnClick: true
		};
	}

	componentDidMount() {
		let uopt = this.refs.options.classList;
		window.addEventListener('click', ()=>{
			if (uopt.contains('nav-dropdown-menu-show') && this.status.hideOnClick) {
				uopt.remove('nav-dropdown-menu-show');
			}
			this.status.hideOnClick = true;
		});
	}

	onDropdown() {
		this.status.hideOnClick = false;
		this.refs.options.classList.toggle('nav-dropdown-menu-show');
	}

	render() {
		return navDropdownView.call(this);
	}
}

/****************************************************************************************/

class NavDropdownLink extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return navDropdownLinkView.call(this);
	}
}

/****************************************************************************************/

export {
	Navbar, NavMenu, NavLink, NavBrand,
	NavUser, NavUserLink, NavUserAction,
	NavDropdown, NavDropdownLink
};

/****************************************************************************************/
