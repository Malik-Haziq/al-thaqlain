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
          heading="Kyoto, Japan"
          Paragraph="Samara's love for history and culture draws her to Kyoto, where she explores ancient temples, serene gardens, and traditional tea houses, immersing herself in the city's rich heritage."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Machu Picchu, Peru"
          Paragraph="Fascinated by archaeology and adventure, Samara hikes through the Andes to Machu Picchu, marveling at the breathtaking ruins and panoramic mountain views that transport her to another era."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Paris, France"
          Paragraph="Samara indulges her passion for art and romance in Paris, wandering through the Louvre, strolling along the Seine, and savoring delicious pastries in quaint cafes, soaking in the city's timeless charm."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Maui, Hawaii"
          Paragraph="Seeking tranquility and natural beauty, Samara finds solace in Maui's pristine beaches, lush rainforests, and dramatic waterfalls, embracing the island's laid-back atmosphere and rejuvenating vibes."
          button="Get Started"
          img=""
        />
        <Destination
          heading="Serengeti National Park, Tanzania"
          Paragraph="With a deep appreciation for wildlife and conservation, Samara embarks on a safari in the Serengeti, witnessing awe-inspiring wildlife migrations and breathtaking landscapes that ignite her sense of wonder and admiration for nature's wonders."
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
