import { Button } from "./Button";

export function CTA() {
  return (
    <div className="bg-black text-white">
      <section className="flex justify-center items-center flex-col gap-9 py-14">
        <h2 className="text-center">PLAN YOUR JOURNEY TODAY</h2>
        <Button text="Get in touch" to="/contact" />
      </section>
    </div>
  );
}
