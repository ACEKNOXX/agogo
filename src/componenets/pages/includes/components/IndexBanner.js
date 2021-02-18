import React from 'react'
import PricePlan from './../../../modals/PricePlan'

export default function IndexBanner() {
    return (
        <div>
            <div className="banner banner-index mb-25">
        
                <div className="container container-flux">

                    <div className="banner-row-one  full-w row  pt-50 ">
                        <div className="col s12  m6 ">
                            <div className="">
                                <div className="banner-index-holder">
                                    <div style={{lineHeight:"1.3"}} className="white-text index-banner-header" > 
                                        FINANCIAL PLANNING WITH  
                                        <span>
                                            <i> Aurora</i>
                                        </span> 
                                    </div>
                                    <article className="grey-text text-lighten-5 index-banner-header-article">
                                        Aurora helps you to make smart financial decisions by offering lessons and training on the intricacies of finance. Learn on Aurora and connect with several other people who use our resources to up their financial game.
                                    </article>
                                    <br/>
                                    
                                </div>
                                
                                <PricePlan />
                                
                            </div>
                        </div>
                        <div className="col s12 m6 right" >
                            <div className="home-page-banner-image ">
                                <img src="assets/Aurora_images/homepage hero image-min.png" width="100%" height="100%" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="banner-row-two full-w pb-100">
                        
                        <div className="pb-50 pt-25 container center section-heading row">
                            <div className="col s12 m4 l4"></div>
                            <div className="col s12 m4 l4 ">
                                <div className="section-heading-main" id="section-heading-main">
                                    <h4 id="section-heading-main-h" className="white-text " >
                                        Why learn with Aurora
                                    </h4>
                                    <img className="right" src="/assets/Aurora_images/svg/label.svg" alt="" />
                                </div>
                            
                            </div>
                            <div className="col s12 m4 l4"></div>
                            
                        </div>

                        <div className="container row learn-with-section" >

                            <div className="col s12 m4">
                                <div className="card-panel z-depth-0 white center" >
                                    <div className="center pb-25">
                                        <div className="card-img-learn-with" >
                                            <img src="assets/Aurora_icons/Why learn card icon.svg" height="inherit" width="inherit" alt="" />
                                        </div>
                                        
                                        <h6><b> Efficient Lessons</b></h6>
                                    </div>
                                    <span className="black-text">
                                        Our lessons have been curated such that you’ll have the perfect course and instructor for you.
                                    </span>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="card-panel z-depth-0 white center" >
                                    <div className="center pb-25">
                                        <div className="card-img-learn-with">
                                            <img src="assets/Aurora_icons/Why learn card icon.svg" height="inherit" width="inherit" alt="" />
                                        </div>
                                        <h6><b> Professional Instructors</b></h6>
                                    </div>
                                    <span className="black-text">
                                        You’ll find professional instructors on our platform who will take you on a journey to financial literacy and answer all financial-related questions, etc.
                                    </span>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="card-panel z-depth-0 white center" >
                                    <div className="center pb-25">
                                        
                                        <div className="card-img-learn-with">
                                            <img src={"./../../../../../assets/Aurora_icons/Why learn card icon.svg"} height="inherit" width="inherit" alt="" />
                                        </div>
                                        <h6><b>Real Time Access to Materials</b></h6>
                                    </div>
                                    <span className="black-text">
                                        We provide you with all necessary materials to gain knowledge and insights on finances; the basics, management, planning, etc.
                                    </span>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
        </div>
    )
}
