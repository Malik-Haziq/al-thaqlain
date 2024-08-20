import { Header } from "../../../components/header";
import hajj1 from "../../../assets/Transportation/register/umrah-min.webp";
import hajj2 from "../../../assets/Transportation/register/umrah_2.webp";
import hajj3 from "../../../assets/Transportation/register/umrah_3.webp";
import hajj4 from "../../../assets/Transportation/register/umrah_4.webp";
import hajj5 from "../../../assets/Transportation/register/umrah_5.webp";
import hajj6 from "../../../assets/Transportation/register/umrah_6.webp";

import { RegisterCard } from "../../../components/Rigester_card";

export function Hajj() {
  const hajjData = [
    {
      heading: "Rajabiya Umrah group",
      img: hajj1,
      description:
        "Undoubtedly, the month of Rajab is the best time for Umrah from the perspective of the Ahl al-Bayt (peace be upon them), which has been emphasized in many traditions, especially during the birth of the Kaaba, being next to the Kaaba is truly spectacular and valuable.",
      date: "Date of travel :",
      date1: "2025-01-08",
      date2: "10-19-1403",
      rate: "Get in touch",
    },
    {
      heading: "Shabani holidays group",
      img: hajj2,
      description:
        "One of the best places to visit for Umrah is from the birth days of Imam Hussain (peace be upon him) to the middle of Sha'ban. In the suitable weather of winter and during the bright days of Milad, God willing, visiting Medina and Mecca is a very memorable trip. ",
      date: "Date of travel :",
      date1: "02-02-2025",
      date2: "11-14-1403",
      rate: "1400 dollars",
    },
    {
      heading: "The last group of Ramada",
      img: hajj3,
      description:
        "The last Umrah of the year is performed at the end of Ramadan and the beginning of Shawwal.",
      date: "Date of travel :",
      date1: "2025-03-27",
      date2: "01-07-1404",
      rate: "Get in touch",
    },
    {
      heading: "Rabi Al Thani group",
      img: hajj4,
      description:
        "The last Umrah of the year is performed at the end of Ramadan and the beginning of Shawwal.",
      date: "Date of travel :",
      date1: " 2024-10-10",
      date2: "07-19-1403",
      rate: "Get in touch",
    },
    {
      heading: "Jumadi Awali group",
      img: hajj5,
      description:
        "During the days of Fatima and the martyrdom of Hazrat Zahra (may peace be upon her), it is very valuable to be in Medina, in the shrine of the Messenger of God, and near the graves of the imams, to mourn Hazrat Zahra and to shed tears in her mourning. ",
      date: "Date of travel :",
      date1: "2024-11-12",
      date2: "08-22-1403",
      rate: "Get in touch",
    },
    {
      heading: "Jumadi al-Thani group",
      img: hajj6,
      description:
        "Umrah journey during the birthday of Hazrat Zahra (peace be upon her) and the days of Christmas and the birthday of Hazrat Christ is very valuable and memorable. ",
      date: "Date of travel :",
      date1: "12-20-2024",
      date2: "09-30-1403",
      rate: "Get in touch",
    },
  ];

  return (
    <>
      <Header heading="Hajj and Umrah groups" img="headerBg" />
      <section>
        <div className="grid gap-9 md:grid-cols-2 xl:grid-cols-3 ">
          {hajjData.map((data, i) => {
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
