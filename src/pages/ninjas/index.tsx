import React from 'react'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'

export default function index() {
    return (
        <>
            <div className="heading">
                <Navbar />
                <h1>All Ninjas! 🏃‍♂️</h1>
            </div>
            <Footer />
        </>
    )
}
