import React, { useState } from "react";
import Container from "../components/Container";
import { ContactData } from "../data/ContactData";
import SecButton from "../components/SecButton";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [showError, setShowError] = useState(false);
  const YOUR_SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID;
  const YOUR_TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const YOUR_USER_ID = import.meta.env.VITE_YOUR_USER_ID;
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
          console.log("Email sent successfully!", response);
          // Clear form fields after successful submission
          setShowToast(true);
          setFormData({
            name: "",
            email: "",
            companyName: "",
            message: "",
          });
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        },
        (error) => {
          console.error("Email sending failed:", error);
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
          }, 3000);
        }
      );
  };

  return (
    <section id="contact">
      <Container className="">
        <div className="min-h-screen overflow-hidden mt-16">
          <h1 className="repeat text-center text-[36px] ">Contact Us</h1>
          <h1 className="text-center text-[20px] mt-4 ">
            Have questions or ideas? Let's start a conversation and explore how
            can we collaborate.
          </h1>

          <div className="flex mt-12 max-w-[1330px] lg:max-h-screen  flex-col-reverse lg:flex-row gap-5 lg:gap-0 mx-auto  ">
            <div
              className={`lg:w-full rounded-lg  bg-[url("/Contact/Contact.webp")] bg-cover bg-no-repeat bg-center flex flex-col p-5 justify-center items-center`}
            >
              <h1 className="font-semibold text-cente  text-2xl lg:text-[26px] mt-1 text-white ">
                Let's discuss how we can support your AI goals
              </h1>
              <h1 className="text-center mt-3 text-[white]"></h1>

              <div className="mt-8 mb-24">
                {ContactData.map((data, index) => {
                  return (
                    <div key={index} className="flex items-center gap-5 p-5">
                      <img src={data.icon} className="" alt="icon" />

                      <div className="">
                        <h1 className="text-[white]">{data.description}</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:w-full lg:max-h-[1000px] lg:p-10 ">
              <div className="lg:w-2/3  ">
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      name="name"
                      value={formData.name}
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="companyName"
                      className="block text-gray-700"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
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
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
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
      </Container>
    </section>
  );
};

export default Contact;
