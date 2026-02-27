import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | AlphaTech",
  description:
    "Connect with AlphaTech to discuss consulting engagements, modernization initiatives, and strategic partnerships.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Share your goals and challenges with AlphaTech to start a conversation about practical, results-driven technology consulting."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
