import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="c-maindiv">
        <div className="c-textdiv">
          <h1>Contact US</h1>
          <p>
          Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions, RHYNO EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry. We believe in engineering solutions that solve problems.
          </p>
        </div>
      </div>

      <div className="ct-boxy">
        <div className="ct-insidediv">
          <h2>Say Hello</h2>
          <div className="ct-linksdiv">
            <div className="ct-links1">
              <p>Phone :</p>
              <small>+91 9023987528</small><br />
              {/* <small>+91 000000000</small> */}

              <p>Mobile :</p>
              <small>+91 9023987528</small>
            </div>
            <div className="ct-links2">
              <p>E-Mail :</p>
              <small> info@rhyno.in</small>

              <p>Address :</p>
              <small>RHYNO Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</small>
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
