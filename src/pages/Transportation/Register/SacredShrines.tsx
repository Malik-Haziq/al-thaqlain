import { Header } from "../../../components/header";
import noble1 from "../../../assets/Transportation/register/noble_1.webp";
import noble2 from "../../../assets/Transportation/register/noble_2.webp";
import noble3 from "../../../assets/Transportation/register/noble_3.webp";
import noble4 from "../../../assets/Transportation/register/noble_4.webp";
import noble5 from "../../../assets/Transportation/register/noble_5.webp";
import noble6 from "../../../assets/Transportation/register/noble_6.webp";

import { RegisterCard } from "../../../components/Rigester_card";

export function SacredShrines() {
  return <>
  <Header heading="Groups of nobles" img="headerBg" />
  <section className="">

    <div className="flex gap-5 mb-8">
    <RegisterCard
      heading="Group 20 Muharram"
      img={noble1}
      para="The pilgrimage of Amir al-Mominin Ali (peace be upon him) in Najaf, the pilgrimage of Imam Hussein (peace be upon him) and his companions in Karbala, the pilgrimage of Imam Musa Kazim and Imam Muhammad Taqi al-Jawad (peace be upon them) in Kazmin, and the pilgrimage of Imam Ali al-Naqi al-Hadi and Imam Hassan Asgari (peace be upon them) in Samarra. "
      date="Date of travel :"
      date1="AD: 2024-07-21"
      date2="Date: 04-31-1403"
      price="Price : "
      rate="300 dollars + plane ticket"
      button="Register"
    />
   <RegisterCard
      heading="Arbaeen walking group"
      img={noble2}
      para="The pilgrimage of Amir al-Mominin Ali (peace be upon him) in Najaf, the pilgrimage of Imam Hussein (peace be upon him) and his companions in Karbala, the pilgrimage of Imam Musa Kazim and Imam Muhammad Taqi al-Jawad (peace be upon them) in Kazmin, and the pilgrimage of Imam Ali al-Naqi al-Hadi and Imam Hassan Asgari (peace be upon them) in Samarra. "
      date="Date of travel :"
      date1="AD: 2024-08-15"
      date2="Date: 05-25-1403"
      price="Price : "
      rate="cost of Iran and Iraq"
      button="Register"
    />
    <RegisterCard
      heading="The group after Arbaeen"
      img={noble3}
      para="The pilgrimage of Amir al-Mominin Ali (peace be upon him) in Najaf, the pilgrimage of Imam Hussein (peace be upon him) and his companions in Karbala, the pilgrimage of Imam Musa Kazim and Imam Muhammad Taqi al-Jawad (peace be upon them) in Kazmin, and the pilgrimage of Imam Ali al-Naqi al-Hadi and Imam Hassan Asgari (peace be upon them) in Samarra. "
      date="Date of travel :"
      date1="AD: 2024-08-26"
      date2="Date: 06-05-1403"
      price="Price : "
      rate="one month"
      button="Register"
    />
    </div>
    <div className="flex gap-5 mb-8">
    <RegisterCard
      heading="Group 2 Dhul Hijjah Arafah"
      img={noble4}
      para="The pilgrimage of Imam Hussain, peace be upon him, has a very high place in the days of Arafat, so that before paying attention to the pilgrims in Arafat, God first looks at the pilgrims of Imam Hussain, peace be upon him."
      date="Date of travel :"
      date1="AD: 2024-06-09"
      date2="Date: 03-20-1403"
      price="Price : "
      rate=" 300 dollars"
      button="Register"
    />
     <RegisterCard
      heading="Group 16 of Dhul-Hijjah Ghadeer"
      img={noble5}
      para="Ghadir, the day of allegiance of the believers with Amir al-Mominin in Najaf Ashraf..."
      date="Date of travel :"
      date1="AD: 06-23-2024"
      date2="Date: 04-03-1403"
      price="Price : "
      rate="shipping inside Iran"
      button="Register"
    />
     <RegisterCard
      heading="Group 1 Muharram Ashura"
      img={noble6}
      para="Traveling during the days of Ashura is one of the most precious times for visiting Imam Hussain (peace be upon him)."
      date="Date of travel :"
      date1="AD: 2024-07-07"
      date2="Date: 04-17-1403"
      price="Price : "
      rate="shipping inside Iran"
      button="Register"
    />
    </div>
  
  </section>
</>
}



