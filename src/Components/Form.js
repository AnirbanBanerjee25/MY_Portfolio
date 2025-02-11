import "./Form.css";
import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form action="https://formspree.io/f/xldgwbny" method="POST">
        <label>Your Name</label>
        <input type="text" name="name" required />

        <label>Your Email</label>
        <input type="email" name="email" required />

        <label>Subject</label>
        <input type="text" name="subject" required />

        <label>Message</label>
        <textarea name="message" rows="6" placeholder="Type your message here" required></textarea>

        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
