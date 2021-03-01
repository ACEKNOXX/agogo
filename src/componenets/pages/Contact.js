import React from 'react'
import Navbar from './includes/widgets/Navbar'
import Footer from './includes/widgets/Footer'
import ContactBanner from './includes/components/ContactBanner'


export default function Contact() {
    return (
        <div>
            <Navbar />
            <ContactBanner />
                <h1>COTA</h1>
            <Footer />
        </div>
    )
}
