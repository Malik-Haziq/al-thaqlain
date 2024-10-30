import { Header } from "../../components/header";
import { Destination } from "../../components/destination";
import { CTA } from "../../components/CTA";
import { History } from "../../components/History";
import { Whatsapp } from "../../components/Whatsapp";

export function Basra() {
  return (
    <>
    <Whatsapp></Whatsapp>
      <Header heading="Basra" img="headerBg" />
      <Basra_Outlet />
      <section>
        <h2 className="text-5xl text-center text-secondary-400 mb-32">
          Top Destination
        </h2>
        <Destination
          heading="Shrine of Imam Ali ibn Abi Talib"
          Paragraph="While primarily associated with Najaf, the connection to Basra is strong due to Imam Ali's influence and historical battles."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Shrine of Talha ibn Ubayd-Allah"
          Paragraph="This shrine is dedicated to one of the companions of the Prophet Muhammad and holds significant historical and religious importance."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Shrine of Zubair ibn al-Awwam"
          Paragraph="Another key site, this shrine honors a close companion of the Prophet Muhammad and a prominent figure in early Islamic history."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Al-Ashar Mosque:"
          Paragraph="Known for its historical significance, this mosque is an important place of worship and reflection for Shia Muslims."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Basra Grand Mosque"
          Paragraph="As one of the largest and most architecturally impressive mosques in the region, it serves as a central place for prayer and religious gatherings."
          button="Get Started"
          img=""
        />
      </section>
      <History
        heading="History"
        Paragraph="Basra, located in southern Iraq along the Shatt al-Arab river, boasts a rich and diverse history dating back millennia. Established in 636 AD during the Islamic conquests, it quickly grew into a prominent center of trade and culture. Basra flourished under the Abbasid Caliphate (750-1258 AD), becoming a hub for commerce, learning, and Islamic scholarship. Its strategic location facilitated trade between the Arabian Peninsula, India, and Persia, contributing to its prosperity. Over the centuries, Basra witnessed various rulers and dynasties, including the Ottoman Empire and British colonial rule. Today, it remains a vital economic and cultural center in Iraq, blending ancient heritage with modern development, making it a fascinating destination for history enthusiasts and travelers alike."
      />
      <CTA />
    </>
  );
}

function Basra_Outlet() {
  return (
    <>
      <section className="md:px-20">
        <p className="text-center text-white-300 text-xl mx-auto">
          Basra, situated in southern Iraq, is a bustling port city with a rich
          history dating back to ancient times. Known for its strategic location
          on the Shatt al-Arab waterway and vibrant cultural heritage, Basra
          thrives as a center of trade, commerce, and cultural exchange in the
          region.
        </p>
      </section>
    </>
  );
}
