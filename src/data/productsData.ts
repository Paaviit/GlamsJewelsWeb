export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  new?: boolean;
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Diamond Kundan Ring',
    price: 1299,
    image: 'https://variquecollections.com/wp-content/uploads/2024/04/ring-30.webp',
    category: 'Rings',
    featured: true
  },
  {
    id: 'p2',
    name: 'Traditional Kundan Necklace',
    price: 899,
    image: 'https://vrikshamindia.com/cdn/shop/products/IMG_2858.jpg?v=1710357132',
    category: 'Necklaces',
    featured: true
  },
  {
    id: 'p3',
    name: 'Antique Gold Jhumkas',
    price: 599,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTIqVTE1qIVGiOxjgqsmVWKvQvza-QzPtI84DkTm3yCM61oOUUf56hlgVILU-vwxR2MChuQAzhDraCT05W_DuUGIlVSsysDpS5JFl0MmFAW54zrfjB7Eq7Z',
    category: 'Earrings',
    new: true
  },
  {
    id: 'p4',
    name: 'Gold Kada Bracelet',
    price: 699,
    image: 'https://priyaasi.com/cdn/shop/files/1_73654a0e-76b6-46db-ba9a-70264982d0f5.jpg?v=1721292242',
    category: 'Bracelets'
  },
  {
    id: 'p5',
    name: 'Ruby Polki Ring',
    price: 2499,
    image: 'https://store.krishnajewellers.com/cdn/shop/products/JGR0011-1.jpg?v=1737279120&width=1080',
    category: 'Rings',
    featured: true
  },
  {
    id: 'p6',
    name: 'Pearl Chandbali Earrings',
    price: 1199,
    image: 'https://images.pexels.com/photos/6858616/pexels-photo-6858616.jpeg',
    category: 'Earrings'
  },
  {
    id: 'p7',
    name: 'Silver Temple Bracelet',
    price: 399,
    image: 'https://i.etsystatic.com/6955363/r/il/0f9a53/2719031253/il_570xN.2719031253_178s.jpg',
    category: 'Bracelets',
    new: true
  },
  {
    id: 'p8',
    name: 'Layered Temple Necklace',
    price: 799,
    image: 'https://i.etsystatic.com/34412957/r/il/0c706d/5316123748/il_570xN.5316123748_8jid.jpg',
    category: 'Necklaces'
  }
];

export const categories = [
  {
    id: 'c1',
    name: 'Rings',
    image: 'https://images.pexels.com/photos/9428771/pexels-photo-9428771.jpeg'
  },
  {
    id: 'c2',
    name: 'Necklaces',
    image: 'https://images.pexels.com/photos/6858603/pexels-photo-6858603.jpeg'
  },
  {
    id: 'c3',
    name: 'Earrings',
    image: 'https://images.pexels.com/photos/6858615/pexels-photo-6858615.jpeg'
  },
  {
    id: 'c4',
    name: 'Bracelets',
    image: 'https://images.pexels.com/photos/6858610/pexels-photo-6858610.jpeg'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    title: 'Satisfied Customer',
    content: 'I ordered a custom engagement ring from Glams Jewels and it exceeded all my expectations. The craftsmanship was stunning and my fiancée was speechless when I proposed!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    title: 'Repeat Client',
    content: 'I\'ve purchased multiple pieces from Glams Jewels over the years and the quality is consistently excellent. Their customer service is also top-notch. Highly recommend!',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  },
  {
    id: 3,
    name: 'Sarah Thompson',
    title: 'Wedding Client',
    content: 'We got our wedding bands from Glams Jewels and couldn\'t be happier. The team helped us design matching bands that perfectly complement our style and relationship.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  }
];