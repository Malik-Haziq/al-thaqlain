import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Join } from "../../components/Join";
import { Module } from "../../components/Module";
import { useState } from "react";

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Header heading="Get In Touch" img="contactBg" />
      <Form onModalOpen={handleModalOpen} />
      {isModalOpen && (
        <Module
          heading="Thanks for Submitting form."
          para="Your form has been submitted. We will get back to you as soon as posible."
          button="Close"
          onModalOpen={handleModalOpen}
          isModalOpen={isModalOpen}
        />
      )}
      <Join />
    </>
  );
}
