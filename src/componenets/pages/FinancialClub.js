import React from 'react'
import Navbar from './includes/widgets/Navbar'
import Footer from './includes/widgets/Footer'
import FinancialClubBody from './includes/components/FinancialClubBody'

export default function FinancialClub(props) {
    const financialPlan = props.match.params.plan;
        
    return (
       <div>
            <Navbar />
            {/* {financialPlan} */}
                <FinancialClubBody plan={financialPlan}/>
            <Footer />
        
        </div>
    
    )
}
