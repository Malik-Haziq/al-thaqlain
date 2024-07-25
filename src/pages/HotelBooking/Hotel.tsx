import mug from "../../assets/hotels/icons/mug.svg";
import home from "../../assets/hotels/icons/home.svg";
import resturant from "../../assets/hotels/icons/resturant.svg";
import parking from "../../assets/hotels/icons/parking.svg";
import wifi from "../../assets/hotels/icons/wifi.svg";
import bath from "../../assets/hotels/icons/bath.svg";
import airpot from "../../assets/hotels/icons/airpot.svg";
import eye from "../../assets/hotels/icons/eye.svg";
import service from "../../assets/hotels/icons/service.svg";
import location from "../../assets/hotels/icons/addres.svg";
import tag from "../../assets/hotels/icons/tag.svg";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Hotel } from "../../types";

export function HotelDetails() {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(
          `https://althaqlain-backend-90833a98168c.herokuapp.com/api/hotels/${id}`
        );
        setHotel(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      }
    };
    fetchHotelDetails();
  }, []);

  if (!hotel) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <>
      <section>
        {/* Nav bar */}
        <div className="mb-12 border-b-[1px] py-3">
          <a
            href="#"
            className="p-4 px-16 duration-200 text-white-400 text-lg font-medium hover:bg-white-500 hover:text-black-400"
          >
            Overview
          </a>
          <a
            href="#"
            className="p-4 px-16 duration-200 text-white-400 text-lg font-medium hover:bg-white-500 hover:text-black-400"
          >
            Apartment info & price
          </a>
          <a
            href="#"
            className="p-4 px-16 duration-200 text-white-400 text-lg font-medium hover:bg-white-500 hover:text-black-400"
          >
            Facilities
          </a>
          <a
            href="#"
            className="p-4 px-16 duration-200 text-white-400 text-lg font-medium hover:bg-white-500 hover:text-black-400"
          >
            The fine print
          </a>
          <a
            href="#"
            className="p-4 px-16 duration-200 text-white-400 text-lg font-medium hover:bg-white-500 hover:text-black-400"
          >
            Guest reviews
          </a>
        </div>
        {/* Hotel details*/}
        <Details
          name={hotel?.name}
          address={hotel.address}
          mapLink=" "
          tag={tag}
          rating={hotel.rating}
          long={hotel.loc_long}
          lat={hotel.loc_lat}
        />

        <div>
          <h2 className="font-semibold text-2xl text-white-400 font-openSans mb-6">
            Most popular facilities
          </h2>

          <div className="flex gap-2 flex-wrap">
            <Cards heading="Breakfast" img={mug} />
            <Cards heading="Free on-site parking" img={parking} />
            <Cards heading="Free WiFi" img={wifi} />
            <Cards heading="Airport shuttle" img={airpot} />
            <Cards heading="Room service" img={service} />
          </div>
        </div>
      </section>
    </>
  );
}

