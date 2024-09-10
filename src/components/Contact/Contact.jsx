import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ebz4h9",
        "template_51mwp1r",
        form.current,
        { publicKey: "I_qZtn-kwJ_Cy_ywg" }
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send the message. Please try again later.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-body">
      <div className="about-title">
        <h1>Contact</h1>
      </div>
      <p>
        Looking for a skilled and approachable software developer who delivers
        exceptional results? Fill out <br />
        the form below, and I'll get back to you promptly to discuss how I can
        help bring your project to life.
      </p>
      <div className="form-div">
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input-half"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input-half"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="input-full"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea-full"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Submit 👍
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
