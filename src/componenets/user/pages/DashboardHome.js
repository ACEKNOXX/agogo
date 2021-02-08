import React from 'react'
import app, { firestore } from './../../../firebase'
import PaystackBtn from './../modals/PaystackBtn'
import RecentActivity from './../includes/widget/RecentActivity'

export default function DashboardHome(props) {
    const user = props.user
    // console.log("current data",user)
    
    return (
        <div>
            <div className="row">
                <div className="col s12 m8 page-header-title">
                    <span id="page-header-title">Good morning {user.displayName}</span>
                    <img src="assets/svg/sunny.svg" alt="" />
                    <p>Wash your hands, stay safe</p>
                </div>
                <div className="col s12 m4"></div>
            </div>

            <div className="row stats-cards">
                <div className="col s12 m4">
                    <div className="card-panel stats-1">
                        <div className=" row">
                            <div className="col s2">
                                <img className="mt-25" src="assets/svg/book_icon.svg" alt="" />
                            </div>
                            <div className="col s9">
                                <div className="mt-10">
                                    <span className="white-text mt-10" style={{ fontSize: "40px" }}>5</span>
                                    <span className="white-text mt-10">Ongoing</span>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card-panel stats-2">
                        <div className=" row">
                            <div className="col s2">
                                <img className="mt-25" src="assets/svg/tab_complete.svg" alt="" />
                            </div>
                            <div className="col s9">
                                <div className="mt-10">
                                    <span className="white-text mt-10" style={{ fontSize: "40px" }}>5</span>
                                    <span className="white-text mt-10">Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card-panel stats-3">
                        <div className=" row">
                            <div className="col s2">
                                <img className="mt-25" src="assets/svg/saved.svg" alt=""/>
                            </div>
                            <div className="col s9">
                                <div className="mt-10">
                                        <span className="white-text mt-10" style={{ fontSize: "40px" }}>5</span>
                                    <span className="white-text mt-10">Saved</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 ">
                    <p className="latest-activity-title">
                        LATEST ACTIVITY
                    </p>
                </div>
            </div>
            <RecentActivity />

        </div>
    )
}
