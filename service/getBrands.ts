"use client";
import { instance, instanceE2 } from "@/hooks/instance";
import { useQuery } from "@tanstack/react-query";

export const getBrands = () => {
  const extra = {
    id: 10,
    name: "Ko'proq",
    image: null,
    createdAt: "2025-04-26T11:10:08.217Z",
    updatedAt: "2025-04-26T11:10:08.217Z",
  };
  const { data = [], isLoading, isError,} = useQuery({
    queryKey: ["brands"],
    queryFn: () => instance().get("/brands/all").then((res) => [...res.data, extra])});
  return { data, isLoading, isError };
};
export const getBrandsE2 = () => {

  const { data:brands = [], isLoading } = useQuery({
      queryKey: ['brands'],
      queryFn: () => instanceE2().get('/brands/all').then(res => res.data)
  })
  return {brands, isLoading}
}