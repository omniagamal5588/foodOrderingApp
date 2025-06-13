import { formatCurrency } from '@/lib/formatters'
import Image from 'next/image'
import React from 'react'
import AddToCartButton from './AddToCartButton'
import { Product } from '@prisma/client'
import { ProductWithRelations } from '@/types/product'

function MenuItem({item}:{item:ProductWithRelations}) {
  return (
       <li>
                       <div className='relative w-48 h-48 mx-auto'>
                       <Image src={item.image} className='object-cover'  alt={item.name} fill/>
                       </div>
                       <div className='flex items-center justify-between mb-4'>
                           <h4 className='font-semibold text-xl my-3'>{item.name}</h4>
                           <strong className='text-accent'>
                               {formatCurrency(item.basePrice)}
                           </strong>
                           <p className=' text-gray-500 text-sm  line-clamp-3'>
                               {item.description}
                           </p>
                            <AddToCartButton item={item}/>
       
                       </div>
                      
                   </li>
  )
}

export default MenuItem
