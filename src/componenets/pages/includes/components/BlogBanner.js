import React from 'react'

export default function BlogBanner() {
    return (
        <div>
        <div className="banner banner-contact" style={{width:"100% !important"}}>
            <div className="banner_contact">
                <div id="banner_blog_img"></div>
                <img  width="100%" id="overlay"  src="assets/Aurora_images/svg/overlay.svg" alt="" />
            </div>
        </div>
        <div className="row pink " style={{marginTop:"-200px"}}>
                    <div className="col s12 m4"></div>
                    <div className="col s12 m4">
                        <div className="red"
                            style={{
                                width: "100%",
                                height: "300px",
                               
                            }}>
                            
                        </div>
                    </div>
                    <div className="col s12 m4"></div>
                </div>
        </div>
    )
}


