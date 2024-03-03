import { useEffect, useRef, useState } from "react";
import { showNotificationError } from "@core/utils/notifications";
import { services } from "@services/index.service";
import { ProductItemDto } from "@services/product/models/ProductDto";
import { AxiosError } from "axios";
import { ProductLimitDto } from "@services/product/models/ProductLimitDto";

/**
 * This function is a custom hook that handles product data fetching and state management.
 *
 */
export const useProduct = () => {
  const [products, setProducts] = useState<ProductItemDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
  const [params, setParams] = useState<ProductLimitDto>({
    skip: 0,
    limit: 20,
  });

  const total = useRef<number>(0);

  useEffect(() => {
    getProduct();
  }, [params]);

  useEffect(() => {
    if (isLoadMore && !isLoading) {
      if (products.length < total.current)
        setParams((prev) => ({ ...prev, skip: prev.skip + 20 }));
    }
  }, [isLoadMore]);

  const getProduct = async () => {
    !isLoadMore && setIsLoading(true);

    const response = await services.product
      .getProducts(params)
      .catch((error: AxiosError) => {
        showNotificationError(error);
        setProducts([]);
      });

    if (response?.data && response?.status === 200) {
      total.current = response?.data?.total;
      if (isLoadMore) {
        setProducts((prevState) => [
          ...prevState,
          ...(response?.data?.products ?? []),
        ]);
      } else {
        setProducts(response?.data?.products);
      }
    }

    setIsLoading(false);
    setIsLoadMore(false);
  };

  return { products, isLoading, setParams, isLoadMore, setIsLoadMore, total };
};
