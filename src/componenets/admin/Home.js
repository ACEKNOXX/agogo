import React,{useEffect,useState} from 'react'
import Sidebar from './includes/Sidebar'
import Header from './includes/Header' 
import Footer from './includes/Footer'
import TopHeader from './includes/TopHeader'
import CourseCard from './includes/widget/CourseCard'
import './css/style.css'
import './css/style2.css'
import ShimmerCourseCard from './includes/widget/ShimmerCourseCard'
import {firestore} from './../../firebase'

export default function AdminHome() {
    const [loading, setLoading] = useState(false)
    const [courses, setCourses] = useState([])
    
    useEffect(() => {
        setLoading(true)

       firestore.collection("courses").get().then((item) => {
            const items = item.docs.map((doc) => doc)
            setCourses(items)
            // setCourses(itms)
            setTimeout( ()=>{ }, 5000)
            setLoading(false)
        }).catch((e) => {
            console.log("error from snapshot",e)
        })
    },[])
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

                                    {loading &&
                                        <div className="row">
                                            <div className="col s12 m4">
                                                <ShimmerCourseCard />
                                            </div>
                                            <div className="col s12 m4">
                                                <ShimmerCourseCard />
                                            </div>
                                            <div className="col s12 m4">
                                                <ShimmerCourseCard />
                                            </div>
                                        </div>
                                    }
                                    
                                    {!loading &&
                                        <div className="row">
                                            {courses.map((course)=> <div className="col s12 m4"><CourseCard  course={course}/></div> )}
                                        </div>
                                    }
                                {/* <!-- main body --> */}
                            
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
}
