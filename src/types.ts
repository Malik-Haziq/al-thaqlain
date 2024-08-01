export interface Place {
    name: string;
    value: string;
}

export interface Quantity {
    quantity: string;
    value: string;
}

export interface Hotel {
    id: string,
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    base_image_url: string;
    images_urls: string[];
    loc_lat: number;
    loc_long: number;
    price: number;
    discounted_price: number;
    rating: string;
    bed: number;
    living_room: number;
    bathroom: number;
    kitchen: number;
    reservedRoom: number;
    description: string
  }
