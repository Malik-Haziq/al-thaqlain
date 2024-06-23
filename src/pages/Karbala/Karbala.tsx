import { Header } from "../../components/header";
import { Destination } from "../../components/destination";
import { CTA } from "../../components/CTA";
import { History } from "../../components/History";

export function Karbala() {
  return (
    <>
      <Header heading="Karbala" img="headerBg" />
      <Karbala_Outlet />
      <section>
        <h2 className="text-5xl text-center text-secondary-400 mb-32">
          Top Destination
        </h2>
        <Destination
          heading="Imam Hussein Shrine"
          Paragraph="Karbala is home to the shrine of Imam Hussein ibn Ali, a revered figure in Shia Islam, attracting pilgrims for its spiritual significance."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Arba'een Pilgrimage"
          Paragraph="The largest annual pilgrimage in the world, with millions walking to Karbala to commemorate the 40th day after Imam Hussein's martyrdom"
          button="Get Started"
          img=""
        />
        <Destination
          heading="Al Abbas Mosque"
          Paragraph="Another prominent site in Karbala, dedicated to Abbas ibn Ali, attracts pilgrims for its historical and cultural value."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Religious and Cultural Heritage"
          Paragraph="Karbala's rich history, intertwined with Islamic theology and heritage, draws scholars and historians."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Community and Worship"
          Paragraph=" The vibrant community of pilgrims, along with rituals and prayers, create a unique atmosphere of devotion and unity."
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
        <p className="text-center text-white-300 text-xl mx-auto">
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
