import React from 'react'
import { Link} from 'react-router-dom'
import { useAuth } from './../../../context/AuthContext'
import Sidebar from './../includes/Sidebar'
import Header from './../includes/Header' 
import Footer from './../includes/Footer'
import TopHeader from './../includes/TopHeader'
import './../css/style.css'
import './../css/style2.css'
import MyCoursesWidget from './../includes/widget/MyCourses'


export default function MyCourses() {
    const { currentUser } = useAuth();
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
                                <div className="row">
                                    <div className="col s12 m8 page-header-title">
                                        <span id="page-header-title">My Courses</span>
                                        <img src="assets/svg/sunny.svg" alt="" />
                                        <p>Wash your hands, stay safe</p>
                                    </div>
                                    <div className="col s12 m4"></div>
                                </div> 

                                <MyCoursesWidget />
                                    
                                {/* <!-- main body --> */}
                            
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
}
