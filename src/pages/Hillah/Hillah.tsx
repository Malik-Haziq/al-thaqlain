import { Header } from "../../components/header";
import { Destination } from "../../components/destination";
import { CTA } from "../../components/CTA";
import { History } from "../../components/History";
import { Whatsapp } from "../../components/Whatsapp";

export function Hillah() {
  return (
    <>
    <Whatsapp></Whatsapp>
      <Header heading="Hillah" img="headerBg" />
      <Hillah_Outlet />
      <section>
        <h2 className="text-5xl text-center text-secondary-400 mb-32">
          Top Destination
        </h2>
        <Destination
          heading="Al-Qasim Shrine"
          Paragraph="The shrine of Al-Qasim ibn Musa al-Kadhim, a revered figure in Shia Islam, is located in Hillah. Pilgrims visit to pay homage to Al-Qasim, the son of the seventh Shia Imam, and seek blessings and solace."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Imam Ali an-Naqi Shrine"
          Paragraph="This shrine is dedicated to Imam Ali an-Naqi, the tenth Shia Imam. It is a site of great spiritual significance where pilgrims come to honor the Imam and reflect on his teachings and legacy."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Tomb of Prophet Ezekiel "
          Paragraph="Believed to be the resting place of the Prophet Ezekiel, also known as Dhul-Kifl, this site is sacred to both Muslims and Jews. Shia pilgrims visit to pay their respects and appreciate the shared religious heritage."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Imam Mahdi Mosque"
          Paragraph="This mosque is dedicated to the twelfth Shia Imam, Imam Mahdi. Pilgrims visit this site to pray and seek guidance, especially invoking the Imam’s expected return and justice."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Ruins of Babylon"
          Paragraph="While not exclusively a religious site, the ancient ruins of Babylon hold significant historical importance. Shia pilgrims often visit to connect with the region’s rich past and reflect on the rise and fall of civilizations in a context broader than religious history."
          button="Get Started"
          img=""
        />
      </section>
      <History
        heading="History"
        Paragraph="Hillah, historically known as Babylon, boasts a rich tapestry of history dating back millennia. It was once a thriving center of Mesopotamian civilization, renowned for the Hanging Gardens, one of the Seven Wonders of the Ancient World. Over the centuries, it witnessed the rise and fall of empires, from Babylonian and Assyrian rule to Persian and Islamic conquests. During the Abbasid Caliphate, it flourished as an intellectual and cultural hub. Today, remnants of its glorious past, such as the ruins of Babylon and the iconic Ishtar Gate, attract visitors from around the globe, offering a glimpse into the city's majestic heritage and enduring legacy."
      />
      <CTA />
    </>
  );
}

function Hillah_Outlet() {
  return (
    <>
      <section className="md:px-20">
        <p className="text-center text-white-300 text-xl mx-auto">
          Hillah, a city in central Iraq, lies along the banks of the Euphrates
          River, embodying a blend of ancient history and modernity. Known for
          its historical significance dating back to Babylonian times, Hillah
          offers visitors glimpses of ancient ruins amidst a bustling
          contemporary cityscape. The city's vibrant markets, adorned with
          traditional souks and cafes, reflect its cultural richness and warmth.
          Hillah stands as a testament to Iraq's enduring heritage and its
          dynamic present, inviting travelers to explore its storied past and
          vibrant present.
        </p>
      </section>
    </>
  );
}
