import React from 'react'

export default function TermsBanner() {
    return (
        <div className="banner banner-contact" style={{width:"100% !important"}}>
            <div className="banner_contact">
                <div id="banner_terms_mg"></div>
                {/* <img  width="100%" id="overlay"  src="assets/Aurora_images/svg/overlay.svg" alt="" /> */}
                <div className="row  pt-100" id="overlay"   style={{
                    background: "url('assets/Aurora_images/svg/overlay.svg')",
                    backgroundSize: "cover",
                    backgroundRepeat:"no-repeat",
                    height: "200px", width: "100% !important",
                }}>
                    <div className="col s12 m3"></div>
                    <div className="col s12 m6  center">
                        <h4 className="white-text">
                            Terms & Conditions</h4>
                    </div>
                    <div className="col s12 m3"></div>
                </div>
            </div>
            
        </div>
    )
}


