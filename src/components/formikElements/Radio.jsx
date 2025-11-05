import { FastField, ErrorMessage,  } from 'formik';
import { Fragment } from 'react';

const Radio = props => {
	const { name, option, label } = props;

	return (
		<div className="relative w-3/4">
			<label className="text-gray-500 pe-6 " htmlFor={name}>
				{label}
			</label>
			<FastField name={name} id={name}>
        {({ field, form }) => (
          <div className="flex space-x-6">
            {option.map(opt => (
              <label
                key={opt.id}
                className="flex items-center space-x-1 cursor-pointer"
              >
                <input
                  type="radio"
                  {...field}
                  value={opt.id}
                  checked={field.value == opt.id}
                  onChange={() => form.setFieldValue(name, opt.id)}
                  className="text-indigo-600 h-5 w-5 "
                />
                <span className="text-gray-700">
                  {opt.value}
                </span>
              </label>
            ))}
          </div>
        )}
      </FastField>


			<ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1 text-right" />
		</div>
	);
};

export default Radio;
