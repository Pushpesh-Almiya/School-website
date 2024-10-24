import React , { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import conf from "../conf/conf";

function Contact() {
const {publicKey,serviceId,templateId} = conf;
const [formValues, setFormValues] = useState({
  user_name: "",
  user_email: "",
  message: ""
});
const [successMessage,setSuccessMessage]=useState("")

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessMessage("Thank you! Your message has been sent.");
          setFormValues({
            user_name: "",
            user_email: "",
            message: ""
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <div name="contact" className=" bg-[#f0f4fa]  my-4 flex flex-col justify-center items-center md:px-6">
      <div className="w-full md:w-2/3 lg:w-1/2 p-4 rounded-lg">
      <h1 className="font-bold text-3xl text-center mb-8 text-[#003366] ">Get in Touch</h1>
         {/* Success Message */}
         {successMessage && (
          <div className="text-center text-green-500 mb-4 font-semibold">
            {successMessage}
          </div>
        )}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Enter Your Name</label>
            <input
              type="text"
              id="name"
              value={formValues.user_name}
              onChange={handleChange}
              name="user_name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004080]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Enter Your Email</label>
            <input
              type="email"
              id="email"
              value={formValues.user_email}
              onChange={handleChange}
              name="user_email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004080]"
              placeholder="youremail@example.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Enter Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004080]"
              rows="5"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#00264d] text-white font-semibold py-3 rounded-lg hover:bg-navy-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
