import { Header } from "../../../components/header";
import hajj1 from "../../../assets/Transportation/register/umrah-min.webp";
import hajj2 from "../../../assets/Transportation/register/umrah_2.webp"
import hajj3 from "../../../assets/Transportation/register/umrah_3.webp";
import hajj4 from "../../../assets/Transportation/register/umrah_4.webp";
import hajj5 from "../../../assets/Transportation/register/umrah_5.webp";
import hajj6 from "../../../assets/Transportation/register/umrah_6.webp";

import { RegisterCard } from "../../../components/Rigester_card";

export function Hajj() {
  return (
    <>
      <Header heading="Hajj and Umrah groups" img="headerBg" />
      <section className="">

        <div className="flex gap-5 mb-8">
        <RegisterCard
          heading="Rajabiya Umrah group"
          img={hajj1}
          para="Undoubtedly, the month of Rajab is the best time for Umrah from the perspective of the Ahl al-Bayt (peace be upon them), which has been emphasized in many traditions, especially during the birth of the Kaaba, being next to the Kaaba is truly spectacular and valuable. "
          date="Date of travel :"
          date1="AD: 2025-01-08"
          date2="Date: 10-19-1403"
          price="Price : "
          rate="Get in touch"
          button="Register"
        />
        <RegisterCard
          heading="Shabani holidays group"
          img={hajj2}
          para="One of the best places to visit for Umrah is from the birth days of Imam Hussain (peace be upon him) to the middle of Sha'ban. In the suitable weather of winter and during the bright days of Milad, God willing, visiting Medina and Mecca is a very memorable trip. "
          date="Date of travel :"
          date1="AD: 02-02-2025"
          date2="Date: 11-14-1403"
          price="Price : "
          rate="1400 dollars"
          button="Register"
        />
         <RegisterCard
          heading="The last group of Ramadan"
          img={hajj3}
          para="The last Umrah of the year is performed at the end of Ramadan and the beginning of Shawwal."
          date="Date of travel :"
          date1="AD: 2025-03-27"
          date2="Date: 01-07-1404"
          price="Price : "
          rate="Get in touch"
          button="Register"
        />
        </div>
        <div className="flex gap-5 mb-8">
        <RegisterCard
          heading="Rabi Al Thani group"
          img={hajj4}
          para="The last Umrah of the year is performed at the end of Ramadan and the beginning of Shawwal."
          date="Date of travel :"
          date1="AD: 2024-10-10"
          date2="Date: 07-19-1403"
          price="Price : "
          rate="Get in touch"
          button="Register"
        />
         <RegisterCard
          heading="Jumadi Awali group"
          img={hajj5}
          para="During the days of Fatima and the martyrdom of Hazrat Zahra (may peace be upon her), it is very valuable to be in Medina, in the shrine of the Messenger of God, and near the graves of the imams, to mourn Hazrat Zahra and to shed tears in her mourning. "
          date="Date of travel :"
          date1="AD: 2024-11-12"
          date2="Date: 08-22-1403"
          price="Price : "
          rate="Get in touch"
          button="Register"
        />
         <RegisterCard
          heading="Jumadi al-Thani group"
          img={hajj6}
          para="Umrah journey during the birthday of Hazrat Zahra (peace be upon her) and the days of Christmas and the birthday of Hazrat Christ is very valuable and memorable. "
          date="Date of travel :"
          date1="AD: 12-20-2024"
          date2="Date: 09-30-1403"
          price="Price : "
          rate="Get in touch"
          button="Register"
        />
        </div>
      
      </section>
    </>
  );
}
