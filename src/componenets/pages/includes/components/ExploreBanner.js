import React from 'react'

export default function ExploreBanner() {
    return (
        <div className="banner banner-contact">
        <div className="banner_contact">
            <div id="banner_explore_img"></div>
            <div className="section-heading row" style={{
                position: "absolute",zIndex:1,margin:"0px auto !important",width:"100% !important"}}>
                <div className="col s12 m3 l4"></div>
                <div className="col s12 m6 l4 ">
                    <div className="mt-120 section-heading-main hide-on-med-and-down" id="section-heading-main">
                        <h4 id="section-heading-main-h" className="white-text " >
                            We are here to help you
                        </h4>
                        <img src="assets/Aurora_images/svg/label.svg" className="right" alt="" />
                    </div>
                    <div className="hide-on-med-and-down  row pt-50" style={{width:"550px"}}>
                        <input className="col s8  subscibe-input mt-50  white black-text" placeholder="Password" type="text" style={{
                            fontSize:"15px !important",border:"1px solid grey",padding:"2px 8px",borderRadius:"5px",marginRight:"20px"}}/>
                        <button className="col s3  btn-flat  btn-primary transparent waves-effect waves-light "
                            style={{ height: "49px" }}>Search</button>
                    </div>
                    
                    <div className="container show-on-med-and-down  row ">
                        <div className="mt-50  section-heading-main" id="section-heading-main">
                            <h4 id="section-heading-main-h" className="white-text " >
                                We are here to help you
                            </h4>
                            <img src="assets/Aurora_images/svg/label.svg" style={{marginTop:"-30px"}} className="right" alt="" />
                        </div>
                        <div className="mt-50"></div>
                        <input className="col s11  subscibe-input  white black-text" placeholder="Password" type="text" style={{
                            fontSize:"15px !important",border:"1px solid grey",padding:"2px 8px",borderRadius:"5px",marginRight:"20px"}} alt="" />
                        <button className="col s5  btn-flat  btn-primary transparent waves-effect waves-light " 
                        style={{height:"49px"}}>Search</button>
                    </div>
                </div>
                <div className="col s12 m3 l4"></div>
                
            </div>
            
            <img  width="100%" id="overlay"  src="assets/Aurora_images/svg/overlay.svg" alt="" />
        </div>
    </div>
    )
}
