import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Join } from "../../components/Join";
import { Module } from "../../components/Module";
import { Whatsapp } from "../../components/Whatsapp";
import { useState } from "react";


export function Contact() {
  return (
    <>
    <Whatsapp></Whatsapp>
      <Header heading="Get In Touch" img="contactBg" />
      <Form />
      <Join />
    </>
  );
}
