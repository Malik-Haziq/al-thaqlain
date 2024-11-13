import omlate from "../../assets/food/omlate.webp";
import qorma from "../../assets/food/qorma.webp";
import palao from "../../assets/food/palao.avif";
import roti from "../../assets/food/roti.webp";
import macroni from "../../assets/food/Macroni.webp";
import sabzi from "../../assets/food/sabzi.webp";
import milk from "../../assets/food/milk.webp";
import custard from "../../assets/food/custard.webp";
import mutton from "../../assets/food/nutton.webp";
import tea from "../../assets/food/Tea.webp";
import chicken from "../../assets/food/chicken.webp";
import fries from "../../assets/food/Fries.webp";
import jam from "../../assets/food/jam.webp";
import fish from "../../assets/food/fish.webp";
import pizza from "../../assets/food/Pizza.webp";
import Pdf from "../../assets/pdf/food.pdf";
import menu from "../../assets/pdf/pdf-img.png";
import { Whatsapp } from "../../components/Whatsapp";

export function Menu() {
  return (
    <>
      <Whatsapp></Whatsapp>
      <Menu_Header />
      <Menu_Outlet />
    </>
  );
}

function Menu_Header() {
  return (
    <>
      <section className="flex gap-52 flex-wrap mt-24 h- items-center">
        <div>
          <h1 className="text-6xl text-black-100 mb-12">Green Meal Food</h1>
          <p className="text-black-200 text-lg mb-12 ">
            Green Meal Food provides the best deals on fresh, nutritious meals
            that are <br></br> perfect for any diet. Our offerings are crafted
            from the freshest, locally-sourced <br></br> ingredients to ensure
            maximum flavor and health benefits. With a variety of <br></br>{" "}
            delicious options at unbeatable prices, Green Meal Food makes it
            easy to <br></br> enjoy wholesome, eco-friendly meals without
            breaking the bank. Experience <br></br> the perfect blend of
            quality, affordability, and sustainability with every bite.
          </p>
          <div className="flex gap-2">
            <a
              href={Pdf}
              className="bg-secondary-100 py-3 px-7 rounded hover:bg-black-100 font-medium"
              target="_blank"
            >
              Preview
            </a>
            <a
              href={Pdf}
              className="bg-black-100 py-3 px-5 rounded hover:bg-secondary-100 font-medium"
              download={Pdf}
              target="_blank"
            >
              Download
            </a>
          </div>
        </div>
        <div className="">
          <img src={menu} className="w-56 object-cover" alt="pdf img" />
        </div>
      </section>
    </>
  );
}

