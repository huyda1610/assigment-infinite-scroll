export type ProductItemDto = {
  id: number;
  title: string;
  description: number;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductDto = {
  products: ProductItemDto[];
  total: number;
  skip: number;
  limit: number;
};
