import React from 'react'
import Navbar from './includes/widgets/Navbar'
import Footer from './includes/widgets/Footer'
import ExploreBanner from './includes/components/ExploreBanner'
import ExploreBody from './includes/components/ExploreBody'

export default function Explore() {
    return (
        <div>
            <Navbar />
            <ExploreBanner />
            <ExploreBody />
            <Footer />
        </div>
    )
}
