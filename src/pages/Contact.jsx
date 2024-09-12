import React , { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import conf from "../conf/conf";

function Contact() {
const {publicKey,serviceId,templateId} = conf;
//Todo :- Reset value after submit the form
const [value, setValue] = useState("")

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
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div name="contact" className="min-h-screen bg-[#FFF6EA] flex flex-col justify-center items-center py-10 px-1 md:px-6">
      <div className="w-full md:w-2/3 lg:w-1/2 p-8 rounded-lg">
      <h1 className="font-bold text-3xl md:text-4xl text-center mb-8 text-[#BF2EF0] ">Get in Touch</h1>
        
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Enter Your Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ED3EF7]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Enter Your Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ED3EF7]"
              placeholder="youremail@example.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Enter Your Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ED3EF7]"
              rows="5"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#BF2EF0] text-white font-semibold py-3 rounded-lg hover:bg-[#ED3EF7] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
