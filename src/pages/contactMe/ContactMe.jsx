import SocialLinks from '../../components/footer/SocialLinks';
import { Form, Formik } from 'formik';
import FormikControl from '../../components/formikElements/FormikControl';
import axios from 'axios';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { CircleCheck } from 'lucide-react';

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
    email: Yup.string().email('Invalid email format'),
    message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
  });

const onSubmit = async (values, actions) => {
  const sendPromise = axios.post('https://api.web3forms.com/submit', {
    access_key: 'e7732b83-2b09-4688-9a5a-35fce32dad84',
    name: values.name,
    email: values.email,
    message: values.message
  });

  toast.promise(
    sendPromise,
    {
      pending: "Sending your message...",
      success: "Your message has been sent successfully ",
      error: "Failed to send your message ",
    },
    {
      position: "top-right",
      hideProgressBar: false,
      // closeOnClick: true,
      pauseOnHover: true,
    }
  );

  try {
    const res = await sendPromise;

    if (res.data.success) {
      actions.resetForm(); // Reset form on success
    }
  } catch (error) {
    console.error(error);
  }
};
  // const showToast = () => {
  //   toast(  'hello worlda'  );
  // };

  const initialValues = {
    name: '',
    email: '',
    message: ''
  };
  return (
    <>
      <div className="min-h-screen  bg-black/30 text-white rounded-2xl  backdrop-blur-[1px]  px-6 py-20 flex flex-col items-center">
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
          {/* <button onClick={showToast} className="px-4 py-2 bg-blue-600 text-white rounded">
            نمایش Toast
          </button>{' '} */}
          <motion.h1
            className="text-4xl font-bold text-center text-glow-white"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            Contact Me
          </motion.h1>
          <p className="text-gray-300 text-lg text-center mb-10">You can also send me a message directly from here.</p>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            // validateOnChange={false}
          >
            {formik => {
              // console.log(formik);

              return (
                <Form noValidate className="space-y-5">
                  <FormikControl control="input" name="name" type="text" label="Name" {...formik} />
                  <FormikControl control="input" name="email" type="email" label="Email" />
                  <FormikControl control="textarea" name="message" label="message" />
                  <button
                    disabled={formik.isSubmitting}
                    type="submit"
                    className="w-full cursor-pointer flex justify-center items-center gap-3 py-3 bg-indigo-600 hover:bg-indigo-800 rounded-lg text-white font-semibold transition">
                    Send Message
                    {formik.isSubmitting ? (
                      <span className="w-4 inline-block h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : null}
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
