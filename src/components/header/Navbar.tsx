'use client'
import React from 'react'
import { Routes , Pages } from '@/constants/enums'
import { Button, buttonVariants } from '../ui/button'
import Link from '../link'
import { useState } from 'react'

function Navbar() {
    const links =[
        {
      id: crypto.randomUUID(),
      title:'Menue',
      href: Routes.MENU,
    },
    {
      id: crypto.randomUUID(),
      title:'About',
      href: Routes.ABOUT,
    },
    {
      id: crypto.randomUUID(),
      title: 'Contact',
      href: Routes.CONTACT,
    },
    ]
      const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
           
        <ul  className={`fixed lg:static top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10`}>
            {
                links.map((link)=>(
                    <li key={link.id}>
                        <Link href={`/${link.href}`}>{link.title}</Link>
                    </li>
                ))
            }

        </ul>
    </nav>
  )
}

export default Navbar
