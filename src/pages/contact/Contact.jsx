import SocialLinks from '../../components/footer/SocialLinks';
import { Form, Formik } from 'formik';
import FormikControl from '../../components/formikElements/FormikControl';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    textarea: ''
  };
  return (
    <>
      <div className="min-h-screen bg-black/30 text-white rounded-2xl  backdrop-blur-[1px]  px-6 py-20 flex flex-col items-center">
        <div className="max-w-3xl w-full text-center mb-12">
          <h2 className="text-5xl text-glow-white font-semibold  mb-4">Let's stay in <br/>  touch</h2>
          <p className="text-gray-400">
            Feel free to reach out through the form below, or contact me directly via social platforms. If you have any
            suggestions & feedbacks , I’d love to hear them too.
          </p>
        </div>
        <div className="">
          <SocialLinks className={' gap-8'} size="text-6xl" />
        </div>
        <div className="mt-20 md:w-1/2 bg-[#141417] p-8 rounded-2xl shadow-lg shadow-black/40 ">
          <h1 className="text-3xl text-glow-white text-center font-bold mb-4">Contact Me</h1>
          <p className="text-gray-300 text-lg text-center mb-10">You can also send me a message directly from here.</p>
          <Formik initialValues={initialValues} onSubmit={onsubmit}>
            {formik => {
              return (
                <Form className="space-y-5">
                  <FormikControl control="input" name="name" type="text" label="Name" {...formik} />
                  <FormikControl control="input" name="email" type="email" label="Email" />
                  <FormikControl control="textarea" name="bio" label="message" />
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition">
                    Send Message
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Contact;
