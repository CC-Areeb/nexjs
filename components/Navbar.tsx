import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <>
        <nav>
            <div className="logos">
                <h1>Ninja List!</h1>
            </div>
            <Link href='/'>Home </Link>
            <Link href='/about'>About </Link>
            <Link href='/ninjas'>listing</Link>
        </nav>
        </>
    )
}
