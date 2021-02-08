import React from 'react'
import { Link} from 'react-router-dom'

export default function Sidebar() {
    return (
<div className="bg-primary">
    <div className="col m3 bg-primary hide-on-med-and-down" style={{height:"100% !important",position:"fixed"}}>
        <div className="container ">
            <div className="dashboard-logo">
                <Link to="/">
                    <img src="../assets/logos/logo white version.svg" height="90px" alt=""/>
                </Link>
            </div>
            <div className="dashboard-sidebar">
                <ul className="collection">
                    <li className="collection-item active">
                        <img src="../assets/svg/home_icon.svg" alt="" />
                        <span className="title white-text p-2">Home</span>
                        <Link to="/" className="secondary-content">
                            <img src="../../assets/svg/dot.svg" alt="" />
                        </Link>
                    </li>
                    <li className="collection-item ">
                        <Link to="/userMyCourses" className="white-text">
                            <img src="assets/svg/courses_icon.svg" alt="" />
                            <span className="title ">My Courses</span>
                            <Link to="" className="secondary-content">
                                <img src="assets/svg/dot.svg" alt="" />
                            </Link>
                        </Link>
                    </li>
                    
                    <li className="collection-item ">
                        <Link to="/userProfile" className="white-text">
                            <img src="assets/svg/person.svg" alt="" />
                            <span className="title ">My account</span>
                            <Link to="#!" className="secondary-content">
                                <img src="assets/svg/dot.svg" alt="" />
                            </Link>
                        </Link>
                    </li>
                    <li className="collection-item ">
                        <Link to="/adminBlogPanel" className="modal-trigger white-text">
                            <img src="assets/svg/docs_sidebar.svg" alt="" />
                            <span className="title ">Community</span>
                            <Link to="" className="secondary-content">
                                <img src="assets/svg/dot.svg" alt="" />
                            </Link>
                        </Link>
                    </li>

                    <img src="../assets/Aurora_icons/bin.svg" alt="" />
                </ul>
            </div>
                    <div className="bg-primary dashboard-sidebar-footer " style={{height:"300px"}}>
                <ul className="collection">
                    <li className="collection-item ">
                        <Link  to="#logout"  className="modal-trigger white-text">
                            <img src="assets/svg/logout.svg" alt="" />
                            <span className="title white-text p-2">Logout</span>
                            <Link to="#!" className="secondary-content">
                                <img src="../assets/svg/dot.svg" alt="" />
                            </Link>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    )
}
