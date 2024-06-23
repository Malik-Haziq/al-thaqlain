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
          heading="Al-Mustansiriya School"
          Paragraph=" A historic center of learning founded in 1227, it's a masterpiece of Islamic architecture, known for its intricate designs and scholarly atmosphere."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Baghdad Tower"
          Paragraph="The tallest structure in Iraq, offering panoramic views of the city and the Tigris River, with restaurants and entertainment venues."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Baghdad Zoo"
          Paragraph="Established in 1971, it houses a diverse collection of animals native to Iraq and beyond, providing educational experiences for visitors of all ages."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Al-Shaheed Monument"
          Paragraph="Built in 1983 to honor fallen soldiers, it features an iconic dome and eternal flame, symbolizing Iraq's resilience and sacrifice."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Mutannabi Street"
          Paragraph=" A cultural hub known for its bookstores, cafes, and street performers, it's a vibrant gathering place for intellectuals, artists, and book lovers alike."
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
