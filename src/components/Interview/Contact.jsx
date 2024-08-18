import React from "react";

const Contact = () => {
  return (
    <div className="contact-body">
      <div className="about-title">
        <h1>Interview</h1>
      </div>
      <p>
        If you’re seeking a nice guy, talented, and friendly software developer,
        that can make a great job.
        <br />
        Please fill out the form below, and he’ll reach out right away.
      </p>
      <div className="form-div">
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="First Name" className="input-half" />
            <input type="text" placeholder="Last Name" className="input-half" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" className="input-full" />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" className="textarea-full" />
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
