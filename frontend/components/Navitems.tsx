"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
    {
        lable: "Home",
        href: "/"
    },
    {
        lable: "Companions",
        href: "/companions"
    },
    {
        lable: "My Journeys",
        href: "/profile"
    },
]

const Navitems = () => {

    const pathname = usePathname();

    return (
        <nav className='flex items-center gap-4'>
            {navItems.map(({ lable, href }) => (
                <Link className={cn(pathname === href && "text-primary font-semibold")} href={href} key={href}>{lable}</Link>
            ))}        
        </nav>
    )
}

export default Navitems
