import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Join } from "../../components/Join";
import { Whatsapp } from "../../components/Whatsapp";

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
