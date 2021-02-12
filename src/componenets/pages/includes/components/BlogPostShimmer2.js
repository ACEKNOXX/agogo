import React from 'react'

export default function BlogPostShimmer2() {
    return (
        <div>
             <div className="col m6 s12">
                <div className="card z-depth-0">
                    <div className="card-image">
                        {/* <img width="384px" height="214px" src="assets/Aurora_images/Blog page image 2-min.png" alt="" /> */}
                        <div className="progress grey lighten-3"
                                style={{ borderRadius: "5px",width:"100% !important", height: "210px" }}>
                            <div className="indeterminate grey lighten-4"></div>
                        </div>
                    </div>
                    <div className=" left transparent full-w">
                        <h5 style={{
                            fontWeight: "bold",
                            fontSize: "24px",
                            lineHeight: "34px", color: "#002044"
                        }}>
                            <div className="progress grey lighten-3"
                                style={{ borderRadius: "5px",width:"70%", height: "20px" }}>
                                <div className="indeterminate grey lighten-4"></div>
                            </div>
                        </h5>
                        {/* <p> */}
                            <div className="progress grey lighten-3"
                                style={{ borderRadius: "5px",width:"100% !important", height: "8px" }}>
                                <div className="indeterminate grey lighten-4"></div>
                            </div>
                            <div className="progress grey lighten-3"
                                style={{ borderRadius: "5px",width:"100% !important", height: "8px" }}>
                                <div className="indeterminate grey lighten-4"></div>
                            </div>
                            <div className="progress grey lighten-3"
                                style={{ borderRadius: "5px",width:"100% !important", height: "8px" }}>
                                <div className="indeterminate grey lighten-4"></div>
                            </div>
                            <div className="progress grey lighten-3"
                                    style={{ borderRadius: "5px",width:"100% !important", height: "8px" }}>
                                    <div className="indeterminate grey lighten-4"></div>
                            </div>
                            
                        {/* </p> */}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
