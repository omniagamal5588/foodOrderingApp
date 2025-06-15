import React from 'react'
import MenuItem from './MenuItem'
import { ProductWithRelations } from '@/types/product'

function Menu({ items }: { items: ProductWithRelations[] }) {
  return items.length > 0 ? (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
      {items.map((item) => (
        <li
          key={item.id}
          className="bg-gradient-to-br from-white via-neutral-50 to-slate-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group overflow-hidden"
        >
          <div className="relative h-full flex flex-col">
            <MenuItem item={item} />
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <h2 className="text-accent text-center text-lg">There are no Products Found</h2>
  )
}

export default Menu
