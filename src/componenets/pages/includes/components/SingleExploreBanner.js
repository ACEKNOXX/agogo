import React from 'react'

export default function SingleExploreBanner() {
    return (
        <section>
            <div className="banner banner-single-course">
                <div className="banner-single-course ">
                    <div className="container white  row z-depth-2" style={{ borderRadius: "20px" }}>
                        <div className="col  s12 m6 l6 mt-50 mb-50">
                            <div className="container ">
                                <h6 style={{fontWeight: "bold",
                                fontSize: "45px",
                                lineHeight: "71px",
                                color: "#002044"}}>
                                    Financial marketing
                                    
                                </h6>
                                <p style={{fontWeight: "normal",
                                    fontSize: "16px",
                                    lineHeight:"23px",
                                    color: "#002044"}}>
                                    Chukwuemeka Doe
                                </p>
                                <article style={{
                                    fontWeight: "normal",
                                    fontSize: "13px",
                                    lineHeight: "26px",
                                    color: "rgba(53, 53, 53, 0.9)"
                                }}>
                                    Efficiently provide access to future-proof quality vectors with B2C platforms. Intrinsicly negotiate competitive interfaces before intermandated schemas. Continually underwhelm multimedia based functionalities for timely benefits. Dynamically.
                                </article>
                                <div className="" style={{
                                    width: "210px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "10px 0px", marginLeft: "-13px !important"
                                }}>
                                    <div className="col s4">
                                        <img src="assets/Aurora_icons/my account icon.svg" height="12px" alt="" />
                                        <small>
                                            <b> 
                                                2.5k
                                            </b>
                                        </small>
                                    </div>
                                    <div className="col s4">
                                        <small>
                                            <b> 
                                                4.5
                                            </b>
                                        </small>
                                        
                                        <i className="material-icons yellow-text icons-small">star</i>
                                    </div>
                                    <div className="col s4">
                                        <small>
                                            <b> 01h 25m </b>
                                        </small>
                                    </div>
                                </div>
                                <div className="" style={{
                                    width: "210px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginLeft: "-13px !important"
                                }}>
                                    <div className="col s4 left">
                                        <img src="assets/Aurora_icons/Saved courses icon.svg" height="12px" alt=""/>
                                        <small>
                                            <b> 
                                                4.5k
                                            </b>
                                        </small>
                                    </div>
                                    <div className="col s4 left" >
                                        <i className="material-icons  icons-small">share</i>
                                        <small>
                                            <b> 
                                                2.5k
                                            </b>
                                        </small>
                                    </div>
                                    <div className="col s4"></div>
                                    
                                </div>
                                <div className="mt-25 full-w">
                                    <a href="#modal1" className="btn-flat col s3 center btn-large green lighten-4 waves-effect waves-light btn "
                                        style={{ width: "150px", borderRadius: "8px" }}>
                                        <b className=" green-text text-lighten-1">Enroll now</b>
                                    </a>  
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l6" id="card-info-right"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
