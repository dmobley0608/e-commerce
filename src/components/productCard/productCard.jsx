import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({ product }) {
    const { title, price, quantity, imgUrl } = product
    return (
        <Link href={`/products/${product.id}`} className='flex flex-col bg-white m-4 border rounded shadow-sm shadow-black items-center
        hover:bg-slate-400'>
            <div className='flex items-center justify-center '>
                <img className='min-w-max' src={imgUrl} alt={title} width='100%' />
            </div>
            <h3>{title}</h3>
            <h2>${price}</h2>
        </Link>
    )
}
