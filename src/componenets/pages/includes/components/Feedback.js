import React from 'react'

export default function Feedback() {
    return (
        <div className=" pt-50 full-w" id="feedbacks">
            <div className="row hide-on-med-and-down">
                <div className="pb-25 center section-heading student-comment-heading " id="student-heading">
                    <h4 className="primary-color">With <span className="red-text"> ❤ </span>from Aurora students</h4>
                </div>
            </div>
            <div className="row show-on-medium-and-down hide-on-med-and-up">
                <div className="col s12 pb-25 center section-heading student-comment-heading " >
                    <h4 className="primary-color">With <span className="red-text"> ❤ </span>from Aurora students</h4>
                </div>
            </div>

            <div className=" row mb-25  container" id="feedback-tab" >
                <div className="col  s12 center m3">
                    <div className="img-avatar" >
                        <img className="" src="assets/Aurora_images/Ellipse 19-min.png"  width="100px" height="100px"  alt="" />
                    </div>
                    <h6> <b> Godswill Wike</b> </h6>
                    <small>Student</small>
                </div>
                <div className="col  s12 m7">
                    <article className="pt-50">
                        Seamlessly maximize user friendly communities whereas customer directed results. Professionally productize impactful portals through standardized ROI. Energistically initiate client-centric results with value-added vortals.
                    </article>
                </div>
                <div className="col  s12 m2"></div>
            </div>
            <br/>
            <div className="row   container mb-25"  id="feedback-tab">
                <div className="col  s12 center m3">
                    <div className="img-avatar" >
                        <img  src="assets/Aurora_images/Ellipse 19-min.png"  width="100px" height="100px"  alt="" />
                    </div>
                    <h6> <b> Godswill Wike</b> </h6>
                    <small>Student</small>
                </div>
                <div className="col  s12 m7">
                    <article className="pt-50">
                        Seamlessly maximize user friendly communities whereas customer directed results. Professionally productize impactful portals through standardized ROI. Energistically initiate client-centric results with value-added vortals.
                    </article>
                </div>
                <div className="col  s12 m2"></div>
            </div>

        </div>
    )
}
