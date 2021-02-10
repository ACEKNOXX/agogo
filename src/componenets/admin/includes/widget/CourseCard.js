import React from 'react'
import { Link} from 'react-router-dom'

export default function CourseCard(props) {
    const corse = props.course
    const course = corse.data()
    console.log(course)
    return (
        <div>
            <div className="card course-cards">
                <div className="card-image">
                    <img src={`${course.courseBannerImageUrl}`} alt="" />
                </div>
                <div className="card-content">
                    <div className="card-heading">
                        <h5>{course.courseTitle}</h5 >
                        <p>by { course.courseTutor}</p>
                        <div className="card-context-head-stats">
                            <div className="col s4 ">
                                <img src="../assets/Aurora_icons/my account icon.svg" height="12px" alt=""  />
                                <small>
                                    <b> 
                                        2.5k
                                    </b>
                                </small>
                            </div>
                            <div className="col s4">
                                <img src="../assets/Aurora_images/svg/star.svg" height="12px" alt="" />
                                <small>
                                    <b> 
                                        4.5k
                                    </b>
                                </small>
                                
                            </div>
                            <div className="col s4">
                                <small>
                                    <b> 01h 25m </b>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="row card-context-body">
                        <div className="col s12 card-context-body-details " >
                            
                                <p>
                                    {course.courseShortDescription.substring(0,250)}...
                                </p>
                                
                        </div>
                        <div className="col s5">
                            
                            <Link to={`/single-course/${corse.id}`} className="btn-flat  btn-primary transparent waves-effect waves-light btn modal-trigger">
                                View
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
