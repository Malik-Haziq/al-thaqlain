import { Header } from "../../components/header";
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

export function Menu() {
  return (
    <>
      <Header heading="Menu" img="headerBg" />
      {/* <Price_Card /> */}
      <Menu_Outlet />
    </>
  );
}

// function Price_Card() {
//   return (
//     <>
//       <section>
//         <h2 className="text-6xl text-center text-secondary-400 mb-32">
//           Deals Price
//         </h2>
//         <div className="flex justify-center gap-7 flex-wrap">
//           <div className="border w-96 h-96 p-8">
//             <h3 className="text-secondary-400 text-center text-4xl mb-8 ">
//               Deal no 1
//             </h3>
//             <p className="text-center text-2xl mb-8">MINIMUM 20 PERSON</p>
//             <ul className="flex gap-2 justify-center flex-wrap mb-12">
//               <li className="text-xl text-white-300 bg-black-500 p-2 w-36 text-center cursor-pointer hover:bg-black-600">
//                 BREAKFAST
//               </li>
//               <li className="text-xl text-white-300 bg-black-500 p-2 w-36 text-center cursor-pointer hover:bg-black-600">
//                 LUNCH
//               </li>
//               <li className="text-xl text-white-300 bg-black-500 p-2 w-36 text-center cursor-pointer hover:bg-black-600">
//                 DINER
//               </li>
//             </ul>
//             <div className="flex gap-2">
//               <a
//                 href="#"
//                 className="text-xl text-white-300 bg-black-500 p-2 w-36 text-center cursor-pointer hover:bg-black-600"
//               >
//                 5$
//               </a>
//               <a
//                 href="#"
//                 className="text-xl text-white-300 bg-black-500 p-2 w-36 text-center cursor-pointer hover:bg-black-600"
//               >
//                 Order
//               </a>
//             </div>
//           </div>
//           <div className="border w-96 h-96 p-8"></div>
//           <div className="border w-96 h-96 p-8"></div>
//           <div className="border w-96 h-96 p-8"></div>
//           <div className="border w-96 h-96 p-8"></div>
//         </div>
//       </section>
//     </>
//   );
// }

function Menu_Outlet() {
  return (
    <>
      <section>
        <h2 className="text-secondary-400 text-center text-6xl mb-20 font-openSans font-bold">
          Deal-1{" "}
          <span className="font-medium text-white-100 text-5xl">($5)</span>
        </h2>

        <div className="flex gap-4 flex-wrap justify-center">
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={omlate}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl text-secondary-400 mb-4">BREAKFAST</h3>
              <p className="text-lg text-white-400 mb-8">
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
              <h3 className="text-4xl text-secondary-400 mb-4">LUNCH</h3>
              <p className="text-lg text-white-400 mb-8">
                Qorma - Roti - Cold Drink{" "}
              </p>
            </div>
          </div>
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={palao}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl text-secondary-400 mb-4">DINER</h3>
              <p className="text-lg text-white-400 mb-8">
                Sabzi-Polao-Dal-Cold Drink{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-secondary-400 text-center text-6xl mb-20 font-openSans font-bold">
          Deal-2{" "}
          <span className="font-medium text-white-100 text-5xl">($7)</span>
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={roti}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl text-secondary-400 mb-4">BREAKFAST</h3>
              <p className="text-lg text-white-400 mb-8">
                Omelette - Malai - Tea - Roti{" "}
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
              <h3 className="text-4xl text-secondary-400 mb-4">LUNCH</h3>
              <p className="text-lg text-white-400 mb-8">
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
              <h3 className="text-4xl text-secondary-400 mb-4">DINER</h3>
              <p className="text-lg text-white-400 mb-8">
                Qorma - Sabzi -Dal- Cold drink Fruit
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-secondary-400 text-center text-6xl mb-20 font-openSans font-bold">
          Deal-3{" "}
          <span className="font-medium text-white-100 text-5xl">($9)</span>
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={milk}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl text-secondary-400 mb-4">BREAKFAST</h3>
              <p className="text-lg text-white-400 mb-8">
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
              <h3 className="text-4xl text-secondary-400 mb-4">LUNCH</h3>
              <p className="text-lg text-white-400 mb-8">
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
              <h3 className="text-4xl text-secondary-400 mb-4">DINER</h3>
              <p className="text-lg text-white-400 mb-8">
                Biryani - Mutton Qorma -Dal - Roti kheer - Cold Drink - Salad -
                Water - Zetoon
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-secondary-400 text-center text-6xl mb-20 font-openSans font-bold">
          Deal-4{" "}
          <span className="font-medium text-white-100 text-5xl">($10)</span>
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={tea}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl text-secondary-400 mb-4">BREAKFAST</h3>
              <p className="text-lg text-white-400 mb-8">
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
              <h3 className="text-4xl text-secondary-400 mb-4">LUNCH</h3>
              <p className="text-lg text-white-400 mb-8">
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
              <h3 className="text-4xl text-secondary-400 mb-4">DINER</h3>
              <p className="text-lg text-white-400 mb-8">
                Beef Qorma- Biryani - Chiken Rost- Roti Custard-Cold drink -
                Water - Fruit - Salad 4 Type
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-secondary-400 text-center text-6xl mb-20 font-openSans font-bold">
          OPEN BUFFET
          <span className="font-medium text-white-100 text-5xl">($18)</span>
        </h2>

        <div className="flex gap-4 flex-wrap justify-centers">
          <div className="border w-96 cursor-pointer transition-all hover:-translate-y-4">
            <img
              src={jam}
              className="w-96 mb-4  h-80 object-cover"
              alt="Food img"
            />
            <div className="p-6">
              <h3 className="text-4xl text-secondary-400 mb-4">BREAKFAST</h3>
              <p className="text-lg text-white-400 mb-8">
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
              <h3 className="text-4xl text-secondary-400 mb-4">LUNCH</h3>
              <p className="text-lg text-white-400 mb-8">
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
              <h3 className="text-4xl text-secondary-400 mb-4">DINER</h3>
              <p className="text-lg text-white-400 mb-8">
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
