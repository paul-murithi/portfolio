import React from "react";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "../Button/Button";
import styles from "./Contact.module.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xnnqkqnn");
  const [errors, setErrors] = useState({});

  const validateFields = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const message = e.target.message.value;

    const newErrors = {};
    if (!email.includes("@")) newErrors.email = "Invalid email format.";
    if (message.trim() === "") newErrors.message = "Message cannot be empty.";

    if (Object.keys(newErrors).length === 0) {
      handleSubmit(e);
    } else {
      setErrors(newErrors);
      console.log(errors);
    }
  };

  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }

  return (
    <form className={styles.contactForm} onSubmit={validateFields}>
      <label htmlFor="email" className={styles.formLabel}>
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className={styles.input}
        placeholder="Enter your Email Address"
        required
      />

      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className={styles.validationError}
      />

      <label htmlFor="message" className={styles.formLabel}>
        Enter Your Message
      </label>
      <textarea
        id="message"
        name="message"
        className={styles.input}
        placeholder="Enter Your Message"
        required
      />

      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className={styles.validationError}
      />

      <button
        type="submit"
        disabled={state.submitting}
        className={styles.submitButton}
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
