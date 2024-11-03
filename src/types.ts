export interface Place {
  name: string;
  value: string;
}

export interface Quantity {
  quantity: string;
  value: string;
}

export interface Hotel {
  id: string;
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
  description: string;
}

export interface RegisterFormData {
  name: string;
  lastName: string;
  passportNumber: string;
  phoneNumber: number;
  passportImage: string;
  personalImage: string;
  termAndConditions: boolean;
}

export interface FormData {
  full_name: string;
  email: string;
  message: string;
}
