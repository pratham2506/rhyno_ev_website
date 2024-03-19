import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="c-maindiv">
        <div className="c-textdiv">
          <h1>Contact US</h1>
          <p>
            Hi! You have reached to the right page. You may be looking for a
            team to work with or just visiting us yet please drop us a message
            and let's start a conversation. I bet it will be a step
            forward/closer for both of us. If nothing comes up to drop a
            message, at-least share your feedback on our efforts to convey who
            we are OR follow us/thumbs-up on any of our social media platforms.
          </p>
        </div>
      </div>

      <div className="ct-boxy">
        <div className="ct-insidediv">
          <h2>Say Hello</h2>
          <div className="ct-linksdiv">
            <div className="ct-links1">
              <p>Phone :</p>
              <small>+91 000000000</small><br />
              <small>+91 000000000</small>

              <p>Mobile :</p>
              <small>+91 000000000</small>
            </div>
            <div className="ct-links2">
              <p>E-Mail :</p>
              <small>exampple@gmail.com</small>

              <p>Skype :</p>
              <small>abc@gmail.com</small>
            </div>
          </div>
        </div>

        <div className="ct-insidediv2">
          <h2>Get in Touch</h2>
          <div className="ct-social">
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-linkedin"></i></a>
          <a href=""><i class="fa-brands fa-square-facebook"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
