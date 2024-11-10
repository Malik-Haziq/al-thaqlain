import { Header } from "../../components/Header";
import { Destination } from "../../components/Destination";
import { CTA } from "../../components/CTA";
import { History } from "../../components/History";
import { Whatsapp } from "../../components/Whatsapp";

export function Kufa() {
  return (
    <>
    <Whatsapp></Whatsapp>
      <Header heading="Kufa" img="headerBg" />
      <Kufa_Outlet />
      <section>
        <h2 className="text-5xl text-center text-white-100 mb-32">
          Top Destination
        </h2>
        <Destination
          heading="Great Mosque of Kufa"
          Paragraph="The Great Mosque of Kufa is one of the oldest mosques in the world and holds great historical importance. It was built during the time of Caliph Omar ibn al-Khattab and is associated with pivotal events in early Islamic history, including the leadership of Imam Ali and the Muslim conquests."
          button="Get Started"
          img=""
        />
        <Destination
          heading="House of Muslim ibn Aqil"
          Paragraph="This house is believed to have been the residence of Muslim ibn Aqil, a cousin of Imam Hussein and emissary sent by him to Kufa. It is a significant historical site commemorating the early struggles of the Shia community"
          button="Get Started"
          img=""
        />
        <Destination
          heading="Masjid Hannana "
          Paragraph="Masjid Hannana, located in Najaf, is a revered mosque known for its historical significance and serene atmosphere. It attracts visitors and pilgrims who seek spiritual solace and a connection to Islamic heritage."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Al-Qushla Mosque"
          Paragraph="Located in Kufa, Al-Qushla Mosque is known for its distinctive architecture and historical significance. It serves as a place of worship and community gathering, reflecting Kufa's vibrant religious life."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Maytham al-Tammar Shrine."
          Paragraph="The Maytham al-Tammar Shrine, located in Najaf, is a significant religious site dedicated to the revered companion of Imam Ali. It draws numerous pilgrims who come to pay their respects and seek spiritual blessings."
          button="Get Started"
          img=""
        />
      </section>
      <History
        heading="History"
        Paragraph="Kufa, located in present-day Iraq, holds a significant place in Islamic history as one of the earliest Muslim cities. Founded in 638 AD during the caliphate of Caliph Umar ibn al-Khattab, Kufa quickly became a major political, military, and cultural center. It served as the capital of Iraq under the Umayyad Caliphate and played a crucial role in the early Islamic conquests. Kufa was also a center of learning and Islamic scholarship, where notable companions of the Prophet Muhammad, such as Imam Ali and Ibn Abbas, resided and taught. Throughout its history, Kufa witnessed several pivotal events, including political uprisings and scholarly debates that shaped Islamic jurisprudence and theology. Today, Kufa retains its historical legacy, with archaeological sites and remnants reflecting its importance in early Islamic civilization."
      />
      <CTA />
    </>
  );
}

function Kufa_Outlet() {
  return (
    <>
      <section className="md:px-20">
        <p className="text-center text-white-100 text-xl mx-auto">
          Kufa, located in Iraq, holds significant historical importance as an
          early Islamic city. It was a center of political and religious
          activity during the early Muslim caliphates and served as a base for
          pivotal events in Islamic history. Today, Kufa remains revered for its
          ancient mosques, archaeological sites, and as a cultural symbol of
          early Islamic civilization
        </p>
      </section>
    </>
  );
}
