
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

class User {
	constructor(context) {
		this.userName = this.displayName = this.email = this.status =  '';
		this.roles = [];

		this.context = context;
	}

	set(props, refetch) {
		this.userName = props.userName;
		this.displayName = props.displayName;
		this.email = props.email;
		this.roles = props.roles;
		this.status = props.status;

		localStorage.setItem('user', JSON.stringify(props));

		this.context.refetch = refetch;
	}

	login(authorization, goto) {
		localStorage.setItem('authorization', authorization);
		this.context.refetch();
		this.context.history.push(goto);
	}

	logout(goto) {
		localStorage.removeItem('authorization');
		localStorage.removeItem('user');
		this.context.refetch();
		this.context.history.push(goto);
	}

	goto(url) {
		setTimeout(() => {
			this.context.refetch();
			this.context.history.push(url);
		}, 1);
		return null;
	}

	isGuest() {
		return this.roles ? this.roles.includes('guest') : true;
	}

	isAuthorized() {
		return this.roles ? this.roles.includes('basic') : false;
	}

	isUnverified() {
		return this.status ? (this.status === 'created') : false;
	}

	/*static get() {
		let user = localStorage.getItem('user');
		return user ? JSON.parse(user) : null;
	}*/
/*
	static 

	static 
	
	static 

	static isActive(user) {
		let u = user || User.get();
		return u ? (u.status === 'active') : false;
	}*/
}

/****************************************************************************************/

export default User;

/****************************************************************************************/
