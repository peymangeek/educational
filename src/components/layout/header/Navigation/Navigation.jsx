import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Windows from './Windows'
import Mobile from './Mobile'



const Navigation = () => {
    return (
        <>
            <Windows />
            <Mobile />
        </>
    )
}

export default Navigation