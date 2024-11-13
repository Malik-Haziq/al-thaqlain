import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Join } from "../../components/Join";
import { Whatsapp } from "../../components/Whatsapp";
import bg from "../../assets/contact/contact.webp";

export function Contact() {
  return (
    <>
      <Whatsapp></Whatsapp>
      <Header heading="Get In Touch" img={bg} />
      <Form />
      <Join />
    </>
  );
}
