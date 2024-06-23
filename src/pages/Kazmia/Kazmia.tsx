import { Header } from "../../components/header";
import { Destination } from "../../components/destination";
import { CTA } from "../../components/CTA";
import { History } from "../../components/History";

export function Kazmia() {
  return (
    <>
      <Header heading="Kazmia" img="headerBg" />
      <Kazmia_Outlet />
      <section>
        <h2 className="text-5xl text-center text-secondary-400 mb-32">
          Top Destination
        </h2>
        <Destination
          heading="Silvershade Forest"
          Paragraph="Nestled in the heart of Kazmia, Silvershade Forest is renowned for its towering ancient trees and ethereal silver-hued foliage, said to shimmer under moonlight, creating an otherworldly atmosphere cherished by nature lovers and adventurers alike."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Celestial Peak"
          Paragraph="The highest point in Kazmia, Celestial Peak offers breathtaking vistas of jagged mountain ranges, winding rivers, and cascading waterfalls, attracting hikers and climbers seeking both challenge and serenity amidst its pristine alpine landscapes."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Aurelia's Labyrinth"
          Paragraph="An enigmatic maze of ancient stone corridors and chambers, Aurelia's Labyrinth is steeped in myth and mystery, rumored to hold cryptic inscriptions and hidden treasures that lure scholars, historians, and treasure seekers alike into its labyrinthine depths."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Azure Shores"
          Paragraph=""
          button="Get Started"
          img=""
        />
        <Destination
          heading="Eternal Citadel"
          Paragraph=" A monumental fortress-city perched atop a sheer cliff, the Eternal Citadel stands as a testament to Kazmia's rich history and architectural prowess, with its intricate stonework, grand halls, and panoramic views that captivate history enthusiasts and travelers seeking a glimpse into the past."
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
