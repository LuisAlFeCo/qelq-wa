
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import isEmpty from 'validator/lib/isEmpty';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isEmail from 'validator/lib/isEmail';
import equals from 'validator/lib/equals';

import moment from 'moment';

/****************************************************************************************/

class Validator {
	constructor() {
	}

	static isEmpty(d) {
		return isEmpty(d);
	}

	static isMinor(params) {
		return params.a < params.b;
	}

	static isNotDate(d) {
		let date = moment(d, 'DD/MM/YYYY');
		return !date.isValid();
	}

	static isNotAlphanumeric(d) {
		return !isAlphanumeric(d);
	}

	static isNotEmail(d) {
		return !isEmail(d);
	}

	static isNotEquals(params) {
		return !equals(params.a, params.b);
	}

	static isIntLessThan(params) {
		return params.a < params.b;
	}

	static validate(schema, data) {
		let v = { }, isValid = true;

		for (const key in schema) {
			if (schema.hasOwnProperty(key)) {
				const e = schema[key];
				if(e.validator(e.params || data[e.field || key] || '')) {
					v[e.field || key] = e.message; isValid = false;
				}
			}
		}

		return {
			isValid,
			validations: v
		};
	}
}

/****************************************************************************************/

export default Validator;

/****************************************************************************************/
