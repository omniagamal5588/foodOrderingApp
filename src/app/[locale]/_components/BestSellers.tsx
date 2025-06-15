import MainHeading from '@/components/main-heading'
import Menu from '@/components/menu'
import { getCurrentLocale } from '@/lib/getCurrentLocale'
import getTrans from '@/lib/translation'


import { getProductData } from '@/server/db/product'

import React from 'react'

async function BestSellers() {
 const bestSellers = await getProductData()
 const local = await getCurrentLocale();
 const {home}= await getTrans(local);
 const {bestSeller}= home;
  return (
    <section>
    <div className='container'>
        <div className='text-center mb-4'>
        <MainHeading
            subTitle={bestSeller.checkOut}
            title={bestSeller.OurBestSellers}
          />
      <Menu items={bestSellers}/> 
      </div>
    </div>
    </section>
  )
}

export default BestSellers
