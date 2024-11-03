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
import { Whatsapp } from "../../components/Whatsapp";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Hotel } from "../../types";
import { ImageGallery } from "overlay-image-gallery";
import { Loader } from "../../components/Loader";

export function HotelDetails() {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(
          `https://althaqlain-backend-90833a98168c.herokuapp.com/api/hotels/${id}`
        );
        setHotel(response.data);
        setImages(
          response.data.images_urls.map(
            (img: string) =>
              `https://althaqlain-backend-90833a98168c.herokuapp.com/${img}`
          )
        );
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      }
    };
    fetchHotelDetails();
  }, [id]);

  if (!hotel) {
    return <Loader />;
  }

  return (
    <>
    <Whatsapp></Whatsapp>
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
          tag={tag}
          rating={hotel.rating}
          long={hotel.loc_long}
          lat={hotel.loc_lat}
          gallery={images}
          description={hotel.description}
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
  tag: string;
  rating: string;
  long: number;
  lat: number;
  gallery: string[];
  description: string;
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
              className="bg-secondary-200 rounded font-semibold py-4 px-8 duration-200 hover:bg-secondary-100"
            >
              Reserve your apartement stay
            </a>
          </div>
        </div>
        <div className="flex justify-between gap-3 cursor-point mb-8">
          <div className="basis-3/4">
            <ImageGallery
              images={_props.gallery}
              width={800}
              height={600}
              grid="v2"
            />
          </div>
          <div className="basis-1/4">
            <div className="border rounded mb-4">
              <div className="border-b-[1px] p-4 flex items-center justify-between">
                <h3 className=" text-white-400 text-lg font-semibold font-openSans">
                  Exceptional
                </h3>
                <div className="flex gap-2 items-center">
                  <p className="p-1 px-2 rounded bg-secondary-200 text-white-500">
                    {_props.rating}
                  </p>
                </div>
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
      <div className="flex gap-10 mb-16">
        <pre className="text-white-400">{_props.description}</pre>
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
      style={{ height: "288px", width: "100%", zIndex: 1 }}
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