function Details(_props: {
  name: string;
  address: string;
  mapLink: string;
  tag: string;
  rating: string;
  long: number;
  lat: number;
}) {
  return (
    <>
      <div>
        <div className="flex gap-2 items-center mb-8">
          <div className="basis-3/4">
            <div>
              <h2 className="text-white-500 mb-4 text-2xl font-semibold font-openSans">
                {_props.name}
              </h2>
              <div className="flex gap-2">
                <img src={location} alt="location" className="w-6 " />
                <p className="text-base">{_props.address}</p>
              </div>
            </div>
          </div>
          <div>
            <a
              href="#"
              className="bg-secondary-500 rounded font-semibold py-4 px-8 duration-200 hover:bg-secondary-600"
            >
              Reserve your apartement stay
            </a>
          </div>
        </div>
        <div className="flex gap-3 cursor-point mb-8">
          <div className="basis-3/4">
            <div className="flex gap-2">
              <div className="flex gap-2 flex-col mb-4">
                <img
                  src="src/assets/hotels/hotel-1.jpg"
                  alt="hotel-1"
                  className="max-h-40"
                />
                <img
                  src="src/assets/hotels/hotel-2.jpg"
                  alt="hotel-2"
                  className="max-h-40"
                />
              </div>
              <div>
                <img
                  src="src/assets/hotels/base.jpg"
                  alt="base"
                  className="max-w-xl"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <img
                src="src/assets/hotels/hotel-3.jpg"
                alt="hotels"
                className="max-h-24"
              />
              <img
                src="src/assets/hotels/hotel-6.jpg"
                alt="hotels"
                className="max-h-24"
              />
              <img
                src="src/assets/hotels/hotel-4.jpg"
                alt="hotels"
                className="max-h-24"
              />
              <img
                src="src/assets/hotels/hotel-5.jpg"
                alt="hotels"
                className="max-h-24"
              />
              <img
                src="src/assets/hotels/hotel-6.jpg"
                alt="hotels"
                className="max-h-24"
              />
            </div>
          </div>
          <div className="basis-1/4">
            <div className="border rounded mb-4">
              <div className="border-b-[1px] p-4 flex items-center justify-between">
                <h3 className=" text-white-400 text-lg font-semibold font-openSans">
                  Exceptional
                </h3>
                <div className="flex gap-2 items-center">
                  <p className="text-sm text-white-300">7 reviews</p>
                  <p className="p-1 px-2 rounded bg-secondary-400 text-white-500">
                    {_props.rating}
                  </p>
                </div>
              </div>
              <div className="p-4 border-b-[1px]">
                <p className="text-sm text-white-300 mb-6">
                  “I recently stayed at this Apartment and had a fantastic
                  experience! The place was really nice and the staff was
                  incredibly friendly. They went...”
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex gap-3 items-center">
                    <img
                      src="src/assets/hotels/trust.jpg"
                      alt="trust"
                      className="w-6 rounded-2xl"
                    />
                    <p>Mesh</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img
                      src="src/assets/hotels/Pk.png"
                      alt="trust"
                      className="w-4"
                    />
                    <p>Pakistan</p>
                  </div>
                </div>
              </div>
              <div className=" p-2 flex items-center justify-between">
                <h3 className=" text-white-400 text-lg font-semibold font-openSans">
                  Staff
                </h3>
                <a
                  href="#"
                  className="p-1 px-2 rounded bg-secondary-400 text-white-500"
                >
                  10
                </a>
              </div>
            </div>
            <div>
              <Map
                hotelName={_props.name}
                long={_props.long}
                lat={_props.lat}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mb-14">
          <Cards heading="Apartments" img={home} />
          <Cards heading="Breakfast" img={mug} />
          <Cards heading="Balcony" img={mug} />
          <Cards heading="Restaurant" img={resturant} />
          <Cards heading="Free on-site parking" img={parking} />
          <Cards heading="Free WiFi" img={wifi} />
          <Cards heading="Private bathroom" img={bath} />
          <Cards heading="Airport shuttle" img={airpot} />
          <Cards heading="View" img={eye} />
          <Cards heading="Room service" img={service} />
        </div>
      </div>
      <div className="flex gap-10">
        <div className="basis-3/4">
          <p className="mb-4 text-white-200 text-base">
            You're eligible for a Genius discount at Gold Crest Presidential
            Apartments DHA Lahore Phase 4! To save at this property, all you
            have to do is sign in.
          </p>
          <p className="mb-4 text-white-200 text-base">
            Featuring garden views, Gold Crest Presidential Apartments DHA
            Lahore Phase 4 features accommodation with terrace, around 29 km
            from Wagah Border. Among the facilities of this property are a
            restaurant, a 24-hour front desk and a lift, along with free WiFi
            throughout the property. There is free private parking and the
            property offers paid airport shuttle service.
          </p>
          <p className="mb-4 text-white-200 text-base">
            The units at the apartment complex come with air conditioning, a
            seating area, a flat-screen TV with streaming services, a kitchen, a
            dining area, a safety deposit box and a private bathroom with a hot
            tub, bathrobes and slippers. A dishwasher, an oven and microwave are
            also featured, as well as a coffee machine and a kettle. At the
            apartment complex, the units are fitted with bed linen and towels.
          </p>
          <p className="mb-4 text-white-200 text-base">
            À la carte and continental breakfast options with warm dishes, local
            specialities and fresh pastries are available every morning at the
            apartment. There is a coffee shop, and packed lunches are also
            available.
          </p>
          <p className="mb-4 text-white-200 text-base">
            A baby safety gate is also available for guests at Gold Crest
            Presidential Apartments DHA Lahore Phase 4.
          </p>
          <p className="mb-4 text-white-200 text-base">
            Packages Mall is 5 km from the accommodation, while Gaddafi Stadium
            is 11 km away. The nearest airport is Allama Iqbal International
            Airport, 7 km from Gold Crest Presidential Apartments DHA Lahore
            Phase 4.
          </p>
        </div>
        <div className="basis-1/4 bg-black-700 px-6 py-4 rounded bg-black-600">
          <h2 className="text-2xl text-white-400 mb-6 font-openSans">
            Property highlights
          </h2>
          <h3 className="text-base font-semibold text-white-400 mb-2 font-openSans">
            Perfect for a 12-night stay!
          </h3>
          <p className="text-white-200 text-sm mb-5">
            Top location: Highly rated by recent guests (10.0)
          </p>

          <h3 className="text-base font-semibold text-white-400 mb-2 font-openSans">
            Breakfast info
          </h3>

          <p className="text-white-200 text-sm mb-5">
            Continental, Italian, Halal
          </p>

          <h3 className="text-base font-semibold text-white-400 mb-2 font-openSans">
            Apartments with:
          </h3>

          <div className="mb-6">
            <div className="flex items-center gap-4 mb-2">
              <img src={service} alt="Room Service" className="w-4" />
              <p className="text-white-200">Room Service</p>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <img src={mug} alt="Breakfast" className="w-4" />
              <p className="text-white-200">Breakfast</p>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <img src={wifi} alt="Wifi" className="w-4" />
              <p className="text-white-200">Wifi</p>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <img src={resturant} alt="Restaurant" className="w-4" />
              <p className="text-white-200">Restaurant</p>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <img src={bath} alt="Private bathroom" className="w-4" />
              <p className="text-white-200">Private bathroom</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#"
              className="bg-secondary-500 block py-2 rounded text-lg font-semibold duration-200 hover:bg-secondary-600"
            >
              Reserve
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function Cards(_props: { img: string; heading: string }) {
  return (
    <>
      <div className="flex border border-gray-200 rounded gap-6 py-4 px-8  items-center">
        <div>
          <img src={_props.img} alt="img" className="w-6 cursor-pointer" />
        </div>

        <p className="text-white-600 text-xl">{_props.heading}</p>
      </div>
    </>
  );
}

function Map(_props: { hotelName: string; lat: number; long: number }) {
  const position = [_props.long, _props.lat] as [number, number];

  const markerIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "288px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={markerIcon}>
        <Popup>{_props.hotelName}</Popup>
      </Marker>
    </MapContainer>
  );
}
