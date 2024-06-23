import { Header } from "../../components/header";
import { Destination } from "../../components/destination";
import { CTA } from "../../components/CTA";
import { History } from "../../components/History";

export function Kufa() {
  return (
    <>
      <Header heading="Kufa" img="headerBg" />
      <Kufa_Outlet />
      <section>
        <h2 className="text-5xl text-center text-secondary-400 mb-32">
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
          heading="Nahrawan Canal"
          Paragraph="The Nahrawan Canal is an ancient waterway near Kufa, known for its historical and agricultural importance. It is mentioned in Islamic history and literature, reflecting the region's ancient infrastructure and cultural significance."
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
          heading="Qasr al-Imara "
          Paragraph="Qasr al-Imara is an archaeological site that includes the remains of a palace believed to have been used by the early Muslim governors of Kufa. It offers insights into the administrative and architectural history of the region."
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
        <p className="text-center text-white-300 text-xl mx-auto">
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
