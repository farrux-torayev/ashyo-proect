import { Dispatch, SetStateAction } from "react"

export interface ProductFilterType {
    setMinPrice:Dispatch<SetStateAction<number>>,
    setMaxPrice:Dispatch<SetStateAction<number>>,
    setBrandId:Dispatch<SetStateAction<number | null>>
}

export interface VariationType {
    id:number,
    value:string,
    variationId:number
}