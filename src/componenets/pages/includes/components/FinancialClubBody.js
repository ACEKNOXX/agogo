import React,{useRef,useState} from 'react'
import ClubBodyTwo from './ClubBodyTwo'


export default function FinancialClubBody(props) {
    const financialPlan = props.plan;
    
    return (
        <div>
            {/* <ClubBodyOne plan={financialPlan} /> */}
            <ClubBodyTwo plan={financialPlan} />
       </div>
    )
}
