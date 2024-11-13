import { Header } from "../../components/Header";
import { Destination } from "../../components/Destination";
import { CTA } from "../../components/CTA";
import { History } from "../../components/History";
import { Whatsapp } from "../../components/Whatsapp";
import bg from "../../assets/contact/contact.webp";

export function Karbala() {
  return (
    <>
      <Whatsapp></Whatsapp>
      <Header heading="Karbala" img={bg} />
      <Karbala_Outlet />
      <section>
        <h2 className="text-5xl text-center text-white-100 mb-32">
          Top Destination
        </h2>
        <Destination
          heading="Imam Hussain Shrine"
          Paragraph="The shrine of Imam Hussain ibn Ali, the grandson of Prophet Muhammad, is the focal point of Karbala. Pilgrims come to pay their respects and commemorate the Battle of Karbala, a pivotal event in Shia history."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Al-Abbas Shrine"
          Paragraph="This shrine is dedicated to Abbas ibn Ali, the half-brother of Imam Hussain, renowned for his loyalty and bravery during the Battle of Karbala. Pilgrims honor his sacrifice and visit his tomb to seek blessings."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Zainabiyya Hill"
          Paragraph="Located near the Imam Hussain Shrine, Zainabiyya Hill is believed to be the spot where Zainab bint Ali, sister of Imam Hussain, stood and witnessed the battle. It holds immense historical and emotional significance for visitors."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Karbala Historical Museum"
          Paragraph="This museum offers a detailed account of the Battle of Karbala and the events leading up to it. Visitors can see artifacts, manuscripts, and exhibits that provide deeper insights into Shia history and culture."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Bani Asad Cemetery"
          Paragraph="This cemetery is where many martyrs of the Battle of Karbala are buried. Pilgrims visit to pay their respects to those who fought alongside Imam Hussain and to reflect on the sacrifices made during the battle."
          button="Get Started"
          img=""
        />
      </section>
      <History
        heading="History"
        Paragraph="Karbala, situated in Iraq, holds profound significance in Islamic history and Shia Islam. It gained prominence due to the tragic Battle of Karbala in 680 AD, where Imam Hussein, the grandson of Prophet Muhammad, was martyred along with his companions. This event marked a pivotal moment in the split between Sunni and Shia Muslims, with Karbala becoming a symbol of resistance against oppression and tyranny. Over the centuries, Karbala evolved into a major pilgrimage site, attracting millions of Shia Muslims annually to commemorate the martyrdom of Imam Hussein during the annual Arbaeen pilgrimage. The city's cultural and religious significance is underscored by the majestic Imam Hussein Shrine, which stands as a testament to the enduring legacy of sacrifice and devotion in Shia Islam."
      />
      <CTA />
    </>
  );
}

function Karbala_Outlet() {
  return (
    <>
      <section className="md:px-20">
        <p className="text-center text-white-100 text-xl mx-auto">
          Karbala, located in Iraq, is a city of profound religious significance
          in Shia Islam. It is renowned for the tragic Battle of Karbala in 680
          AD, where Imam Hussein, the grandson of Prophet Muhammad, was
          martyred. Today, Karbala stands as a center of pilgrimage and
          spiritual devotion, with the majestic Imam Hussein Shrine drawing
          millions of Shia Muslims annually to commemorate his sacrifice and
          uphold the values of justice and resistance against oppression.
        </p>
      </section>
    </>
  );
}
