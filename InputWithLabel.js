import React, { useEffect, useRef, useState } from 'react';

const InputWithLabel = props => ({ 
	id, 
	children, 
	type="text", 
	value, 
	onInputChange,
	isFocused,
}) => {
	const [clickAutoFocus, setClickAutoFocus] = useState(false);
	const inputRef = useRef();

	useEffect(() => {
		if (inputRef.current && clickAutoFocus) {
			inputRef.current.focus();
		}
	}, [clickAutoFocus]);

	return (
		<>
			<label htmlFor={id}>{children}</label>
				<input
					ref={inputRef}
					id={id}
					type={type} 
					value={value} 
					onChange={onInputChange} 
					autoFocus={isFocused ? true : false}
				/>
				<button onClick={() => setClickAutoFocus(true)}>
					Click to Autofocus
				</button>
			</>
	);
};

export default InputWithLabel;