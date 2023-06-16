import { Product } from './types/Product';

export const products: Product[] = [ 
  {
    name: 'Coffee Mug',
    slug: 'coffee-mug',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    category: 'Home & Kitchen',
    brand: 'Mugify',
    price: 9.99,
    countInStock: 10,
    description:
      'A ceramic mug with a stylish design and a comfortable handle.',
    rating: '4.5',
    numReviews: 23,
  },
  {
    name: 'Sneakers',
    slug: 'sneakers',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782',
    category: 'Shoes',
    brand: 'Sneakz',
    price: 49.99,
    countInStock: 5,
    description:
      'A pair of casual sneakers with a breathable mesh upper and a durable rubber sole.',
    rating: '4.2',
    numReviews: 18,
  },
  {
    name: 'Lipstick',
    slug: 'lipstick',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
    category: 'Beauty',
    brand: 'Lipsy',
    price: 14.99,
    countInStock: 15,
    description:
      'A matte lipstick with a rich pigment and a long-lasting formula.',
    rating: '4.7',
    numReviews: 34,
  },
  {
    name: 'Chair',
    slug: 'chair',
    image: 'https://images.unsplash.com/photo-1519643381401-22c77e60520e',
    category: 'Furniture',
    brand: 'Chairio',
    price: 79.99,
    countInStock: 8,
    description: 'A modern chair with a wooden frame and a leather seat.',
    rating: '4.3',
    numReviews: 12,
  },
  {
    name: 'Pepsi Black',
    slug: 'pepsi-black',
    image:
      'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVwc2l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Beverages',
    brand: 'Pepsi',
    price: 1.99,
    countInStock: 20,
    description: 'A zero-calorie cola with a bold and refreshing taste.',
    rating: '4.1',
    numReviews: 28,
  },
  {
    name: 'Apple Watch Series 6',
    slug: 'apple-watch-series-6',
    image:
      'https://images.unsplash.com/photo-1600269452129-6fbd36f39d14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjB3YXRjaCUyMHNlcmllcyUyMDZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Electronics',
    brand: 'Apple',
    price: 399.99,
    countInStock: 3,
    description:
      'A smartwatch with a GPS, blood oxygen sensor, heart rate monitor, and more.',
    rating: '4.8',
    numReviews: 45,
  },
  {
    name: 'Camera',
    slug: 'camera',
    image:
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Electronics',
    brand: 'Canon',
    price: 599.99,
    countInStock: 7,
    description:
      'A digital camera with a 24.2 megapixel sensor and a 3-inch LCD screen.',
    rating: '4.6',
    numReviews: 32,
  },

];

export const shopProducts: Product[] = [
  {
    name: 'Nike Air Max 90',
    slug: 'nike-air-max-90',
    image:
      'https://images.nike.com/is/image/DotCom/CW7483_100?$NIKE_PWP_GRAY$&wid=420&hei=420',
    category: 'sneakers',
    brand: 'Nike',
    price: 120,
    countInStock: 10,
    description:
      'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays and classic TPU accents. Fresh colors give a modern look while Max Air cushioning adds comfort to your journey.',
    rating: '4.5',
    numReviews: 25,
  },
  {
    name: 'Adidas Ultraboost 21',
    slug: 'adidas-ultraboost-21',
    image:
      'https://image.goat.com/750/attachments/product_template_pictures/images/015/298/767/original/77243_00.png.png',
    category: 'sneakers',
    brand: 'Adidas',
    price: 180,
    countInStock: 15,
    description:
      'Ultraboost reinvented. These running shoes reboot key performance technologies to give you a confident and energy-filled run. The knit upper has a second-skin fit and is built with motion-weave technology for adaptive stretch and support. Dual-density cushioning delivers medial support and an energized ride.',
    rating: '4.7',
    numReviews: 32,
  },
  {
    name: 'Reebok Nano X1',
    slug: 'reebok-nano-x1',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/009/249/006/original/259509_00.png.png',
    category: 'sneakers',
    brand: 'Reebok',
    price: 130,
    countInStock: 12,
    description:
      "The official shoe of fitness. These men's shoes have a Flexweave® knit upper that's breathable yet durable, with integrated support for multidirectional movement. Responsive cushioning helps keep transitions smooth and the energy flowing.",
    rating: '4.6',
    numReviews: 28,
  },
];
