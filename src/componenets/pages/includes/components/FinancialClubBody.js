import React from 'react'
import { Link} from 'react-router-dom'
import PayButton from './../../../util/PayButton'

export default function FinancialClubBody(props) {
    const financialPlan = props.plan;
    
    return (
        <div className=" ">
             <div className="dashboard-snippet   full-w " >
                <div className="hide-on-med-and-up" >
                    <div className="container learn-online ">
                        <h4 className="primary-color container" >
                            <b>
                                {financialPlan}
                            </b>
                            
                        </h4>
                        <div className="container" style={{ width: "400px "}}>
                            <article className="grey-text">
                                Seamlessly maximize user friendly communities whereas customer directed results.
                            </article><br/>
                            <PayButton amount="5000" />
                        </div>
                        <img src="assets/Aurora_images/Courses dashboard Aurora 1-min.png" 
                        className=" hide-on-med-and-down container z-depth-2 responsive-img full-w materialboxed show-on-med-and-down hide-on-med-and-up" width="100%"   alt="" />
                    </div>

                </div>
                <div className="row hide-on-med-and-down pb-100">
                    <div className="col s12  m5">
                        <div className="container mt-100" >
                            <div className="pl-50 mt-120 " style={{width:"400px"}}>
                                <h4 className="primary-color " >
                                    <b>
                                        {financialPlan}
                                    </b>
                                    
                                </h4>
                                <div className="" style={{width:"400px"}}>
                                    <p className="grey-text">
                                        Seamlessly maximize user friendly communities whereas customer directed results.
                                    </p><br/>
                                    <PayButton amount="5000" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col s12 m7   hide-on-med-and-down" style={{padding:"0px !important",background:"transparent !important"}}>
                        <div className="dashboard-snippet-image z-depth-3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
