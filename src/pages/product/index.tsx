import React, { useEffect, useState } from "react";
import { useProduct } from "@pages/product/hooks/useProduct";
import { Button, Empty, Input, Skeleton } from "antd";
import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import ProductItems from "@pages/product/components/Items";
import { useSearchProduct } from "@pages/product/hooks/useSearchProduct";

export default function ProductPage() {
  const { products, isLoading, setParams, setIsLoadMore, isLoadMore, total } =
    useProduct();

  const {
    products: searchProducts,
    isLoading: isSearchProductsLoading,
    searchProduct,
  } = useSearchProduct();

  const [searchValue, setSearchValue] = useState<string>("");

  console.log(searchValue);

  /**
   * Handles search - only triggered when the search value changes
   */
  useEffect(() => {
    if (searchValue) {
      searchProduct(searchValue);
    } else {
      setParams({ skip: 0, limit: 20 });
    }
  }, [searchValue]);

  /**
   * Handles the scroll event and triggers the load more action when the user reaches the bottom of the scrollable area.
   *
   * @param {any} event - the scroll event object
   */

  const handleScroll = (event: any) => {
    if (
      event.target.scrollHeight - event.target.scrollTop <=
        event.target.clientHeight &&
      total.current > products.length
    ) {
      setIsLoadMore(true);
    }
  };

  const handleRefresh = () => {
    setSearchValue("");
    setParams({ skip: 0, limit: 20 });
  };

  return (
    <div className="max-w-[1000px] w-full flex flex-col gap-6 mx-auto px-6 py-3">
      <h2 className="text-center m-0">
        Product List With Infinite Scroll and Search Product
      </h2>
      {/* Search */}
      <section className="flex flex-row justify-between">
        <Input
          size="large"
          value={searchValue}
          placeholder="Search by product name"
          prefix={<SearchOutlined />}
          className="max-w-96"
          allowClear
          onChange={(event) => setSearchValue(event.target.value)}
          maxLength={100}
        />
        <Button
          type="primary"
          icon={<ReloadOutlined />}
          size={"large"}
          onClick={handleRefresh}
        >
          Refresh
        </Button>
      </section>

      {/* Products list */}
      <section
        onScroll={handleScroll}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-[597px] overflow-y-auto overflow-x-hidden"
      >
        {/* Loading when get product */}
        {(isLoading || isSearchProductsLoading) && (
          <Skeleton active paragraph={{ rows: 4 }} />
        )}
        {(isLoading || isSearchProductsLoading) && (
          <Skeleton active paragraph={{ rows: 4 }} />
        )}
        {(isLoading || isSearchProductsLoading) && (
          <Skeleton active paragraph={{ rows: 4 }} />
        )}

        {!(isLoading || isSearchProductsLoading) &&
          (searchValue ? searchProducts : products).map((product) => (
            <ProductItems key={product.id} product={product} />
          ))}

        {/* Empty view when product not found  */}
        {searchValue &&
          searchProducts.length === 0 &&
          !isSearchProductsLoading && (
            <Empty
              className="sm:col-span-2 md:col-span-3 min-h-[400px] h-full w-full"
              description={"Product not found !!!"}
            />
          )}

        {/* Loading when scroll */}
        {isLoadMore && products.length % 1 === 0 && (
          <Skeleton active paragraph={{ rows: 4 }} />
        )}
        {isLoadMore && products.length % 2 === 0 && (
          <Skeleton active paragraph={{ rows: 4 }} />
        )}
        {isLoadMore && products.length % 3 === 0 && (
          <Skeleton active paragraph={{ rows: 4 }} />
        )}
      </section>
    </div>
  );
}
