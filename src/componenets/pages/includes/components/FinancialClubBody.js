import React from 'react'
import ClubBodyTwo from './ClubBodyTwo'
import ClubBodyOne from './ClubBodyOne'



export default function FinancialClubBody(props) {
    const financialPlan = props.plan;
    

    
    // if (financialPlan == "Savings club") {
    //     amount = "5000" 
    // } else if(financialPlan == "Investment Club") {
    //     amount = "10000" 
    // } else {
    //     amount = "6000"
    // }

    return (
        <div>
            {financialPlan === "Savings club" &&
                <ClubBodyTwo plan={financialPlan} />
            }

            {financialPlan === "Investment Club" &&
                <ClubBodyOne plan={financialPlan} />
            }

       </div>
    )
}
