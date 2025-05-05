import { HeaderCategoriesType } from "./HeaderButtonType";

export interface ProductsTypeE2 {
  id: number;
  name: string;
  is_liked: boolean;
  category_id: string;
  description: string;
  nasiya: string | number;
  summary: string;
  price: number;
  rating: number;
  is_aksiya: boolean;
  brand_id: number;
  image: string;
  createdAt: "2025-04-26T11:10:08.236Z";
  updatedAt: "2025-04-26T11:10:08.236Z";
  comments: any;
  like: any;
  category: HeaderCategoriesType;
  product_item: ProductItemType;
  product: {
    id: number;
    name: string;
    price: number;
    brand_id: number;
    category_id: number;
    createdAt: number | string
    description: string
    image: string
    is_aksiya: boolean;
    is_liked: boolean;
    nasiya: string;
    rating: number
    summary: string
    updatedAt: number | string;
  };
}

export interface ProductType {
  ProductsItem: any[];
  brendId: number;
  categoryId: number;
  description: string;
  id: number;
  image: string;
  name: string;
}


export type ProductItemType = Pick<ProductsTypeE2, "id" | "name" | "price" | "image" | "description" | "product"> & {
  ProductOptions: any[];
  colorId: number;
  id: number;
  name: string;
  image: string;
  price: number;
  productId: number;
  quantity: number;
  description: string;
};

export interface ProductPageType {
  title: string;
  API: string;
  extraStyle?: string;
}
