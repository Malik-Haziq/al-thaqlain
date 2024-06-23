import { Header } from "../../components/header";
import { Destination } from "../../components/destination";
import { CTA } from "../../components/CTA";
import { History } from "../../components/History";

export function Hillah() {
  return (
    <>
      <Header heading="Hillah" img="headerBg" />
      <Najaf_Outlet />
      <section>
        <h2 className="text-5xl text-center text-secondary-400 mb-32">
          Top Destination
        </h2>
        <Destination
          heading="Babylon Ruins"
          Paragraph="Located near Hillah, the ancient city of Babylon features impressive archaeological remains, including the famous Ishtar Gate and the ruins of the Hanging Gardens, offering a glimpse into one of the world's earliest urban centers."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Hillah Grand Mosque"
          Paragraph="A significant religious site in Hillah, the Grand Mosque showcases stunning Islamic architecture and serves as a hub for local worship and community gatherings."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Euphrates River"
          Paragraph="The majestic Euphrates River runs alongside Hillah, providing picturesque views and opportunities for scenic boat rides or leisurely walks along its banks."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Al-Mustansiriya School"
          Paragraph="Founded in the 13th century, this historic institution in Hillah is renowned for its beautiful architecture and its role as a center for Islamic learning and scholarship."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Hillah Traditional Souks"
          Paragraph="The bustling markets of Hillah offer a vibrant experience, with colorful stalls selling everything from local produce to handmade crafts, providing visitors with a taste of authentic Iraqi culture and commerce."
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

function Najaf_Outlet() {
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
