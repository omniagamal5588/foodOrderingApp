import Menu from '@/components/menu'
import {  getProductsByCategory } from '@/server/db/product'
import React from 'react'

async function MenuPage() {
    const categories = await getProductsByCategory()
  return (
   <main>
    {
        categories.map((category)=>
            <section key={category.id} className="section-gap">
                <div  className="container text-center">
                    <h2 className="text-primary font-bold text-4xl italic mb-6">{category.name}</h2>
                    <Menu items={category.products}/>
                </div>

            </section>
)
    }
   </main>
  )
}

export default MenuPage
