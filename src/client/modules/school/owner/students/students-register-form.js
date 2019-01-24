
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import moment from 'moment';

import studentsRegisterForm from '../../../../views/school/owner/students/students-register-form.view.jsx';

import Validator from '../../../../gears/validator';

/****************************************************************************************/

class StudentsRegisterForm extends React.Component {
	constructor(props) {
		super(props);

		let dv = props.defaultValues;

		this.state = {
			input: dv ? {
				rude: dv.rude,
				ci: dv.ci,
				firstName: dv.firstName,
				lastName1: dv.lastName1,
				lastName2: dv.lastName2,
				sex: dv.sex,
				birdDate: dv.birdDate,
			} : {},
			validations: {}
		};
	}

	onSubmit(mutation, e) {
		e.preventDefault();

		let val = this.__validate(this.state.input);

		if(val.isValid) {
			this.setState({ validations: {} });
			this.props.onSubmit(this.state.input, mutation);
		} else {
			this.setState({ validations: val.validations });
		}
	}

	render() {
		return studentsRegisterForm.call(this);
	}

	__setText(field, e) {
		let input = this.state.input;
		input[field] = e.target.value;
		this.setState({ input });
	}

	__setDate(field, e) {
		let input = this.state.input;
		input[field] = moment(e.target.value).format('DD/MM/YYYY');
		this.setState({ input });
	}

	__stdDate(strDate) {
		return moment(strDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
	}

	__validate(data) {
		let v = Validator;

		return Validator.validate({
			firstName: {
				validator: v.isEmpty,
				message: 'Debes ingresar el nombre del estudiante'
			},
			lastName1: {
				validator: v.isEmpty,
				message: 'Debes ingresar el apellido paterno del estudiante'
			},
			rude: {
				validator: v.isEmpty,
				message: 'Debes ingresar el RUDE del estudiante'
			},
			sex: {
				validator: v.isEmpty,
				message: 'Debes ingresar el sexo del estudiante'
			},
			birdDate: {
				validator: v.isEmpty,
				message: 'Debes ingresar la fecha de nacimiento del estudiante'
			},
			birdValidDate: {
				validator: v.isNotDate,
				message: 'La fecha de nacimiento no es válido',
				field: 'birdDate'
			}
		}, data);
	}
}

/****************************************************************************************/

export default StudentsRegisterForm;

/****************************************************************************************/
