"use client"
import ProductFilter from '@/components/Products/ProductFilter';
import Products from '@/components/Products/Products';
import React, { useState } from 'react'

const CategoryProducts = () => {
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(0)
  const [brandId, setBrandId] = useState<number | null>(null)
  
  

  return (
    <div className='containers flex justify-between gap-[20px]'>
      <ProductFilter setBrandId={setBrandId} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>
     <Products API='/product-items' title='/'/>
    </div>
  )
}

export default CategoryProducts