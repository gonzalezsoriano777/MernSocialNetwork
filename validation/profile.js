import { isLength, isEmpty as _isEmpty, isURL } from 'validator';
import isEmpty from './is-empty';

export default function validateProfileInput(data){
	let errors = {};

	data.handle = !isEmpty(data.handle) ? data.handle : '';
	data.status = !isEmpty(data.status) ? data.status : '';
	data.skills = !isEmpty(data.skills) ? data.skills : '';

	if(!isLength(data.handle, { min: 2, max: 40 })) {
		errors.handle = 'Handle needs to be between 2 and 40 characters';
	}

	if(_isEmpty(data.handle)) {
		errors.handle = 'Profile handle is required';
	}

	if(_isEmpty(data.status)) {
		errors.status = 'Status field is required';
	}

	if(_isEmpty(data.skills)) {
		errors.skills = 'Skills field is required';
	}

	if(!isEmpty(data.website)) {
		if(!isURL(data.website)){
			errors.website = 'Not a valid URL';
		}
	}

	if(!isEmpty(data.youtube)) {
		if(!isURL(data.youtube)){
			errors.youtube = 'Not a valid URL';
		}
	}

	if(!isEmpty(data.twitter)) {
		if(!isURL(data.twitter)){
			errors.twitter = 'Not a valid URL';
		}
	}

	if(!isEmpty(data.facebook)) {
		if(!isURL(data.facebook)){
			errors.facebook = 'Not a valid URL';
		}
	}

	if(!isEmpty(data.linkedin)) {
		if(!isURL(data.linkedin)){
			errors.linkedin = 'Not a valid URL';
		}
	}

	if(!isEmpty(data.instagram)) {
		if(!isURL(data.instagram)){
			errors.instagram = 'Not a valid URL';
		}
	}


	return {
		errors,
		isValid: isEmpty(errors)
	};
};