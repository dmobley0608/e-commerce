import { getProductById } from '@/api/controllers/productsController'
import React from 'react'

export default async function page({ params }) {
    const {title, description, quantity, price, imgUrl} = await getProductById(params.product)
    return (
        <div>
            <img src={imgUrl}/>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h3>${price}</h3>
            <h6>Only {quantity} Remaining</h6>
        </div>
    )
}