function Menu_Outlet() {
  return (
    <>
      <h2 className="text-black-100 text-center text-6xl mb-12 font-openSans font-bold">
        Food Deals
      </h2>
      <p className=" text-black-100 text-2xl text-center mb-20">
        Providing the best food deals of Green Meal
      </p>
      <section>
        <h2 className="text-black-100 text-center text-6xl mb-20 font-openSans font-bold">
          Deal-1
          <span className="font-medium text-secondary-100 text-5xl">($5)</span>
        </h2>

        <div className="flex gap-4 flex-wrap justify-center">
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={omlate}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl mb-4 text-black-400 font-medium">BREAKFAST</h3>
              <p className="text-lg text-black-200 mb-8">
                Omelette - Roti - Tea
              </p>
            </div>
          </div>
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={qorma}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl mb-4 text-black-400 font-medium">LUNCH</h3>
              <p className="text-lg text-black-200 mb-8">
                Qorma - Roti - Cold Drink
              </p>
            </div>
          </div>
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={palao}
              className="w-96 mb-4 h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl mb-4 text-black-400 font-medium">DINER</h3>
              <p className="text-lg text-black-200 mb-8">
                Sabzi-Polao-Dal-Cold Drink
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-black-100 text-center text-6xl mb-20 font-openSans font-bold">
          Deal-2
          <span className="font-medium text-secondary-100 text-5xl">($7)</span>
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={roti}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl mb-4 text-black-400 font-medium">BREAKFAST</h3>
              <p className="text-lg text-black-200 mb-8">
                Omelette - Malai - Tea - Roti
              </p>
            </div>
          </div>
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={macroni}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl mb-4 text-black-400 font-medium">LUNCH</h3>
              <p className="text-lg text-black-200 mb-8">
                Biryani - Dal - Makroni - Custard Cold Drink - Fruit - Water
              </p>
            </div>
          </div>
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={sabzi}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl mb-4 text-black-400 font-medium">DINER</h3>
              <p className="text-lg text-black-200 mb-8">
                Qorma - Sabzi -Dal- Cold drink Fruit
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-black-100 text-center text-6xl mb-20 font-openSans font-bold">
          Deal-3
          <span className="font-medium text-secondary-100 text-5xl">($9)</span>
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={milk}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl mb-4 text-black-400 font-medium">BREAKFAST</h3>
              <p className="text-lg text-black-200 mb-8">
                Omelette - Malai - Tea - Roti Chana -Hony -Milk
              </p>
            </div>
          </div>
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={custard}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl mb-4 text-black-400 font-medium">LUNCH</h3>
              <p className="text-lg text-black-200 mb-8">
                Beef Qorma-Makroni-Custard- Cold drink - Water - Fruit Sada
                Chawa
              </p>
            </div>
          </div>
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={mutton}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl mb-4 text-black-400 font-medium">DINER</h3>
              <p className="text-lg text-black-200 mb-8">
                Biryani - Mutton Qorma -Dal - Roti kheer - Cold Drink - Salad -
                Water - Zetoon
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-black-100 text-center text-6xl mb-20 font-openSans font-bold">
          Deal-4
          <span className="font-medium text-secondary-100 text-5xl">($10)</span>
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={tea}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl mb-4 text-black-400 font-medium">BREAKFAST</h3>
              <p className="text-lg text-black-200 mb-8">
                Omelette - Malai -Jam - Tea Roti - Hony Milk
              </p>
            </div>
          </div>
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={fries}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl mb-4 text-black-400 font-medium">LUNCH</h3>
              <p className="text-lg text-black-200 mb-8">
                Sada Chawal- Mutton Qorma -Dal - Roti Finger Chips- Cold Drink -
                Salad - Fruit 3 Type . Water - Zetoon
              </p>
            </div>
          </div>
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={chicken}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl mb-4 text-black-400 font-medium">DINER</h3>
              <p className="text-lg text-black-200 mb-8">
                Beef Qorma- Biryani - Chiken Rost- Roti Custard-Cold drink -
                Water - Fruit - Salad 4 Type
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-secondary-100 text-center text-6xl mb-20 font-openSans font-bold">
          OPEN BUFFET
          <span className="font-medium text-black-100 text-5xl">($18)</span>
        </h2>

        <div className="flex gap-4 flex-wrap justify-centers">
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={jam}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl mb-4 text-black-400 font-medium">BREAKFAST</h3>
              <p className="text-lg text-black-200 mb-8">
                Omelette - Malai -Jam - Roti - Hony -Milk - Alo Fry chany - Tea
                - Juce
              </p>
            </div>
          </div>
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={fish}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl mb-4 text-black-400 font-medium">LUNCH</h3>
              <p className="text-lg text-black-200 mb-8">
                Sada Chawal- Fish Fry -Fried rice - Biryani Roti - Chiken Fry-
                Chiken Kabab Finger Chipe - Sabzi - Cold Drink - Kheer Salad 6
                Type- Fruit 4 Type . Water - Zetoon
              </p>
            </div>
          </div>
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={pizza}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl mb-4 text-black-400 font-medium">DINER</h3>
              <p className="text-lg text-black-200 mb-8">
                Beef Qorma- Chiken qorma - Polao Makroni -Dal -Chiken rost
                Finger chipe Kabab -Pizza -Fried rice -Salad 6 type Fruit 4 type
                - kheer -Tea -Water Lassi
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
