import React from 'react'
import CartItem from '../_components/CartItem'
import CheckoutForm from '../_components/CheckoutForm'

function CartPage() {
  return (
   <main>
    <section className='section-gap'>
        <div className='container'>
            <h1 className='text-primary text-center font-bold text-4xl italic mb-10'> Cart Page</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <CartItem/>
        <CheckoutForm/>
        </div>
        
    </section>
   </main>
  )
}

export default CartPage
