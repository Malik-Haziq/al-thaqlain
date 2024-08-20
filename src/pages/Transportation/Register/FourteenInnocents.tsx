import { Header } from "../../../components/header";
import fourteen1 from "../../../assets/Transportation/register/fourteen_1-min.png";
import fourteen2 from "../../../assets/Transportation/register/fourteen_2.webp";
import { RegisterCard } from "../../../components/Rigester_card";

// import img .



export function FourteenInnocents() {
  return (
    <>
      <Header heading="fourteen innocents" img="headerBg" />
      <section className="flex gap-7">
        
        <RegisterCard
          heading="Pilgrimage group of 14 innocents in Arbaeen"
          img={fourteen1}
          para="Pilgrimage of the Fourteen Innocents (peace be upon them) in one trip The approximate time of this journey is around the time of Arbaeen of Imam Hussain (peace be upon him), when the pilgrim first goes to Karbala to understand the fervor of Arbaeen and that precious spiritual gathering and share in the spiritual reward of that gathering. After visiting Najaf, Karbala, Kazimin and Samarra, they go on Umrah journey and while visiting the grave of the Messenger of God during the martyrdom days of the Messenger of God, peace be upon him, and the graves of Imams Baqi, peace be upon them, they visit the house of God during the precious days of the month of Rabi. .. This trip is done as a VIP and with four-star and five-"
          date="Date of travel :"
          date1="AD: 2024-08-25"
          date2="Date: 06-04-1403"
          price="Price : "
          rate="Get in touch"
          button="Register"
        />
        <RegisterCard
          heading="Pilgrimage group of 14 innocents in the months of Rajab and Sha'ban"
          img={fourteen2}
          para="Pilgrimage of the Fourteen Innocents (peace be upon them) in one trip The approximate time of this journey is around the time of Arbaeen of Imam Hussain (peace be upon him), when the pilgrim first goes to Karbala to understand the fervor of Arbaeen and that precious spiritual gathering and share in the spiritual reward of that gathering. After visiting Najaf, Karbala, Kazimin and Samarra, they go on Umrah journey and while visiting the grave of the Messenger of God during the martyrdom days of the Messenger of God, peace be upon him, and the graves of Imams Baqi, peace be upon them, they visit the house of God during the precious days of the month of Rabi. .. This trip is done as a VIP and with four-star and five-"
          date="Date of travel :"
          date1="AD: 2024-07-10"
          date2="Date: 04-20-1403"
          price="Price : "
          rate="Get in touch"
          button="Register"
        />
      </section>
    </>
  );
}
