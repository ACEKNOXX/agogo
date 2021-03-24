import React from 'react'
import PricePlan from '../../../modals/PricePlan'

export default function HowItWorks() {
    return (
        <div>
            <div className="how-it-works container pb-100 full-w mt-100" >
                <div className="container center section-heading  mb-100 " >
                    <h4 className="primary-color center ">How it works</h4>
                </div>
                <br/><br/>

                <div className="container">
                    <div className="container hide-on-med-and-down">
                            <hr style={{marginBottom:"-35px",width:"70%"}} />
                    </div>
                </div>
                <div className="container row">

                    <div className="col s12 m4 mb-25">
                        <div className=" transparent center ">
                            <div className="center pb-25">
                                
                                <button className="btn-floating btn-large waves-effect waves-light" style={{ background:"#002044"}}>
                                    01
                                </button>
                                <h6><b>PICK A PLAN</b></h6>
                            </div>
                            <div className="container" style={{width:"200px !important"}}>
                                <span className="black-text " >
                                    Select a savings or investment plan that suits your goal.
                                </span>
                            </div>
                            
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="transparent mb-25 center">
                            <div className="center pb-25">
                                
                                <button className="btn-floating btn-large waves-effect waves-light" style={{ background:"#002044"}}>
                                    02
                                </button>
                                <h6><b>SIGN UP</b></h6>
                            </div>
                            <span className="black-text">
                                Sign up on our platform with your details.
                            </span>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="transparent mb-25 center">
                            <div className="center pb-25">
                                
                                <button className="btn-floating btn-large waves-effect waves-light" style={{ background:"#002044"}}>
                                    03
                                </button>
                                <h6><b> GET STARTED</b></h6>
                            </div>
                            
                            <div className="container" style={{ width: "200px !important "}}>
                                <span className="black-text">
                                    Join a group based on your goals and start saving/investing.
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
         
                <div className="container row">
                    {/* <div className="col s12 center">
                        <p>
                            <b>
                                Kickstart your journey to financial literacy by registering on Aurora.
                            </b>
                        </p>
                        <p>
                            <b>
                                The turning point is one click away. Join now!
                            </b>
                        </p>
                    </div> */}
                    <div className="col s12 center ">
                        <br/>
                        <PricePlan />
                    </div>
                </div>
                
            </div>
        </div>
    )
}
