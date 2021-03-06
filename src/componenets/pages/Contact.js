import React from 'react'
import Navbar from './includes/widgets/Navbar'
import Footer from './includes/widgets/Footer'
import ContactBanner from './includes/components/ContactBanner'
import ContactBody from './includes/components/ContactBody'

export default function Contact() {
    return (
        <div>
            <Navbar />
            <ContactBanner />
            <ContactBody />
            <Footer />
        </div>
    )
}
