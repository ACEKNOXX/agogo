import { Link} from 'react-router-dom'
import React from 'react'
import Sidebar from './../includes/Sidebar'
import Header from './../includes/Header' 
import Footer from './../includes/Footer'
import TopHeader from './../includes/TopHeader'
import './../css/style.css'
import './../css/style2.css'
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';
// import VideocamIcon from '@material-ui/icons/Videocam';
import './../css/style.css'
import './../css/style2.css'
// import { storage,firestore } from './../../../firebase'
// import CircularProgress from '@material-ui/core/CircularProgress';
// import { useAuth } from './../../../context/AuthContext'
import AddCourseVideoButton from '../modals/AddCourseVideoButton'

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
                                            {/* <Button type="button"  className="mt-25 btn-large green col s6">
                                                    <span className="white-text">
                                                        <i className="material-icons">add</i>
                                                    </span>    
                                            </Button> */}
                                            <AddCourseVideoButton courseId={id}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col s12 m7 grey">
                                            <video  width="100%" height="400" controls >
                                                <source src="assets/video/1. Intro.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div className="col s12 m5" id="course-outline">
                                            
                                    <div className="collection" style={{ width: "90%;" }}>
                                                <div className="collection-header p-25">
                                                    <h5 className="ml-25" style={{marginTop:"-5px"}}>
                                                            6 lessons (1h2m)
                                                    </h5>
                                                </div>
                                                <div className="collection-item">
                                                    <Link to="#" className="black-text">
                                                        <i className="material-icons green-text">check</i>
                                                        Globally embrace open-source.
                                                        <Link to="#!" className="secondary-content">
                                                            <small>
                                                                01:24
                                                            </small>
                                                        </Link>
                                                    </Link>
                                                </div>
                                                
                                                
                                                
                                                
                                                <div className="collection-item">
                                                    <img src="assets/svg/exams_icon.svg" alt="" />
                                                    Take your examination
                                                    <Link to="/" className="secondary-content">
                                                        {/* <small>
                                                            01:24
                                                        </small> */}
                                                    </Link>
                                                </div>
                                                <div className="collection-item">
                                                    <Link to="/">
                                                        <img src="assets/svg/badge.svg" alt="" />
                                                        Get your certificate
                                                        <Link to="#!" className="secondary-content">
                                                            {/* <small>
                                                                01:24
                                                            </small> */}
                                                        </Link>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                {/* <!-- main body --> */}
                            
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        )
}
