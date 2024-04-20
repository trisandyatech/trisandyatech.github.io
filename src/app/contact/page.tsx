import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { getMetadata } from "@/utils";

import { Metadata } from "next";

export const metadata: Metadata = getMetadata("Contact Us");

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Get in touch with Trisandya! Whether you have questions about our services, want to discuss a potential project, or simply want to say hello, we'd love to hear from you. Our team is here to assist you and provide the information you need. Feel free to reach out to us using the contact form below or through the contact information provided. We look forward to connecting with you!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
