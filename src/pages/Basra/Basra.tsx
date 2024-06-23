import { Header } from "../../components/header";
import { Destination } from "../../components/destination";
import { CTA } from "../../components/CTA";
import { History } from "../../components/History";

export function Basra() {
  return (
    <>
      <Header heading="Basra" img="headerBg" />
      <Basra_Outlet />
      <section>
        <h2 className="text-5xl text-center text-secondary-400 mb-32">
          Top Destination
        </h2>
        <Destination
          heading="Shatt al-Arab River"
          Paragraph="The Shatt al-Arab is a historic river formed by the confluence of the Tigris and Euphrates rivers, flowing through Basra into the Persian Gulf. It is a vital waterway for trade and transport, lined with parks and promenades where locals and visitors gather."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Basra Corniche"
          Paragraph="The Corniche is a popular waterfront promenade along the Shatt al-Arab, offering scenic views of the river and city skyline. It's a hub of activity with restaurants, cafes, and parks, making it a favorite spot for leisure and social gatherings"
          button="Get Started"
          img=""
        />
        <Destination
          heading="Basra Museum"
          Paragraph="The Basra Museum showcases artifacts from Iraq's rich history, including ancient Mesopotamian relics, Islamic art, and cultural exhibits. It offers insights into Basra's historical significance and cultural heritage"
          button="Get Started"
          img=""
        />
        <Destination
          heading="Martyrs' Monument"
          Paragraph="This monument honors the martyrs who sacrificed their lives during the Iran-Iraq War. It stands as a symbol of resilience and remembrance, offering panoramic views of Basra and the surrounding landscape."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Umm al-Qasr Port"
          Paragraph="Umm al-Qasr is Iraq's main deep-water port, vital for international trade and maritime activities. It plays a crucial role in the economy of Basra and Iraq, handling imports and exports essential for the region's development."
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
