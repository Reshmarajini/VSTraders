"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";

interface ContactFormProps {
  type: "BUY" | "SELL";
}

const ContactForm = ({ type }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: "veeeraasudalai@gmail.com",
        },
        "YOUR_USER_ID"
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => console.error("EmailJS Error:", err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full bg-blue-100 p-6 rounded-xl shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-bold text-blue-800">{type} Form</h2>

      <input
        type="text"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        name="message"
        required
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
      >
        Submit
      </button>

      {success && <p className="text-green-600 font-medium">Message sent!</p>}
    </form>
  );
};

export default ContactForm;
