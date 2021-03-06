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
            <div className="hide-on-med-down row">
                
                <div className="col s12 m6">
                    <GalleryBody />         
                </div>

                <div className="col s12 m6">
                    <GalleryBody />         
                </div>

            </div>
            <div className="hide-on-med-up show-on-med">
                 {/* <GalleryBodyMobTab /> */}
            </div>
            <Footer />
        </div>
    )
}
