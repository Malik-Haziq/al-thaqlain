import { Button } from "../../components/Button";

export function Home() {
  return (
    <>
      <header className="bg-headerBg h-[80vh] bg-no-repeat bg-cover flex justify-center">
        <div className="max-w-screen-xl p-4 mx-auto flex flex-col gap-4 justify-center">
          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-medium text-white font-playfairDisplay">
            Helping you visit&nbsp;
            <span className="text-secondary-400">Islamic regions</span>
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl sm:w-2/3 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nulla
            eos! Eum natus odio vitae libero repellat, reprehenderit quas
            numquam.
          </p>
          <Button text="Get in touch" />
        </div>
      </header>
    </>
  );
}
