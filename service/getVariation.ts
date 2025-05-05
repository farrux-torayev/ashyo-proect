"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getVariation = () => {
    const { data = [], isLoading } = useQuery({
        queryKey: ['variation'],
        queryFn: () => instance().get('/variation-options').then(res => res.data)
    })
    return {data, isLoading}
}
export const getVariationParam = (id:string | number) => {
    const {data = [], isLoading, isError} = useQuery(({
        queryKey:['variations', id],
        queryFn: () => instance().get(`/variations/${id}`).then(res => res.data?.variationOptions)
    }))

    return{data, isLoading, isError}
}