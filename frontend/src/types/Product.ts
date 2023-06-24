// export type Product = {
//     name: string
//     slug: string
//     image: string
//     category: string
//     brand: string
//     price: number
//     countInStock: number
//     description: string
//     rating: string
//     numReviews: number
// }
//! Using Interface which is a more extensible way for defining types
export interface Product {
  name: string;
  slug: string;
  image: string;
  category: string;
  brand: string;
  price: number;
  countInStock: number;
  description: string;
  rating: string | number;
  numReviews: number;
}
