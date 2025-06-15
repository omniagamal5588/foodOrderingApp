import { formatCurrency } from '@/lib/formatters'
import Image from 'next/image'
import React from 'react'
import AddToCartButton from './AddToCartButton'
import { ProductWithRelations } from '@/types/product'

function MenuItem({ item }: { item: ProductWithRelations }) {
  return (
    <li className="group">
      <div className="flex flex-col h-full p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
        {/* Image Container */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 border border-gray-200">
          <Image
            src={item.image}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-grow">
          {/* Name and Price */}
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-bold text-xl text-gray-800">{item.name}</h4>
            <span className="text-primary font-semibold text-lg">
              {formatCurrency(item.basePrice)}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {item.description}
          </p>

          {/* Add to Cart */}
          <div className="mt-auto">
            <AddToCartButton item={item} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default MenuItem
