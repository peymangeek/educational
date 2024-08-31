import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({
    href,
    activeStyles,
    styles,
    href,
    exact,
    ...rest
}) => {
    const path = usePathname()
    const isActived = exact ? path == href : path.startsWith(href) // That will return us a True or False At the most.

    return (
        <Link href={href} {...rest}>
            {children}
        </Link>
    )
}

export default NavLink