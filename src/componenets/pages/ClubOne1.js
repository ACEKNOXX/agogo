import React from 'react'
import Navbar from './includes/widgets/Navbar'
import Footer from './includes/widgets/Footer'
import ClubBodyOne1 from './includes/components/ClubBodyOne1'

export default function ClubBody1() {
   
        
    return (
       <div>
            <Navbar />
            {/* {financialPlan} */}
            <ClubBodyOne1 plan="Investment Club" />
            <Footer />
        
        </div>
    
    )
}
