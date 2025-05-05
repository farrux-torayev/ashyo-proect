"use client"
import { useQuery } from "@tanstack/react-query"
import { instance } from "@/hooks/instance"

export const getCategories = () => {
  const { data = [], isLoading, isError } = useQuery({
    queryKey: ["categories"], 
    queryFn: () =>
      instance()
        .get("/categories/all", { params: { limit: 1000 } })
        .then((res) => res.data), 
  })

  return { data, isLoading, isError }
}

export const getCategory = (categoryId?: number | string ) => {

  const { data = [], isLoading, isError } = useQuery({
    queryKey: ["category", categoryId],
    queryFn: () =>
      instance()
        .get(`/products/category/${categoryId}`)
        .then((res) => res.data),
  });

  return { data, isLoading, isError };
};


