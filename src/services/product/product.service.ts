import http from "@core/http";
import { ProductDto } from "@services/product/models/ProductDto";
import { ProductLimitDto } from "@services/product/models/ProductLimitDto";

/**
 * Get all products from the server.
 */
async function getProducts(params: ProductLimitDto) {
  return await http.get<ProductDto>(`products`, { params: params });
}

/**
 * Get all products from the server.
 */
async function searchProducts(input: string) {
  return await http.get<ProductDto>(`products/search`, {
    params: { q: input },
  });
}

export const productService = {
  getProducts,
  searchProducts,
};
