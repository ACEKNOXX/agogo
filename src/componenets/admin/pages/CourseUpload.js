import React, { useRef, useState } from 'react';
import Sidebar from './../includes/Sidebar'
import Header from './../includes/Header' 
import Footer from './../includes/Footer'
import TopHeader from './../includes/TopHeader'
// import {Link} from 'react-router-dom'
import './../css/style.css'
import './../css/style2.css'
import AddCourse from './../modals/AddCourse'


export default function CourseUpload() {
    const [coursetitl, setCoursetitl] = useState(null)
    const coursetitle = useRef(null);
    const coursedesc = useRef(null);

    
    const handleChange = () => {
        setCoursetitl(
            {
                title: coursetitle.current.value,
                desc: coursedesc.current.value 
            }
        )
    }

    return (
        <div>
             <Header />
                <main>
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
                                {/* <!-- main body --> */}
                            
                                <div className="row">
                                    <div className="col s12 m9 page-header-title">
                                        <span id="page-header-title">
                                        Add New Courses
                                        </span>
                                    </div>
                                    <div className="col s12 m3 right">
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col s12 m4 ">
                                        <div className="form-section-1 row">
                                            <div className=" col s12" >
                                                <label htmlFor="course-title" className="col s12 grey-text">Course name</label>
                                                <input className="col s12 mt-50 full-w" id="course-title"  ref={coursetitle} onChange={handleChange} placeholder="Course name" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m1"></div>
                                    <div className="col s12  m6">
                                        <div className="form-section-1  row">
                                                <div className=" col s12 m9" style={{paddingTop:"0px !important"}}>
                                                <label htmlFor="msg" className="col s12 grey-text">Description</label>
                                                <textarea ref={coursedesc} onChange={handleChange} id="msg" className="col s12 materialize-textarea">
                                                
                                                </textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col s12 m5"></div>
                                            <div className="col s12 m4">
                                                { !coursetitl &&
                                                    <AddCourse courseDetails={null}/ >
                                                }
                                                {   coursetitl &&
                                                    <AddCourse courseDetails={coursetitl}/>
                                                }
                                            </div>
                                            <div className="col s12 m3"></div>
                                        </div>
                                    </div>

                                </div>
                               
                                
                                {/* <!-- main body --> */}
                            
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />

        </div>
    )
}

