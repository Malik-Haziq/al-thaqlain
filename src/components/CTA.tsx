import { Button } from "./Button";

export function CTA() {
  return (
    <div className="text-white-100 bg-gray-300">
      <section className="flex justify-center items-center flex-col gap-9 py-14">
        <h2 className="text-center text-black-100">PLAN YOUR JOURNEY TODAY</h2>
        <Button text="Get in touch" to="/contact" white={true} />
      </section>
    </div>
  );
}
