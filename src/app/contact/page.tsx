import Contact from "@/components/Contact";
import { Metadata } from "next";

const ContactPage = () => {
  return (
    <>
      {/* Set metadata for the page */}
      <head>
        <title>Contact Page</title>
        <meta
          name="description"
          content="Hii! You can contact us directly by giving a call for Business Enquiry - 7299499222, We are available 24/7."
        />
      </head>

      {/* Add padding-top to avoid overlapping with the header */}
      <div className="pt-32">
        {/* Render the Contact component */}
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
