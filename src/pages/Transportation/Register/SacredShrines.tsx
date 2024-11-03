import { Header } from "../../../components/Header";
import noble1 from "../../../assets/Transportation/register/noble_1.webp";
import noble2 from "../../../assets/Transportation/register/noble_2.webp";
import noble3 from "../../../assets/Transportation/register/noble_3.webp";
import noble4 from "../../../assets/Transportation/register/noble_4.webp";
import noble5 from "../../../assets/Transportation/register/noble_5.webp";
import noble6 from "../../../assets/Transportation/register/noble_6.webp";
import { Whatsapp } from "../../../components/Whatsapp";

import { RegisterCard } from "../../../components/Rigester_card";

export function SacredShrines() {
  const ScaredShrinesData = [
    {
      heading: "Group 20 Muharram",
      img: noble1,
      description:
        "The pilgrimage of Amir al-Mominin Ali (peace be upon him) in Najaf, the pilgrimage of Imam Hussein (peace be upon him) and his companions in Karbala, the pilgrimage of Imam Musa Kazim and Imam Muhammad Taqi al-Jawad (peace be upon them) in Kazmin, and the pilgrimage of Imam Ali al-Naqi al-Hadi and Imam Hassan Asgari (peace be upon them) in Samarra. ",
      date: "Date of travel :",
      date1: "2024-07-21",
      date2: "04-31-1403",
      rate: "300 dollars + plane ticket",
    },
    {
      heading: "Arbaeen walking group",
      img: noble2,
      description:
        "The pilgrimage of Amir al-Mominin Ali (peace be upon him) in Najaf, the pilgrimage of Imam Hussein (peace be upon him) and his companions in Karbala, the pilgrimage of Imam Musa Kazim and Imam Muhammad Taqi al-Jawad (peace be upon them) in Kazmin, and the pilgrimage of Imam Ali al-Naqi al-Hadi and Imam Hassan Asgari (peace be upon them) in Samarra. ",
      date: "Date of travel :",
      date1: "2024-08-15",
      date2: "05-25-1403",
      rate: "cost of Iran and Iraq",
    },
    {
      heading: "The group after Arbaeen",
      img: noble3,
      description:
        "The pilgrimage of Amir al-Mominin Ali (peace be upon him) in Najaf, the pilgrimage of Imam Hussein (peace be upon him) and his companions in Karbala, the pilgrimage of Imam Musa Kazim and Imam Muhammad Taqi al-Jawad (peace be upon them) in Kazmin, and the pilgrimage of Imam Ali al-Naqi al-Hadi and Imam Hassan Asgari (peace be upon them) in Samarra. ",
      date: "Date of travel :",
      date1: "2024-08-26",
      date2: "06-05-1403",
      rate: "one month",
    },
    {
      heading: "Group 2 Dhul Hijjah Arafah",
      img: noble4,
      description:
        "The pilgrimage of Imam Hussain, peace be upon him, has a very high place in the days of Arafat, so that before paying attention to the pilgrims in Arafat, God first looks at the pilgrims of Imam Hussain, peace be upon him.",
      date: "Date of travel :",
      date1: "2024-06-09",
      date2: "03-20-1403",
      rate: "300 dollars",
    },
    {
      heading: "Group 16 of Dhul-Hijjah Ghadeer",
      img: noble5,
      description:
        "Ghadir, the day of allegiance of the believers with Amir al-Mominin in Najaf Ashraf...",
      date: "Date of travel :",
      date1: "06-23-2024",
      date2: "04-03-1403",
      rate: "shipping inside Iran",
    },
    {
      heading: "Group 1 Muharram Ashura",
      img: noble6,
      description:
        "Traveling during the days of Ashura is one of the most precious times for visiting Imam Hussain (peace be upon him).",
      date: "Date of travel :",
      date1: "2024-07-07",
      date2: "04-17-1403",
      rate: "shipping inside Iran",
    },
  ];

  return (
    <>
    <Whatsapp></Whatsapp>
      <Header heading="Groups of nobles" img="headerBg" />
      <section>
        <div className="grid gap-9 xs:grid-cols-2 md:grid-cols-3 ">
          {ScaredShrinesData.map((data, i) => {
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
