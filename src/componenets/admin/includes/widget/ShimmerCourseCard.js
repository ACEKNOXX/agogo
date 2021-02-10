import React from 'react'
import { Link} from 'react-router-dom'

export default function ShimmerCourseCard() {
    return (
        <div>
            <div className="card course-cards">
                <div className="card-image">
                    {/* <img src="../assets/Aurora_images/Courses card image-min.png" alt="" /> */}
                    <div className="progress grey lighten-3"
                        style={{ borderRadius: "10px 10px 0px 0px", height: "270px" }}>
                        <div className="indeterminate grey lighten-4"></div>
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-heading">
                        <h5>
                            <div className="progress grey lighten-3"
                                style={{ borderRadius: "20px", height: "15px" }}>
                                <div className="indeterminate grey lighten-4"></div>
                            </div>
                        </h5 >
                        <p>
                            <div className="progress grey lighten-3"
                                style={{width:"40%",borderRadius: "20px", height: "10px" }}>
                                <div className="indeterminate grey lighten-4"></div>
                            </div>
                        </p>
                        <div className="card-context-head-stats">
                            <div className="col s4 ">
                                
                                <p>
                                    <div className="progress grey lighten-3"
                                        style={{ borderRadius: "10px",width:"70px", height: "20px" }}>
                                        <div className="indeterminate grey lighten-4"></div>
                                    </div>
                                </p> 
                            </div>
                            <div className="col s4">
                                
                                 <p>
                                    <div className="progress grey lighten-3"
                                        style={{ borderRadius: "10px",width:"70px", height: "20px" }}>
                                        <div className="indeterminate grey lighten-4"></div>
                                    </div>
                                </p> 
                            </div>
                            <div className="col s4">
                                 <p>
                                    <div className="progress grey lighten-3"
                                        style={{ borderRadius: "10px",width:"70px", height: "20px" }}>
                                        <div className="indeterminate grey lighten-4"></div>
                                    </div>
                                </p> 
                            </div>
                        </div>
                    </div>
                    <div className="row card-context-body">
                        <div className="col s12 card-context-body-details " >
                            
                                <p>
                                    <div className="progress grey lighten-3"
                                        style={{ borderRadius: "20px", height: "10px" }}>
                                        <div className="indeterminate grey lighten-4"></div>
                                    </div>
                                </p>
                                <p>
                                    <div className="progress grey lighten-3"
                                        style={{ borderRadius: "20px", height: "10px" }}>
                                        <div className="indeterminate grey lighten-4"></div>
                                    </div>
                                </p>
                                <p>
                                    <div className="progress grey lighten-3"
                                        style={{ borderRadius: "20px", height: "10px" }}>
                                        <div className="indeterminate grey lighten-4"></div>
                                    </div>
                                </p>
                                
                        </div>
                        <div className="col s5">
                            <p>
                                <div className="progress grey lighten-3"
                                    style={{ borderRadius: "10px",width:"150px", height: "50px" }}>
                                    <div className="indeterminate grey lighten-4"></div>
                                </div>
                            </p>               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
