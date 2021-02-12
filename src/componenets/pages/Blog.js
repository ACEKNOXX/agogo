import React from 'react'
import Navbar from './includes/widgets/Navbar'
import Footer from './includes/widgets/Footer'
import BlogBanner from './includes/components/BlogBanner' 
import BlogBody from './includes/components/BlogBody'

export default function Blog() {
    return (
        <div>
            <Navbar />
            <BlogBanner />
            <BlogBody />
            <Footer />
        </div>
    )
}
