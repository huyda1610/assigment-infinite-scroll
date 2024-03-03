import React from "react";
import {
  AppstoreOutlined,
  CreditCardOutlined,
  MobileOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { ProductItemDto } from "@services/product/models/ProductDto";

type ProductItemsProps = {
  product: ProductItemDto;
};

export default function ProductItems({ product }: ProductItemsProps) {
  return (
    <section className="border border-solid rounded flex flex-col">
      <img
        src={product.images[0]}
        alt={`${product.title}-img`}
        className="w-full h-auto max-h-[150px] rounded"
        loading="lazy"
      />
      <div className="px-6 py-3 grid grid-cols-2 gap-y-3 text-sm text-black font-bold">
        <span className="col-span-2 text-center text-blue-500">
          {product.title}
        </span>
        <div className="flex flex-row gap-1 items-center">
          <CreditCardOutlined className="text-lg" />
          <span>${product.price}</span>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <StarOutlined className="text-lg" />
          <span>{product.rating}</span>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <AppstoreOutlined className="text-lg" />
          <span>{product.stock}</span>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <MobileOutlined className="text-lg" />
          <span>{product.discountPercentage}</span>
        </div>
      </div>
    </section>
  );
}
