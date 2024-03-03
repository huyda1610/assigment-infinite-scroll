import { useMemo, useState } from "react";
import { showNotificationError } from "@core/utils/notifications";
import { services } from "@services/index.service";
import { ProductItemDto } from "@services/product/models/ProductDto";
import { AxiosError } from "axios";
import { debounce } from "lodash";

/**
 * Function to handle searching for products with a given parameter.
 *
 * @param {string} param - The search parameter
 */
export const useSearchProduct = () => {
  const [products, setProducts] = useState<ProductItemDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchProduct = async (param: string) => {
    setIsLoading(true);

    const response = await services.product
      .searchProducts(param)
      .catch((error: AxiosError) => {
        showNotificationError(error);
        setProducts([]);
      });

    if (response?.data && response?.status === 200) {
      setProducts(response?.data?.products);
    }

    setIsLoading(false);
  };

  // Delay call API from input
  const handleDebounceSearch = useMemo(() => {
    const debounceSetParams = (newParams: string) => {
      searchProduct(newParams);
    };
    return debounce(debounceSetParams, 300);
  }, []);

  return { products, isLoading, searchProduct: handleDebounceSearch };
};
