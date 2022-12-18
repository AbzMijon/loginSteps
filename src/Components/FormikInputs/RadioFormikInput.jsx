import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

const StyledLoginFormikInput = styled.div `
	.field {
		margin-bottom: 5px;
	}
	.field__error {
		color: red;
		text-align: center;
	}
`

function LoginFormikInput(props) {
	const [field, meta, helpers] = useField(props.name);
	return (
		<StyledLoginFormikInput>
			<div className='field'>
				<h5 className='login__title-field'>{props.name}</h5>
				<input {...props} {...field} />
				{meta.touched && meta.error && (
					<p className='field__error'>{meta.error}</p>
				)}
			</div>
		</StyledLoginFormikInput>
	);
}

export default LoginFormikInput;