"use client"
import ProductFilter from '@/components/Products/ProductFilter'
import ProductItem from '@/components/Products/ProductItem'
import ProductItemSkeleton from '@/components/Products/ProductItemSkeleton'
import { getProducts, getProductsE2 } from '@/service/getProducts'
import { ProductItemType, ProductsTypeE2 } from '@/types/ProductsType'
import React, { useState } from 'react'

const Products = () => {
  const {products, isLoading} = getProducts("/product-items")
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(0)
  const [brandId, setBrandId] = useState<number | null>(null)

  return (
    <>
    <div className='flex containers gap-[20px]'>
      <ProductFilter setBrandId={setBrandId} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>
      <div className='w-[75%] !h-[800px] overflow-y-auto flex flex-wrap justify-between gap-[20px]'>
        {isLoading ? <ProductItemSkeleton extraClass='!flex-wrap !justify-between !gap-[10px] !space-x-0'/> : products.map((item:ProductItemType) => <ProductItem E2={true} key={item.id} item={item}/>)}
      </div>
       </div>
       </>
  )
}

export default Products