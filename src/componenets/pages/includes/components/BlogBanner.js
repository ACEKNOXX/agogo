import React from 'react'

export default function BlogBanner() {
    return (
        <div>
        <div className="banner banner-contact" style={{width:"100% !important"}}>
            <div className="banner_contact">
                <div id="banner_blog_img"></div>
                    {/* <img  width="100%" id="overlay"  src="assets/Aurora_images/svg/overlay.svg" alt="" /> */}
                <div className="row  pt-100" id="overlay"   style={{
                    background: "url('assets/Aurora_images/svg/overlay.svg')",
                    backgroundSize: "cover",
                    backgroundRepeat:"no-repeat",
                    height: "200px", width: "100% !important",
                }}>
                    <div className="col s12 m3"></div>
                    <div className="col s12 m6  center">
                        <h1 className="white-text">Blog</h1>
                    </div>
                    <div className="col s12 m3"></div>
                </div>
            </div>
        </div>
       
        </div>
    )
}


