import { Header } from "../../components/header";
import { Destination } from "../../components/destination";
import { CTA } from "../../components/CTA";
import { History } from "../../components/History";

export function Samara() {
  return (
    <>
      <Header heading="Samara" img="headerBg" />
      <Samara_Outlet />
      <section>
        <h2 className="text-5xl text-center text-secondary-400 mb-32">
          Top Destination
        </h2>
        <Destination
          heading="Al-Askari Shrine"
          Paragraph="The Al-Askari Shrine is one of the holiest sites for Shia Muslims, housing the tombs of the tenth and eleventh Shia Imams, Ali al-Hadi and Hasan al-Askari. Pilgrims visit to honor these revered figures and seek spiritual blessings."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Ghaybat al-Sughra"
          Paragraph="This site marks where the twelfth Shia Imam, Muhammad al-Mahdi, went into Lesser Occultation. It holds deep significance for Shia believers who come to connect with the legacy and anticipated return of Imam al-Mahdi."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Ziyarat of Sayyida Hakimah"
          Paragraph="The shrine of Sayyida Hakimah, the sister of Imam Ali al-Hadi, is a place of reverence. Pilgrims visit to honor her piety and to seek blessings and solace in her memory."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Ziyarat of Sayyida Nargis Khatoon"
          Paragraph="This shrine is dedicated to Sayyida Nargis Khatoon, the mother of the twelfth Imam, Muhammad al-Mahdi. Pilgrims come to pay their respects and seek her intercession, reflecting on her significant role in Shia history."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Great Mosque of Samarra"
          Paragraph="Known for its iconic spiral minaret, the Great Mosque of Samarra is an architectural marvel and an important historical site. Pilgrims visit to appreciate its historical significance and to connect with the rich cultural heritage of the region."
          button="Get Started"
          img=""
        />
      </section>
      <History
        heading="History"
        Paragraph="Samara's history is a tapestry woven with tales of determination and triumph. From her early years, she displayed an innate curiosity and a drive to excel, which set the stage for her future endeavors. Growing up in a supportive family environment, she embraced education with fervor, excelling academically while also immersing herself in extracurricular activities. Her journey through school was marked by numerous achievements and accolades, reflecting her dedication and passion for learning. As she ventured into adulthood, Samara continued to carve her path, navigating challenges with resilience and a steadfast commitment to her goals. Her history is a testament to perseverance and the pursuit of excellence, shaping her into the inspiring individual she is today."
      />
      <CTA />
    </>
  );
}

function Samara_Outlet() {
  return (
    <>
      <section className="md:px-20">
        <p className="text-center text-white-300 text-xl mx-auto">
          Samara was a spirited individual whose presence lit up every room she
          entered. With a penchant for adventure, she thrived on exploring new
          ideas and pushing boundaries. Her infectious enthusiasm and genuine
          kindness made her a natural leader among her peers. Whether tackling
          challenges head-on or lending a listening ear, Samara's charisma and
          resilience left a lasting impression on everyone fortunate enough to
          know her.
        </p>
      </section>
    </>
  );
}
