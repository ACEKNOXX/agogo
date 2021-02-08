import React from 'react'
import Sidebar from './../includes/Sidebar'
import Header from './../includes/Header' 
import Footer from './../includes/Footer'
import TopHeader from './../includes/TopHeader'
// import CourseTableRow from './../includes/widget/CourseTableRow'
import { Link} from 'react-router-dom'
import './../css/style.css'
import './../css/style2.css'

export default function AdminBlogPanel() {
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
                                            Blog Section
                                        </span>
                                    </div>
                                    <div className="col s12 m3 right">
                                        <Link to="/adminAddBlogArticle" id="submit-btn" className="mt-25 btn-large  col s12  btn-flat  ">
                                            <span className="white-text">
                                                Upload new article
                                            </span>    
                                        </Link>
                                    </div>
                                </div>

                                
                                
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />

        </div>
    )
}
