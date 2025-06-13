
import React from 'react'
import MenuItem from './MenuItem'
import AddToCartButton from './AddToCartButton'
import { Product } from '@prisma/client'
import { ProductWithRelations } from '@/types/product'

function Menu({items}:{items:ProductWithRelations[]}) {
  return items.length >0 ? (
      <ul className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {
                items.map((item)=>
                <MenuItem key={item.id} item={item}/>
               
                )
            }
          </ul>
  ):(<h2 className='text-accent text-center'>There are not Products Found</h2>)
}

export default Menu
