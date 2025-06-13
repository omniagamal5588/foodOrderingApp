import MainHeading from '@/components/main-heading'
import Menu from '@/components/menu'


import { getProductData } from '@/server/db/product'

import React from 'react'

async function BestSellers() {
 const bestSellers = await getProductData()
  return (
    <section>
    <div className='container'>
        <div className='text-center mb-4'>
      <MainHeading title={'Our Best Sellers'} subTitle={'Checkout'}/>
      <Menu items={bestSellers}/> 
      </div>
    </div>
    </section>
  )
}

export default BestSellers
