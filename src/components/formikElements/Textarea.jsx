import { FastField, ErrorMessage, useFormikContext } from 'formik';
import { Fragment, useEffect, useState } from 'react';

const Input = props => {
	const { name, type, label } = props;

	const { values } = useFormikContext();

	const [hasValue, setHasValue] = useState(false);

	useEffect(() => {
		setHasValue(!!values[name]);
		// console.log(values[name]);
	}, [values[name]]);

	return (
		<Fragment>
			<div className="relative   ">
				<FastField
					name={name}
					id={name}
					as='textarea'
					className="peer text-gray-300 h-32  w-full bg-transparent outline-none px-4 py-2 rounded-xl border-1 focus:border-2 border-[#4070f4] focus:shadow-md text-right"
				/>

				<label
					htmlFor={name}
					className={`absolute left-4 top-1/6 -translate-y-1/2  bg-[#141417] px-2 text-lg font-light text-gray-500 transition-all duration-300 noSelect outline-none 
					peer-focus:top-0 peer-focus:left-3 peer-focus:text-sm peer-focus:text-[#4070f4] ${
						hasValue ? ' !top-0 !left-3 !text-sm ! !text-[#4070f4] ' : ''
					}
					`}>
					{label}
				</label>
			</div>
			<ErrorMessage name={name} component="span" className="text-red-500 text-sm !mb-2 !m-0 text-right" />
		</Fragment>
	);
};

export default Input;
