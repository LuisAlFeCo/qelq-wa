

/****************************************************************************************

	Copyright (c) 2018, SAM.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';

/****************************************************************************************/

function navbarView() {
	return (
		<nav>
			<div className="nav-wrapper">
				{this.props.children}
			</div>
		</nav>
	);
}

/****************************************************************************************/

function navMenuView() {
	return (
		<ul className="nav-menu">
			{this.props.children}
		</ul>
	);
}

/****************************************************************************************/

function navLinkView() {
	return (
		<li>
			<div className="nav-link">
				<Link to={this.props.to}>{this.props.text || this.props.children}</Link>
			</div>
		</li>
	);
}

/****************************************************************************************/

function navBrandView() {
	let LogoComponent = this.props.logoComponent;
	return (
		<li>
			<div className="nav-brand">
				<LogoComponent className={`nav-brand-logo ${this.props.className}`}/>
			</div>
		</li>
	);
}

/****************************************************************************************/

function navUserView() {
	let pic = this.props.user.picture || '/images/user.png';

	return (
		<li>
			<div className="nav-user">
				<summary className="nav-user-wrapper" onClick={this.onSummary.bind(this)}>
					<img src={pic}/>
				</summary>
				<div ref="userOptions" className="nav-user-dropdown">
					<div className="nav-user-header">
						<div>
							<img src={pic} className="nav-user-icon"/>
						</div>
						<div>
							<div className="nav-user-name"><span>{this.props.user.displayName}</span></div>
							<div className="nav-user-email"><span>{this.props.user.email}</span></div>
						</div>
					</div>

					<div >
						{this.props.children}
					</div>
				</div>
			</div>
		</li>
	);
}

/****************************************************************************************/

function navUserLinkView() {
	return (
		<Link className="nav-user-link" to={this.props.to}>
			<span>{this.props.text}</span>
		</Link>
	);
}

function navUserActionView() {
	return (
		<a className="nav-user-link" onClick={this.props.onClick}>
			<span>{this.props.text}</span>
		</a>
	);
}

function navDropdownView() {
	let Icon = this.props.iconComponent;
	return (
		<li>
			<div className="nav-dropdown">
				<summary className="nav-dropdown-wrapper" onClick={this.onDropdown.bind(this)}>
					<div>
						<Icon className="nav-dropdown-icon"/>
					</div>
				</summary>
				<div ref="options" className="nav-dropdown-menu" style={{whiteSpace: 'nowrap'}}>
					<div >
						{this.props.children}
					</div>
				</div>
			</div>
		</li>
	);
}

/****************************************************************************************/

function navDropdownLinkView() {
	return (
		<Link className="nav-dropdown-link" to={this.props.to}>
			<span>{this.props.text}</span>
		</Link>
	);
}

/****************************************************************************************/

export {
	navbarView, navMenuView, navLinkView, navBrandView,
	navUserView, navUserLinkView, navUserActionView,
	navDropdownView, navDropdownLinkView
};

/****************************************************************************************/
