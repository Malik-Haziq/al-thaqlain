import { Header } from "../../../components/Header";
import syra from "../../../assets/Transportation/register/syra.webp";
import { RegisterCard } from "../../../components/Rigester_card";

export function Syria() {
  const SyriaData = [
    {
      heading: "Pilgrimage group of Hazrat Zainab in Muharram",
      img: syra,
      description:
        "Alhamdulillah, after a long time, the success of visiting Hazrat Zainab (peace be upon him) has become possible, and this good chapter has been opened for our people, especially during the days of mourning for Hazrat Aba Abdullah al-Hussein (peace be upon him).",
      date: "Date of travel :",
      date1: "2024-07-10",
      date2: "04-20-1403",
      rate: "Get in touch",
    },
  ];

  return (
    <>
      <Header heading="Syrian groups" img="headerBg" />
      <section>
        <div className="grid gap-9 xs:grid-cols-2 md:grid-cols-3 ">
          {SyriaData.map((data, i) => {
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
