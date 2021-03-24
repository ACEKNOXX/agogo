import React from 'react'
import Navbar from './includes/widgets/Navbar'
import Footer from './includes/widgets/Footer'
import AboutBanner from './includes/components/AboutBanner'
import AboutBody from './includes/components/AboutBody'
import AboutCeo from './includes/components/AboutCeo'

export default function About() {
    return (
        <div>
            <Navbar />
            <AboutBanner />
            <AboutBody />
            <AboutCeo />
            <Footer />
        </div>
    )
}
