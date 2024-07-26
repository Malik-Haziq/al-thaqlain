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
    rating: string;
  }
