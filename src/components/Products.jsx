import React from 'react'
import Product from './Product'
import { products } from '../constants/index'
const Products = () => {
    return (
        <div className='flex justify-between max-xl:flex-col items-start sm:gap-6 gap-4'>
            {
                products.map((product) => (
                    <Product product={product}></Product>
                ))
            }
        </div>
    )
}

export default Products