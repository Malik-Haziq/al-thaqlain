import { Button } from "./Button";

export function CTA() {
  return (
    <div className="text-white-500 bg-black-100">
      <section className="flex justify-center items-center flex-col gap-9 py-14">
        <h2 className="text-center">PLAN YOUR JOURNEY TODAY</h2>
        <Button text="Get in touch" to="/contact" />
      </section>
    </div>
  );
}
