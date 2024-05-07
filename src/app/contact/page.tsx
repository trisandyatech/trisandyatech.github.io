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
        description="Get in touch with Trisandya!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
