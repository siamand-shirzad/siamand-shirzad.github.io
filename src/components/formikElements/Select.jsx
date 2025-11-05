import { FastField, ErrorMessage } from 'formik';

const Select = (props) => {
  const { name, educations, label } =props

  return (
    <div className="relative w-3/4">
      <FastField
      as="select"
        name={name}
        id={name}
        className="peer dark:text-gray-300 text-gray-800 w-full bg-transparent outline-none px-4 py-2 rounded-xl border focus:border-2 border-[#4070f4] focus:shadow-md text-right"
      >
        {
          educations.map((i)=>(
            <option className='' key={i.id} value={i.vlaue} >{i.value}</option>
          ))
        }
      </FastField>

      <label
        htmlFor={name}
        className="absolute  -translate-y-1/2 bg-white dark:bg-[#1e2939] px-2  font-light  transition-all duration-300
        top-0 right-3 text-sm text-[#4070f4]">
        {label}
      </label>

      <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1 text-right" />
    </div>
  );
};

export default Select;
