import { Product, Testimonial, Category } from './types';

export const CATEGORIES: Category[] = ['Fertilizers', 'Pesticides', 'Seeds', 'Tools', 'Growth Regulators'];

export const PRODUCTS: Product[] = [
  {
    id: 'f1',
    name: 'Organic Compost Plus',
    category: 'Fertilizers',
    description: 'Enriched organic fertilizer for all types of crops. Increases soil fertility naturally.',
    price: 450,
    unit: '50kg Bag',
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'f2',
    name: 'NPK 19:19:19',
    category: 'Fertilizers',
    description: 'Water-soluble fertilizer for balanced growth of plants. Ideal for drip irrigation.',
    price: 1200,
    unit: '25kg Bag',
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p1',
    name: 'Neem Shield Insecticide',
    category: 'Pesticides',
    description: 'Natural neem-based pesticide. Effective against wide range of pests.',
    price: 350,
    unit: '1L Bottle',
    image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 's1',
    name: 'Hybrid Tomato Seeds',
    category: 'Seeds',
    description: 'High-yielding hybrid tomato seeds. Disease resistant and uniform fruit size.',
    price: 150,
    unit: '10g Packet',
    image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 's2',
    name: 'Premium Paddy Seeds',
    category: 'Seeds',
    description: 'Fine quality paddy seeds with high germination rate. Suitable for multiple seasons.',
    price: 850,
    unit: '25kg Bag',
    image: 'https://images.unsplash.com/photo-1536633100187-0346336499f1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 't1',
    name: 'Ergonomic Hand Trowel',
    category: 'Tools',
    description: 'Durable stainless steel hand trowel with comfortable grip for easy digging.',
    price: 250,
    unit: 'Piece',
    image: 'https://images.unsplash.com/photo-1617576621334-884882c93584?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'g1',
    name: 'Root Booster',
    category: 'Growth Regulators',
    description: 'Promotes vigorous root development and nutrient uptake in young plants.',
    price: 180,
    unit: '250ml Bottle',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ramesh Kumar',
    location: 'Guntur, AP',
    comment: 'The quality of seeds I bought from Hosanna Tejas Agri Traders is exceptional. My yield increased by 20% this season.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Srinivas Rao',
    location: 'Vijayawada, AP',
    comment: 'Best shop for organic fertilizers. Their expert guidance helped me choose the right pesticides for my chili crop.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Venkatesh P.',
    location: 'Nellore, AP',
    comment: 'Very reliable and prompt service. The online booking feature is very convenient for farmers like us.',
    rating: 4,
  },
];

export const CONTACT_INFO = {
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  email: 'info@hosannatejasagri.com',
  address: 'Main Road, Agri Market Area, Guntur, Andhra Pradesh - 522001',
  hours: 'Mon - Sat: 8:00 AM - 8:00 PM, Sun: Closed',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61243.0592966858!2d80.4038165034668!3d16.306652200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb178fd27%3A0x13a699228b0941d8!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1713110000000!5m2!1sen!2sin',
};
