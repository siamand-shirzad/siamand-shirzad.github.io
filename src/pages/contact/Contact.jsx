import SocialLinks from '../../components/footer/SocialLinks';
import { Form, Formik } from 'formik';
import FormikControl from '../../components/formikElements/FormikControl';
import axios from 'axios';
import { motion } from "framer-motion";


const Contact = () => {
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post('https://api.web3forms.com/submit', {
        access_key: 'e7732b83-2b09-4688-9a5a-35fce32dad84',
        name: values.name,
        email: values.email,
        message: values.message
      });

      if (res.data.success) {
        alert('Message sent successfully! ✅');
        actions.resetForm();
      } else {
        alert('Something went wrong. ❌');
      }
    } catch (error) {
      console.error(error);
      alert('There was an error sending your message. ❌');
    }
  };

  const initialValues = {
    name: '',
    email: '',
    message: ''
  };
  return (
    <>
      <div className="min-h-screen bg-black/30 text-white rounded-2xl  backdrop-blur-[1px]  px-6 py-20 flex flex-col items-center">
        <div className="max-w-3xl w-full text-center mb-12">
          <h2 className="text-5xl text-glow-white font-semibold  mb-4">
            Let's stay in <br /> touch
          </h2>
          <p className="text-gray-400">
            Feel free to reach out through the form below, or contact me directly via social platforms. If you have any
            suggestions & feedbacks , I’d love to hear them too.
          </p>
        </div>
        <div className="">
          <SocialLinks className={' gap-8'} size="text-6xl" />
        </div>
        <div className="mt-20 md:w-1/2 bg-[#141417] p-8 rounded-2xl shadow-lg shadow-black/40 ">
          <motion.h1
            className="text-4xl font-bold text-center text-glow-white"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            Contact Me
          </motion.h1>
          <p className="text-gray-300 text-lg text-center mb-10">You can also send me a message directly from here.</p>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {formik => {
              return (
                <Form className="space-y-5">
                  <FormikControl control="input" name="name" type="text" label="Name" {...formik} />
                  <FormikControl control="input" name="email" type="email" label="Email" />
                  <FormikControl control="textarea" name="message" label="message" />
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
