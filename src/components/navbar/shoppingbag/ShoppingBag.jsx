import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function ShoppingBag({quantity}) {
    return (
        <button
            type="button"
            className="relative p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <ShoppingBagIcon className="h-9 w-9 relative" aria-hidden="true" />
            <p className='absolute top-4 left-4 font-bold text-white'>{quantity}</p>
        </button>
    )
}
