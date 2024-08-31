import NavLink from '@/components/ui/NavLink'
import Link from 'next/link'
import React from 'react'

const Windows = () => {
    return (
        <nav className='hidden py-3 px-20 bg-white w-full invisible lg:visible lg:flex items-center justify-between'>
            <div>
                <Link className='flex items-center justify-center gap-2' href={"/"}>
                    <span dir='ltr' className='font-serif text-3xl'>
                        PA.
                    </span>
                    <img className='w-12' src={"/images/logo.png"} />
                </Link>
                <div className='flex items-center gap-3'>
                    <NavLink href={"/"} activeClassName={"bg-red-600"}>
                        hello world :)
                    </NavLink>
                </div>
            </div>
            <div>2</div>
            <div>3</div>
        </nav>
    )
}

export default Windows