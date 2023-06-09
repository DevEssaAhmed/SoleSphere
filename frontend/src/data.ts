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
  {
    name: 'Sunglasses',
    slug: 'sunglasses',
    image:
      'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Accessories',
    brand: 'Ray-Ban',
    price: 149.99,
    countInStock: 12,
    description:
      'A pair of classic sunglasses with a metal frame and polarized lenses.',
    rating: '4.4',
    numReviews: 25,
  },
  {
    name: 'Headphones',
    slug: 'headphones',
    image:
      'https://images.unsplash.com/photo-1586953208448-b95a79798e8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Electronics',
    brand: 'Sony',
    price: 199.99,
    countInStock: 10,
    description:
      'A pair of wireless headphones with noise-canceling technology and a long battery life.',
    rating: '4.5',
    numReviews: 30,
  },
  {
    name: 'Plant',
    slug: 'plant',
    image:
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Home & Garden',
    brand: 'Planty',
    price: 19.99,
    countInStock: 15,
    description: 'A potted plant with a green and white striped foliage.',
    rating: '4.3',
    numReviews: 20,
  },
  {
    name: 'Car',
    slug: 'car',
    image:
      'https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Automotive',
    brand: 'Tesla',
    price: 49999.99,
    countInStock: 2,
    description:
      'An electric car with a sleek design and a high-performance battery.',
    rating: '4.9',
    numReviews: 50,
  },
  {
    name: 'Health Mask',
    slug: 'health-mask',
    image:
      'https://images.unsplash.com/photo-1583947213589-d0d37143e013?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoJTIwbWFza3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Health',
    brand: 'Masky',
    price: 4.99,
    countInStock: 30,
    description:
      'A disposable mask with a three-layer protection and a comfortable fit.',
    rating: '4.1',
    numReviews: 27,
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
      'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9f7a2c8f6b0c4a5e9b0aacd5015a3f1f_9366/Ultraboost_21_Shoes_White_FY0377_01_standard.jpg',
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
      'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7a6f0f9c0c5a4a8d9e3aacd5015a3f1f_9366/Reebok_Nano_X1_Shoes_Black_FZ0672_01_standard.jpg',
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
