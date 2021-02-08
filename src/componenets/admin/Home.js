import React from 'react'
import Sidebar from './includes/Sidebar'
import Header from './includes/Header' 
import Footer from './includes/Footer'
import TopHeader from './includes/TopHeader'
import CourseCard from './includes/widget/CourseCard'
import './css/style.css'
import './css/style2.css'

export default function AdminHome() {
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
                                            <span id="page-header-title">
                                            Financial marketing
                                            </span>
                                        </div>
                                        <div className="col s12 m4 right"></div>
                                    </div>

                                    <div className="row">
                                        <div className="col s12 m4">
                                            <CourseCard />
                                        </div>
                                        <div className="col s12 m4">
                                            <CourseCard />
                                        </div>
                                        <div className="col s12 m4">
                                            <CourseCard />
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
