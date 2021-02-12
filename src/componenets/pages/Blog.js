import React from 'react'
import Navbar from './includes/widgets/Navbar'
import Footer from './includes/widgets/Footer'
import BlogBanner from './includes/components/BlogBanner' 

export default function Blog() {
    return (
        <div>
            <Navbar />
            <BlogBanner />
            <Footer />
        </div>
    )
}
