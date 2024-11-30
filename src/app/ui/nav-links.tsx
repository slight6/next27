
'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function NavLinks() {
    const pathname = usePathname()

    return (
        <nav>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>
                Home
            </Link>

            <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href='/about'>
                About
            </Link>

            <Link className={`link ${pathname === '/games' ? 'active' : ''}`} href='/games'>
                Games
            </Link>

            <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href='/contact'>
                Contact
            </Link>

            <Link className={`link ${pathname === '/blog' ? 'active' : ''}`} href='/blog'>
                Blog
            </Link>

            <Link className={`link ${pathname === '/login' ? 'active' : ''}`} href='/login'>
                Login
            </Link>



        </nav>
    )
}