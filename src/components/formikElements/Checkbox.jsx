import { FastField } from 'formik';
import React, { Fragment } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';

const Checkbox = props => {
	const { name, label, option } = props;
	return (
		<div>
			<label className="text-gray-500 pe-6 " htmlFor={name}>
				{label}
			</label>
			<FastField name={name} id={name}>
				{({ field }) => {
					return option.map(i => (
						<Fragment key={i.id}>
							<label dir="ltr" className="mx-2  font-light text-gray-500  cursor-pointer" htmlFor={i.id} >
								<div className="relative w-5 h-5 inline-block align-middle mx-1  ">
									<input
										type="checkbox"
										name={i.id}
										id={i.id}
										{...field}
										value={i.value}
										checked={field.value.includes(i.value)}
										className="relative peer appearance-none w-5 h-5 border-1 border-gray-500 rounded checked:bg-indigo-600 transition-colors duration-300  checked:border-0 focus:ring-4 focus:ring-indigo-500/30 focus:outline-none"
									/>
									<FaCheck
										className={` absolute inset-0 text-white text-xs m-auto transition-all duration-300 
                           peer-checked:opacity-100 peer-checked:scale-150 peer-checked:bg-indigo-60   peer-checked:p-0.5
                          opacity-0 scale-500 
													`}
									/>
								</div>

								<span>{i.value}</span>
							</label>
						</Fragment>
					));
				}}
			</FastField>
		</div>
	);
};

export default Checkbox;
