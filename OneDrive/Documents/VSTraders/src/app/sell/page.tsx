'use client'; 

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function SellPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    howMuch: "",
    whenCanWeTake: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("your_service_id", "your_template_id", e.target, "your_user_id")
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Your information has been sent!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-black">
      <Header />

      <main className="flex-grow py-10 px-4 max-w-md mx-auto">
        <div className="pt-32">
          <h2 className="text-center text-xl font-bold mb-4">VS Traders</h2>
          <p className="text-center text-sm font-semibold mb-6">CONTACT: 7299499222</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label>How much do you have:</label>
            <input
              type="text"
              name="howMuch"
              value={formData.howMuch}
              onChange={handleChange}
              className="w-full border px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label>When can we take the product:</label>
            <input
              type="text"
              name="whenCanWeTake"
              value={formData.whenCanWeTake}
              onChange={handleChange}
              className="w-full border px-3 py-2 mt-1"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 w-full hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </main>

      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG content */}
        </svg>
      </div>

      <Footer />
    </div>
  );
}
