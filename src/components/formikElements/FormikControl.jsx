import Input from './Input';
import Textarea from './Textarea';

const FormikControl = ({ control, ...rest }) =>
	control === 'textarea' ? <Textarea {...rest} /> : <Input {...rest} />;

export default FormikControl;
