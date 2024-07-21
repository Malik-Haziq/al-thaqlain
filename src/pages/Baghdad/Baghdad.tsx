import { Header } from "../../components/header";
import { Destination } from "../../components/destination";
import { CTA } from "../../components/CTA";
import { History } from "../../components/History";

export function Baghdad() {
  return (
    <>
      <Header heading="Baghdad" img="headerBg" />
      <Baghdad_Outlet />
      <section>
        <h2 className="text-5xl text-center text-secondary-400 mb-32">
          Top Destination
        </h2>
        <Destination
          heading="Kadhimiya Shrine"
          Paragraph="One of the most revered Shia destinations in Baghdad, the Kadhimiya Shrine complex houses the shrines of Imam Musa al-Kadhim and Imam Muhammad al-Jawad, the seventh and ninth Shia Imams. It attracts pilgrims seeking spiritual solace and blessings."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Al-Kazimiyah Mosque"
          Paragraph="Located in the Kazimiyah district, this mosque is a significant Shia pilgrimage site housing the shrine of Imam Musa al-Kadhim. It is known for its intricate architecture and cultural importance within the Shia community."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Al-Askari Shrine"
          Paragraph="Situated in the northern part of Baghdad, the Al-Askari Shrine is dedicated to Imam Ali al-Hadi and Imam Hasan al-Askari, the tenth and eleventh Shia Imams. It is a symbol of peace and unity, drawing Shia pilgrims from around the world."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Al-Rasool al-Atham Mosque"
          Paragraph=" Known for its historical importance, this mosque is believed to have been founded by the Abbasid caliph Al-Mansur and is associated with Imam Ali ibn Abi Talib. It remains a place of worship and reverence for Shia Muslims."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Al-Shouhadaa Mosque"
          Paragraph="Located near the Tigris River, this mosque is dedicated to the martyrs of the Iraqi Army and popular mobilization forces who fought against ISIS. It serves as a symbol of resilience and sacrifice, attracting visitors interested in recent Shia history and honoring the fallen heroes."
          button="Get Started"
          img=""
        />
      </section>
      <History
        heading="History"
        Paragraph="Founded in the 8th century AD by the Abbasid caliph Al-Mansur, Baghdad quickly rose to prominence as the capital of the vast Islamic Empire. It became a center of learning and culture during the Islamic Golden Age, hosting scholars, poets, and philosophers from around the world. The House of Wisdom, established by Caliph Harun al-Rashid, became a renowned center for scientific and philosophical advancement, translating ancient Greek, Persian, and Indian texts into Arabic. Baghdad's strategic location on the banks of the Tigris River facilitated trade and cultural exchange, fostering a cosmopolitan atmosphere that thrived for centuries. Despite periods of political instability and conflicts, Baghdad remained a beacon of knowledge and innovation, leaving an indelible mark on the history of civilization."
      />
      <CTA />
    </>
  );
}

function Baghdad_Outlet() {
  return (
    <>
      <section className="md:px-20">
        <p className="text-center text-white-300 text-xl mx-auto">
          Baghdad, once the heart of the Islamic Golden Age, pulsates with a
          rich tapestry of history and culture. Its bustling markets overflow
          with the fragrance of spices and the vibrant chatter of traders. The
          Tigris River, a lifeline of the city, reflects the timeless beauty of
          its ancient architecture and modern skyline. Baghdad's streets,
          adorned with mosques and palaces, bear witness to centuries of
          scholarly pursuits and artistic achievements, embodying a city where
          tradition meets innovation with an enduring spirit.
        </p>
      </section>
    </>
  );
}
