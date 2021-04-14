import React from 'react'
import Navbar from './includes/widgets/Navbar'
import Footer from './includes/widgets/Footer'
import AboutBanner from './includes/components/AboutBanner'
import AboutBody from './includes/components/AboutBody'
import AboutCeo from './includes/components/AboutCeo'
import AboutCeo2 from './includes/components/AboutCeo2'

export default function About() {
    return (
        <div>
            <Navbar />
            <AboutBanner />
            <AboutBody />
            <AboutCeo />
            {/* <AboutCeo2 /> */}

            <Footer />
        </div>
    )
}
