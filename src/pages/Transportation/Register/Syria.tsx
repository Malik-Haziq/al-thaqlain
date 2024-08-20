import { Header } from "../../../components/header";
import place from "../../../assets/Transportation/register/syra.webp";
import {RegisterCard} from "../../../components/Rigester_card";




export function Syria() {
  return <>
      <Header heading="Syrian groups" img="headerBg" />
      <section className="flex">
      <RegisterCard
            heading="Syria trip"
            img={place}
            para="The duration of this trip is usually 5 days, which is done by air from Tehran"
            date="Date of travel :"
            date1="AD: 2024-07-10"
            date2="Date: 04-20-1403"
            price="Price : "
            rate="Get in touch"
            button="Register"
             />
                  </section>
  </>;
}
