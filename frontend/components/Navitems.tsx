"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
     {
        label: "Home",
         href: "/"
     },
     {
        label: "Companions",
         href: "/companions"
     },
     {
         label: "My Journeys",
         href: "/profile"
     },
 ]

const Navitems = () => {

    const pathname = usePathname();

    return (
        <nav className='flex items-center gap-4'>
            {navItems.map(({ label, href }) => (
                <Link 
                    className={cn(pathname === href && "text-primary font-semibold")} 
                    href={href} 
                    key={href}
                    aria-current={pathname === href ? "page" : undefined}
                >
                    {label}
                </Link>
            ))}        
        </nav>
    )
}

export default Navitems
