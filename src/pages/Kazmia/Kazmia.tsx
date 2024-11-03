import { Header } from "../../components/Header";
import { Destination } from "../../components/Destination";
import { CTA } from "../../components/CTA";
import { History } from "../../components/History";
import { Whatsapp } from "../../components/Whatsapp";

export function Kazmia() {
  return (
    <>
    <Whatsapp></Whatsapp>
      <Header heading="Kazmia" img="headerBg" />
      <Kazmia_Outlet />
      <section>
        <h2 className="text-5xl text-center text-white-400 mb-32">
          Top Destination
        </h2>
        <Destination
          heading="Imam Ali Al-Hadi Shrine"
          Paragraph="The shrine of Imam Ali al-Hadi, the tenth Shia Imam, is located in Kazimain. Pilgrims visit this sacred site to pay their respects, seek spiritual guidance, and reflect on the teachings of the Imam."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Imam Hasan al-Askari Shrine"
          Paragraph="Dedicated to Imam Hasan al-Askari (a.s.), the eleventh Shia Imam, this shrine is revered for its beauty and tranquility. It attracts pilgrims seeking spiritual blessings and historical insight."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Al-Kadhimiya Mosque"
          Paragraph="Known for its golden domes and stunning architecture, Al-Kadhimiya Mosque is a major Shia pilgrimage site in Kazimayn. It houses the shrines of Musa al-Kadhim and Muhammad al-Jawad, the seventh and ninth Shia Imams respectively."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Wadi al-Salaam Cemetery"
          Paragraph="The largest cemetery in the world, Wadi al-Salaam is located in Najaf, near Kazimayn. It is believed to be the burial place of numerous prophets, companions of the Prophet Muhammad, and prominent Shia figures."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Bab al-Qiblah Gate"
          Paragraph="A historic gate in Kazimayn, Bab al-Qiblah is associated with significant events in Shia history. It serves as a symbolic entrance to the holy sites and is revered by Shia pilgrims for its historical significance."
          button="Get Started"
          img=""
        />
      </section>
      <History
        heading="History"
        Paragraph="In the annals of Kazmia's history, tales weave through epochs of conquest and cultural exchange, shaping the land's identity. Millennia ago, nomadic tribes roamed its fertile plains, forging bonds through trade and the sharing of ancient wisdom. As civilizations rose and fell, Kazmia became a nexus of learning and innovation, where scholars delved into astronomy and alchemy, leaving behind observatories and arcane texts etched in forgotten languages. The rise of mighty empires saw cities adorned with opulent palaces and intricate temples dedicated to gods both ancient and new. Through wars and alliances, Kazmia evolved, blending traditions and beliefs into a vibrant mosaic that continues to define its diverse and resilient spirit today."
      />
      <CTA />
    </>
  );
}

function Kazmia_Outlet() {
  return (
    <>
      <section className="md:px-20">
        <p className="text-center text-white-300 text-xl mx-auto">
          Kazmia, a land steeped in mysticism and ancient lore, beckons with its
          winding valleys and towering peaks cloaked in mist. Its cities,
          adorned with intricate carvings and vibrant markets bustling with
          merchants, tell tales of a rich cultural tapestry woven through
          centuries. In the heart of Kazmia, whispered legends speak of
          forgotten ruins where echoes of old magic still resonate, drawing
          adventurers seeking both knowledge and fortune. Here, amidst verdant
          forests and shimmering lakes, the spirit of Kazmia thrives, boundless
          and enigmatic, waiting to be discovered by those brave enough to delve
          into its secrets.
        </p>
      </section>
    </>
  );
}
