import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./contact.css";

function Contact() {
  const [result, setResult] = useState("Send Message");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const errors = {};
    let formIsValid = true;

    if (!formData.get("First Name")) {
      errors.firstName = "First name is required";
      formIsValid = false;
    }

    if (!formData.get("Last Name")) {
      errors.lastName = "Last name is required";
      formIsValid = false;
    }

    if (!phone || !phone.match(/^\d{10,12}$/)) {
      errors.phone = "Phone number should be between 10 and 12 digits!";
      formIsValid = false;
    }

    if (!formData.get("email")) {
      errors.email = "Email is required";
      formIsValid = false;
    }

    if (!formData.get("message")) {
      errors.message = "Message is required";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const selectedOption = document.getElementById("form-selection").value;
    formData.append("Form-Selection", selectedOption);

    if (validateForm(formData)) {
      setResult("Sending....");
      formData.append("access_key", "3b3b723b-5b0c-4168-9679-6acc5dfe3940");
      formData.append("phone", phone);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setResult("Message Sent Successfully!");

        setTimeout(() => {
          event.target.reset();
          setPhone("");
          setResult("Send Message");
        }, 3000);
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    } else {
      setResult("Please fill in all required fields");
    }
  };

  return (
    <div className="contact">
      <Header />

      <div className="contactDetails">
        <div className="call">
          <a href="tel:+254799396000">
            <img
              src={process.env.PUBLIC_URL + "../media/XDL-CALL.png"}
              alt="XOBO Call"
            />
            +254 799 / 739 396 000
          </a>
        </div>

        <div className="email">
          <a href="mailto:info@xobo.co.ke">
            <img
              src={process.env.PUBLIC_URL + "../media/XDL-EMAIL.png"}
              alt="XOBO Email"
            />
            info@xobo.co.ke
          </a>
        </div>

        <div className="whatsapp">
          <a
            href="https://api.whatsapp.com/send?phone=254799396000"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={process.env.PUBLIC_URL + "../media/XDL-WHATSAPP.png"}
              alt="XOBO WhatsApp"
            />
            +254 799 / 739 396 000
          </a>
        </div>
      </div>

      <div className="contact-container">
        <h3>Need More Information?</h3>
        <p>
          Fill up the form below to send us a message, and we will get in touch
          as soon as possible.
        </p>
        <form onSubmit={onSubmit}>
          <input type="hidden" name="subject" value="New Message from XOBO Website" />

          <select name="Form-Selection" id="form-selection">
            <option value="Customer Care">
              Customer Care
            </option>
            <option value="Delivery Partner">
              Delivery Partner
            </option>
            <option value="Get a Quote">
              Get a Quote
            </option>
          </select>

          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First Name"
            type="text"
            name="First Name"
            style={{ borderColor: errors.firstName ? "red" : "" }}
          />
          {errors.firstName && (
            <p style={{ color: "red", marginTop: "-15px", fontWeight: "400" }}>
              {errors.firstName}
            </p>
          )}

          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last Name"
            type="text"
            name="Last Name"
            style={{ borderColor: errors.lastName ? "red" : "" }}
          />
          {errors.lastName && (
            <p style={{ color: "red", marginTop: "-15px", fontWeight: "400" }}>
              {errors.lastName}
            </p>
          )}

          <label htmlFor="phoneNumber">Phone Number:</label>
          <PhoneInput
            className="phone-input"
            country={"ke"}
            id="phoneNumber"
            onlyCountries={["ke"]}
            placeholder="+254 712 345 678"
            value={phone}
            onChange={setPhone}
            inputStyle={{
              borderColor: errors.phone ? "red" : "",
              border: "none",
            }}
            readOnly={true}
            required
          />
          {errors.phone && (
            <p style={{ color: "red", marginTop: "-15px", fontWeight: "400" }}>
              {errors.phone}
            </p>
          )}

          <label htmlFor="email">Email:</label>
          <input
            placeholder="Email ID"
            type="email"
            name="email"
            style={{ borderColor: errors.email ? "red" : "" }}
          />
          {errors.email && (
            <p style={{ color: "red", marginTop: "-15px", fontWeight: "400" }}>
              {errors.email}
            </p>
          )}

          <label htmlFor="message">Message:</label>
          <textarea
            placeholder="Message"
            name="message"
            style={{ borderColor: errors.message ? "red" : "" }}
          ></textarea>
          {errors.message && (
            <p style={{ color: "red", marginTop: "-15px", fontWeight: "400" }}>
              {errors.message}
            </p>
          )}

          <button type="submit">{result}</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
