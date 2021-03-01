import React from 'react'
import Navbar from './includes/widgets/Navbar'
import Footer from './includes/widgets/Footer'
import TermsBanner from './includes/components/TermsBanner'
import TermsBody from './includes/components/TermsBody'


export default function TermsAndConditions() {
    return (
        <div>
            <Navbar />
            <TermsBanner />
            <TermsBody />
            <Footer />
        </div>
    )
}
