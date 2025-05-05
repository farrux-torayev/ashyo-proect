
"use client"
import { instance, instanceE2 } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getProducts = (API:string, id?:string | null, E2?:boolean) => {
    const params = { page: 1, limit: 1000 , categoryId:id ? id : null}

    const { data:products = [], isLoading } = useQuery({
        queryKey: ['product_items'],
        queryFn: () => (E2 ? instanceE2() : instance()).get(API, { params }).then(res => res.data)
    })
    return {products, isLoading}
}

export const getProductsE2 = (minPrice?:number, maxPrice?:number, brandId?:number | null, categoryId?:string | undefined) => {
    const params = { page: 1, limit: 1000, min_price:minPrice ? minPrice : null, max_price:maxPrice ? maxPrice : null, brand_id:brandId ? brandId: null, category_id:categoryId ? categoryId : null}

    const { data:products = [], isLoading } = useQuery({
        queryKey: ['product_E2', minPrice, maxPrice, brandId, categoryId],
        queryFn: () => instanceE2().get("/product", { params }).then(res => res.data.items)
    })
    return {products, isLoading}
}



    