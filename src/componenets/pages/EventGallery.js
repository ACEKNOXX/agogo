import React from 'react'
import Navbar from './includes/widgets/Navbar'
import Footer from './includes/widgets/Footer'
import GalleryBanner from './includes/components/GalleryBanner'
import GalleryBody from './includes/components/GalleryBody'

export default function Explore() {
    return (
        <div>
            <Navbar />
            <GalleryBanner />
            <GalleryBody />
            <Footer />
        </div>
    )
}
