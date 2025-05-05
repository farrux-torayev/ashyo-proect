export interface HeaderCategoriesType {
  createdAt: string;
  icon: string;
  id: number;
  image: string;
  name: string;
  parentCategoryId: null | number;
  subCategories: HeaderCategoriesType[];
  updataAt: string;
}

export interface CategoriesType {
  id: number;
  name: string;
  image: string;
  icon: string;
  parentCategoryId: null;
  createdAt: string;
  updatedAt: string;
  product: {
    id: number;
    name: string;
    price: number;
    brand_id: number;
    category_id: number;
    createdAt: number | string;
    description: string;
    image: string;
    is_aksiya: boolean;
    is_liked: boolean;
    nasiya: string;
    rating: number;
    summary: string;
    updatedAt: number | string;
  };
}
