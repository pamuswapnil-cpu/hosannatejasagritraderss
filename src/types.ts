export type Category = 'Fertilizers' | 'Pesticides' | 'Seeds' | 'Tools' | 'Growth Regulators';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  price?: number;
  image: string;
  unit?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
}

export interface Order {
  id: string;
  customerName: string;
  phoneNumber: string;
  address: string;
  products: { productId: string; quantity: number }[];
  totalAmount: number;
  status: 'Pending' | 'Confirmed' | 'Delivered';
  createdAt: string;
}
