import React from 'react'

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
                                <h6><b> Sign Up</b></h6>
                            </div>
                            <div className="container" style={{width:"200px !important"}}>
                                <span className="black-text " >
                                    The first step is to sign up on our platform with your email.
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
                                <h6><b>Choose A Plan</b></h6>
                            </div>
                            <span className="black-text">
                                Choose a plan that suits your goal from our 6 months and 12 months plan that provide you access to all our resources with  differing timeframes.
                            </span>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="transparent mb-25 center">
                            <div className="center pb-25">
                                
                                <button className="btn-floating btn-large waves-effect waves-light" style={{ background:"#002044"}}>
                                    03
                                </button>
                                <h6><b> Get Certificate</b></h6>
                            </div>
                            
                            <div className="container" style={{ width: "200px !important "}}>
                                <span className="black-text">
                                    You’ll get certificates at the completion of each course.
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container row">
                    <div className="col s12 center">
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
                    </div>
                    <div className="col s12 center ">
                            <button type="button"  data-target="modal-pricing-plan" className="btn-large btn-flat btn-large-primary white-text green modal-trigger">
                        Join aurora 
                            </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
