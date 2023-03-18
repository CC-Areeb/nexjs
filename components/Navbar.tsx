import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="navItems">
                    <div className="logos">
                        <h1>Ninja List!</h1>
                    </div>

                    <div className='nav-links'>
                        <Link href='/' className='navLinks text-decoration-none fs-5'>Home </Link>
                        <Link href='/about' className='navLinks text-decoration-none fs-5'>About </Link>
                        <Link href='/ninjas' className='navLinks text-decoration-none fs-5'>listing</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
