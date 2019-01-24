
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import IconBriefcase from '../../../both/components/icons/icon-briefcase.jsx';

/****************************************************************************************/

function profileView() {
	let user = window.user;

	return (
		<div className="container profile">
			<div className="row">
				<div className="col s12 m4 l3 profile-user-summary">
					<div className="row">
						<div className="col s4 m12 profile-user-picture-wrapper">
							<img src="/images/user.png"/>
						</div>
						<div className="col s8 m12 profile-user-info-wrapper">
							<div>
								<h4>{user.displayName}</h4>
								<div>
									<span>{user.userName}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col s12 m8 l9">
					<Query query={this.query}>
						{({ loading, error, data }) => {
							if(loading) return (<div>Loading...</div>);
							if(error) return (<div>Error! {error.message}</div>);

							return (
								<div className="profile-user-options">
									<div className="profile-user-opt-title">
										<h5>Unidades Educativas</h5>
									</div>
									<div className="profile-user-school-list">
										{
											data.membershipSchools.map((eu, i) => (
												<div className="profile-user-school-list-item" key={i}>
													<div className="profile-user-school-list-item-picture">
														<img src="/images/school.png"/>
													</div>
													<div>
														<Link to={`/ue/${eu.identifier}`}>{eu.name}</Link>
														<p>Tienes rol de: {eu.userRole}</p>
													</div>
												</div>
											))
										}
									</div>
								</div>
							);
						}}
					</Query>
				</div>
			</div>
		</div>
	);
}

/****************************************************************************************/

export default profileView;

/****************************************************************************************/
