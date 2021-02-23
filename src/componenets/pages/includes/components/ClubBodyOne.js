import React from 'react'
import {Link} from 'react-router-dom'

export default function ClubBodyOne(props) {

    const financialPlan = props.plan;
        return (
    <div className=" ">
                {/* <div className="row hide-on-med-and-down pb-100"> */}
                <div className="row  pb-100">
                    <div className="col s12 m1"></div>
                    <div className="col s12  m5">
                        <div className="container mt-100" >
                            <div className="mt-50">
                                <h4 className="primary-color center" >
                                    <b>
                                        {financialPlan}
                                    </b>
                                    
                                </h4>
                                <div className="row">
                                    <div className="col s12 m6">
                                        <div className="card-panel  pb-50" style={{
                                        
                                            borderRadius:"20px",padding:"0px",height:"300px",backgroundColor:"#FAFAFA"}}>
                                            <div className="center pt-25" style={{
                                                background: "rgba(216, 20, 58, 0.8)", height: "100px",
                                                borderRadius: "20px 20px 0px 0px"
                                            }}>
                                                <h5 className="white-text" style={{
                                                    fontWeight:"bold",
                                                    fontSize:"28px",
                                                    lineHeight: "46px"
                                                }}>Investment Club </h5>
                                            </div>
                                            <div className="center">
                                                <span>
                                                    <h4 className="pt-25" style={{fontWeight:"normal",
                                                    lineHeight:"28px",color:"#353535"}}>
                                                    <small style={{ fontSize: "20px" }}> ₦</small><b>6000</b>
                                                    </h4>
                                                    <small style={{fontWeight:"normal",
                                                    fontSize:"16px",
                                                    lineHeight: "23px",color:"rgba(53, 53, 53, 0.8)"}}>
                                                    for 6 months</small>
                                                </span>
                                            
                                            </div>
                                            <div className="center mt-25">
                                                <div className="col s3"></div>
                                                <Link to="/financialClubOne" className="col s6  btn-flat   btn-primary transparent waves-effect waves-light btn modal-trigger"
                                                    style={{ height: "45px" }}>
                                                    Join Aurora
                                                </Link >
                                                <div className="col s3"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m6">
                                     <div className="card-panel  pb-50" style={{
                                    
                                        borderRadius:"20px",padding:"0px",height:"300px",backgroundColor:"#FAFAFA"}}>
                                        <div className="center pt-25" style={{
                                            background: "rgba(216, 20, 58, 0.8)", height: "100px",
                                            borderRadius: "20px 20px 0px 0px"
                                        }}>
                                            <h5 className="white-text" style={{
                                                fontWeight:"bold",
                                                fontSize:"28px",
                                                lineHeight: "46px"
                                            }}>Investment Club </h5>
                                        </div>
                                        <div className="center">
                                            <span>
                                                <h4 className="pt-25" style={{fontWeight:"normal",
                                                lineHeight:"28px",color:"#353535"}}>
                                                <small style={{ fontSize: "20px" }}> ₦</small><b>10000</b>
                                                </h4>
                                                <small style={{fontWeight:"normal",
                                                fontSize:"16px",
                                                lineHeight: "23px",color:"rgba(53, 53, 53, 0.8)"}}>
                                                for 12 months</small>
                                            </span>
                                        
                                        </div>
                                        <div className="center mt-25">
                                            <div className="col s3"></div>
                                            <Link to="/financialClubTwo" className="col s6  btn-flat   btn-primary transparent waves-effect waves-light btn modal-trigger"
                                                style={{ height: "45px" }}>
                                                Join Aurora
                                            </Link >
                                            <div className="col s3"></div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col s12 m1"></div>
                    <div className="col s12 m5   hide-on-med-and-down" style={{ padding: "0px !important", background: "transparent !important" }}>
                            <div className="dashboard-snippet-image z-depth-3"></div>
                    </div>
                    </div>
            </div>
        // </div>
    )
    
}
