import { Header } from "../../../components/header";
import fourteen1 from "../../../assets/Transportation/register/fourteen_1-min.png";
import fourteen2 from "../../../assets/Transportation/register/fourteen_2.webp";
import { RegisterCard } from "../../../components/Rigester_card";
import { Whatsapp } from "../../../components/Whatsapp";

export function FourteenInnocents() {
  const FourteenInnocentsData = [
    {
      heading: "Pilgrimage group of 14 innocents in Arbaeen",
      img: fourteen1,
      description:
        "Pilgrimage of the Fourteen Innocents (peace be upon them) in one trip The approximate time of this trip is around the Arbaeen time of Imam Hussain, peace be upon him, when the pilgrim first goes to Karbala to understand the fervor of Arbaeen and that valuable spiritual gathering and share in the spiritual reward of that gathering. After visiting Najaf, Karbala, Kazimin and Samarra, they go on Umrah journey and while visiting the grave of the Messenger of God during the martyrdom days of the Messenger of God, peace be upon him, and the graves of Imams Baqi, peace be upon them, they visit the house of God during the precious days of the month of Rabi. This trip is done as a VIP and with four-star and five-star hotels near the Kaaba ",
      date: "Date of travel :",
      date1: "2024-08-25  ",
      date2: " 06-04-1403",
      rate: "Get in touch",
    },
    {
      heading:
        "Pilgrimage group of 14 innocents in the months of Rajab and Sha'ban",
      img: fourteen2,
      description:
        "Pilgrimage of the Fourteen Innocents (peace be upon them) in one trip At the end of the month of Rajab, we will perform the Umrah journey, which is to perform two Umrahs of the month of Rajab and Sha'ban in one trip, and then we will go to the shrines in Iraq, God willing, we will be in Samarra during the precious days of the half of Sha'ban. This trip is done as VIP and with accommodation in five-star hotels near the Kaaba and four-star hotels ",
      date: "Date of travel :",
      date1: "2025-02-03",
      date2: "11-15-1403",
      rate: "Get in touch",
    },
  ];

  return (
    <>
    <Whatsapp></Whatsapp>
      <Header heading="fourteen innocents" img="headerBg" />
      <section>
        <div className="grid gap-9 xs:grid-cols-2 md:grid-cols-3 ">
          {FourteenInnocentsData.map((data, i) => {
            return (
              <RegisterCard
                img={data.img}
                heading={data.heading}
                para={data.description}
                date={data.date}
                date1={data.date1}
                date2={data.date2}
                rate={data.rate}
                key={i}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
