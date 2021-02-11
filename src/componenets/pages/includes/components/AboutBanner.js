import React from 'react'

export default function AboutBanner() {
    return (
        <div>
        <div className="banner banner-contact" style={{width:"100% !important"}}>
            <div className="about-banner">
                <div id="about-hero-right"></div>
                <div className="about-hero-overlay">
                    {/* <img  width="100%" id="overlay"  src="assets/Aurora_images/svg/overlay.svg" alt="" /> */}
                </div>
                 <div className="about-hero-content row container full-w hide-on-med-and-up">
                    <div className="col mt-120 s12 m6">
                        <h4 className="white-text left">
                            Get to know about Aurora
                        </h4>
                        <div className="row container" style={{
                            margin:" -58px auto 0px auto !important",width: "300px"
                        }}>
                            <div className="col  s4 pink" style={{ height: "15px",marginTop:"-20px"}}
                            ></div>
                            <div className="col s6"></div>
                            <div className="col s2"></div>
                        </div>
                        <div className=" mt-25 white-text">
                            <article>
                                The whole idea of Aurora Financial Literacy with KWO is to share with people how you can grow investments, savings or other source of income . Financial literacy is about unlearning our old habits and learning new ones a lot of us need to take 
                                a step back to refocus and get our finances back in order.
                            </article>
                        </div>
                    </div>
                    <div className="col s12 m6 "></div>
                </div>
                <div className="about-hero-content pt-100  row container full-w hide-on-med-and-down">
                    <div className="col mt-120 s12 m6">
                        <h4 className="white-text center" style={{marginLeft:"-20px"}}>
                            Get to know about Aurora
                        </h4>
                        {/* <div className="row  container" style={{
                            margin:" -28px auto 0px auto !important",width:" 400px"
                        }}>
                            <div className="col s6"></div>
                            <div className="col s4"></div>
                            <div className="col  s2 pink" style={{ height: "15px" }}></div>
                        </div> */}
                        <div className=" mt-25 pl-100   white-text">
                            <article>
                                The whole idea of Aurora Financial Literacy with KWO is to share with people how you can grow investments, savings or other source of income . Financial literacy is about unlearning our old habits and learning new ones a lot of us need to take 
                                a step back to refocus and get our finances back in order.
                            </article>
                        </div>
                    </div>
                    <div className="col s12 m6 "></div>
                </div>
            </div>

        </div>
        <div style={{width:"100%",height:"200px"}}></div>
    </div>
    )
}
