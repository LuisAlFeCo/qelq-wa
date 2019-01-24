
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import gql from 'graphql-tag';

import Validator from '../../gears/validator';
import schoolRegisterView from '../../views/basic/school-register-view.jsx';

/****************************************************************************************/

class SchoolRegister extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			form: {
				isValid: false,
				validations: {}
			}
		};

		this.mutation = gql`
			mutation m($data: ISchool!) {
				createSchool(data: $data) { message }
			}
		`;
	}

	onSubmit(input, mutation, e) {
		let data = {
				identifier: input.identifier.value,
				name: input.name.value,
				registerCode: input.regCode.value
			},
			form = this.__validate(data);

		e.preventDefault();

		this.setState({ form });
		if(form.isValid)
			mutation({ variables: { data } });
	}

	render() {
		return schoolRegisterView.call(this);
	}

	__validate(data) {
		let v = Validator;

		return Validator.validate({
			name: {
				validator: v.isEmpty,
				message: 'Debes ingresar el nombre para la Unidad Educativa'
			},
			identifier: {
				validator: v.isNotAlphanumeric,
				message: 'Identificador no válido para la Unidad Educativa'
			},
			registerCode: {
				validator: v.isNotAlphanumeric,
				message: 'Código de registro no válido'
			}
		}, data);
	}
}

/****************************************************************************************/

export default SchoolRegister;

/****************************************************************************************/
