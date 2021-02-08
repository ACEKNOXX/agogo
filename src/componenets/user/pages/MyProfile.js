import React from 'react'
import { Link} from 'react-router-dom'
import { useAuth } from './../../../context/AuthContext'
import Sidebar from './../includes/Sidebar'
import Header from './../includes/Header' 
import Footer from './../includes/Footer'
import TopHeader from './../includes/TopHeader'
import './../css/style.css'
import './../css/style2.css'
import MyProfileWidget from './../includes/widget/MyProfileWidget'

export default function MyProfile() {
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
                                    <div className="col s12  page-header-title">
                                        <div className="col s12 m10 page-header-title">
                                            <span id="page-header-title">My Account</span>
                                        </div>
                                        <div className="col s12 m2  right">
                                            <Link to="/" id="edit-btn" className="right secondary-content white-text mt-25 right waves-effect grey darken-2 btn-flat" >
                                                <i className="material-icons left">edit</i>Edit Profile
                                            </Link>
                                        </div>
                                    </div>
                                </div> 

                                <MyProfileWidget />
                                    
                                {/* <!-- main body --> */}
                            
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
}
