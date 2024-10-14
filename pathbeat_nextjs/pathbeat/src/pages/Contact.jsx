"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [showError, setShowError] = useState(false);
  const YOUR_SERVICE_ID = 'service_f9dtwlf';
  const YOUR_TEMPLATE_ID = 'template_yyec3wb';
  const YOUR_USER_ID = 'nJaXxD8l7_JqfrnW5';
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formData, YOUR_USER_ID)
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          // Clear form fields after successful submission
          setShowToast(true);
          setFormData({
            from_name: '',
            reply_to: '',
            subject: '',
            message: '',
          });
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        },
        (error) => {
          console.error('Email sending failed:', error);
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
          }, 3000);
        }
      );
  };

  return (
    <section id="contact" className="lg:px-32 px-5">
      <div className="minh-screen overflow-hidden ">
        <div className="flex justify-center items-center lg:mt-12 flex-col lg:flex-row gap-5 mx-auto  ">
          <div className="lg:w-1/2 lg:flex lg:justify-end p-10 items-end lg:p-10">
            <div>
              <h1
                className="lg:text-5xl text-2xl heading leading-tight font-semibold text-start"
                style={{ lineHeight: '72px' }}
              >
                Have Questions? <br />
                Get in Touch!
              </h1>
              <p className="text-lg text mt-5">
                Whether you have a question about the app, need assistance, or
                want to partner with us, we’re here to help. Reach out to us
                using the form below, or get in touch via email or phone.
              </p>
              <div className="flex flex-col items-start gap-5 mt-8">
                {data.map((item, index) => {
                  return (
                    <div key={index} className="flex gap-5 items-start">
                      <img src={item.icon} className="h-10" alt="" />
                      <span>{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="  ">
              <form onSubmit={handleSubmit} className="max-w-md mx-5">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    name="reply_to"
                    value={formData.reply_to}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="companyName" className="block text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  ></textarea>
                </div>
                <div className="mt-4 flex justify-center lg:justify-start ">
                  <Button
                    type="submit"
                    className="px-4 py-2 btn bg-blue-500 text-white rounded-md"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-lg">
          Message sent successfully!
        </div>
      )}
      {showError && (
        <div className="fixed bottom-5 right-5 bg-red-500 text-white p-3 rounded-lg">
          Message sending failed!
        </div>
      )}
    </section>
  );
};

export default Contact;
const data = [
  {
    id: 1,
    title:
      'Unit 101, Oxford Towers, 139, HAL Old Airport Road, HAL II Stage, Bangalore, Karnataka-560008',
    icon: '/contact/icon1.svg',
  },
  {
    id: 2,
    title: 'contact@pathbeat.in',
    icon: '/contact/icon2.svg',
  },
  {
    id: 3,
    title: '+91-8904211743',
    icon: '/contact/icon3.svg',
  },
];
