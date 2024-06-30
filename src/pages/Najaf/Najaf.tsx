import { Header } from "../../components/header";
import { Destination } from "../../components/destination";
import { CTA } from "../../components/CTA";
import { History } from "../../components/History";

export function Najaf() {
  return (
    <>
      <Header heading="Najaf" img="headerBg" />
      <Najaf_Outlet />
      <section>
        <h2 className="text-5xl text-center text-secondary-400 mb-32">
          Top Destination
        </h2>
        <Destination
          heading="Imam Ali Shrine "
          Paragraph="The Imam Ali Shrine is the holiest site in Najaf, housing the tomb of Imam Ali ibn Abi Talib, a central figure in Shia Islam. It attracts millions of pilgrims annually for prayers and contemplation."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Wadi-us-Salaam Cemetery"
          Paragraph="This vast cemetery next to the Imam Ali Shrine is one of the largest in the world and is revered by Shia Muslims. It is believed to contain graves of prophets, scholars, and millions of Shia faithful."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Al-Sahlah Mosque"
          Paragraph="Located near the Imam Ali Shrine, Al-Sahlah Mosque is where Imam Ali is said to have taught his followers. It is a place of spiritual importance and historical significance."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Najaf Souk "
          Paragraph="The Najaf Souk is a bustling marketplace near the Imam Ali Shrine, offering a wide array of goods including religious items, textiles, and local crafts. It is a cultural and commercial hub for visitors and locals alike."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Al Sheraa Complex"
          Paragraph="The Al Sheraa Complex for Entertainment in Najaf is a top-notch venue featuring an array of exciting amusement rides, engaging games, and diverse dining options. Perfect for families and friends, it offers a memorable experience for visitors of all ages."
          button="Get Started"
          img=""
        />
      </section>
      <History
        heading="History"
        Paragraph="Najaf, situated in central Iraq, is steeped in profound historical and religious significance. Founded in the 7th century AD, it quickly became a focal point for Islamic learning and spirituality. The city's prominence grew significantly with the construction of the Imam Ali Shrine, marking the resting place of Imam Ali ibn Abi Talib, cousin and son-in-law of the Prophet Muhammad and the first Imam in Shia Islam. Najaf emerged as a center for Islamic scholarship and jurisprudence, attracting scholars and students from across the Muslim world. Over the centuries, Najaf endured various political changes and conflicts but maintained its stature as a spiritual sanctuary. Today, it continues to draw millions of pilgrims annually, making it one of the holiest cities in Shia Islam and a symbol of religious devotion and scholarly pursuit."
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
          Najaf, revered as one of Shia Islam's holiest cities, is home to the
          revered shrine of Imam Ali ibn Abi Talib. Pilgrims from around the
          globe visit Najaf to pay homage at his shrine, seeking spiritual
          solace and enlightenment. The city's rich cultural heritage and
          historical significance make it a profound destination for religious
          devotion and scholarly pursuit in the Islamic world.
        </p>
      </section>
    </>
  );
}
