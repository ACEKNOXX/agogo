import React from 'react'

export default function ContactBody() {
    return (
        <div>
            <section>
                <div className="container contact-body">
                    <div className="row">
                        <div className="col s12 m3 l3"></div>
                        <div className="col s12 m6 l6 body ">
                            <h3 className="section_body_title"> Submit a request</h3>
                            <div className="form-section-1 mt-25 row">
                                <div className=" col s12" style={{paddingTop:"0px !important"}}>
                                    <label htmlFor="password" className="col s12 grey-text">Full name</label>
                                    <input className="col s12 mt-50 full-w" placeholder="Full name"
                                        type="text" style={{
                                            fontSize: "15px !important",
                                            border: "1px solid grey",
                                            padding: " 2px 0px 8px 5px",
                                            borderRadius:"5px"
                                        }}
                                        />
                                </div>
                            </div>
                            <div className="form-section-1 mt-25 row">
                                <div className=" col s12" style={{paddingTop:"0px !important"}}>
                                    <label htmlFor="email" className="col s12 grey-text">Email Address</label>
                                    <input className="col s12 mt-50 full-w" id="email"
                                        placeholder="Email Address" type="text"
                                        style={{
                                            fontSize:"15px !important", 
                                            border: "1px solid grey",
                                            padding: "2px 0px 8px 5px",
                                            borderRadius:"5px"
                                        }}
                                        />
                                
                                </div>
                            </div>
                            <div className="form-section-1 mt-25 row">
                                <div className=" col s12" style={{paddingTop:"0px !important"}}>
                                    <label htmlFor="msg" className="col s12 grey-text">Your message</label>
                                    <textarea id="msg"
                                    className="col s12 materialize-textarea"
                                        style={{
                                            fontSize: "15px !important",
                                            border: "1px solid grey",
                                            padding: "2px 8px",
                                            borderRadius:"5px",
                                            height:"200px !important",
                                        }} ></textarea>
                                        
                                </div>
                            </div>
                            <div className="row">
                                <button type="button" className="col s5 btn-large btn-flat btn-large-primary white-text green">
                                    Send request
                                </button>
                            </div>
                                
                        </div>
                        <div className="col s12 m3 l3"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}
