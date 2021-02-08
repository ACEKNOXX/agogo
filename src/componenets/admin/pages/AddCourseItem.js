import React from 'react'
import Sidebar from './../includes/Sidebar'
import Header from './../includes/Header' 
import Footer from './../includes/Footer'
import TopHeader from './../includes/TopHeader'
import './../css/style.css'
import './../css/style2.css'
import './../css/style.css'
import './../css/style2.css'
import AddCourseVideoButton from './../modals/AddCourseVideoButton'
import CourseItemList from './../includes/widget/CourseItemList'

export default function AddCourseItem(props) {
    const id = props.match.params.id;
    return (
        <div>
                <Header />
                    <div className="main">
                        <div className="row">
                            <Sidebar />
                            <div className="col m3 s12 "></div>
                            <div className="col m9 s12 white side-side">
                                <TopHeader />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m3"></div>
                            <div className="col s12 m9 main-main">
                                    <div className="row">
                                        <div className="col s12 m10 page-header-title">
                                            <span id="page-header-title">
                                                Add Course Item<small>({id})</small> 
                                            </span>
                                        </div>
                                        <div className="col s12 m2 right">
                                            <AddCourseVideoButton courseId={id}/>
                                        </div>
                                    </div>
                                    {id &&
                                        <CourseItemList id={id}/>
                                    }
                                    
                                   
                                {/* <!-- main body --> */}
                            
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        )
}
