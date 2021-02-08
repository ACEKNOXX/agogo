import React,{useState,useEffect} from 'react'
import Sidebar from './../includes/Sidebar'
import Header from './../includes/Header' 
import Footer from './../includes/Footer'
import TopHeader from './../includes/TopHeader'
import CourseTableRow from './../includes/widget/CourseTableRow'
import { Link} from 'react-router-dom'
import './../css/style.css'
import './../css/style2.css'
import { firestore } from './../../../firebase'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Courses() {
    const [loading, setLoading] = useState(false)
    const [courses,setCourses] = useState([])
    
    
    useEffect(() => {
        firestore.collection("courses").get().then((item) => {
            setLoading(true)
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
                                {/* <!-- main body --> */}
                            
                                <div className="row">
                                    <div className="col s12 m9 page-header-title">
                                        <span id="page-header-title">
                                        My courses
                                        </span>
                                    </div>
                                    <div className="col s12 m3 right">
                                        <Link to="/admincourseUpload" id="submit-btn" className="mt-25 btn-large  col s12  btn-flat  ">
                                            <span className="white-text">
                                                Upload new course
                                            </span>    
                                        </Link>
                                    </div>
                                </div>
                                 <div className="row">
                                    <div className="col s12">
                                        <table  >
                                            <thead className="grey lighten-5">
                                            <tr className=" z-depth-2">
                                                <th>
                                                    <p>
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span></span>
                                                    </label>
                                                    </p>
                                                </th>
                                                <th>Course name</th>
                                                <th>Description</th>
                                                <th>tutor</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>

                                           
                                            
                                            {!loading &&
                                                <tbody>
                                                    {courses.map((course)=> <CourseTableRow  course={course}/>)}
                                                </tbody>
                                            }

                                            
                                        </table>
                                        {courses.length==0 &&
                                            <div className="row" style={{margin:"20px 0px ",width:"100%"}}>
                                                <div className="col s12 m4"></div>
                                                <div className="col s12 m4 center">
                                                    <CircularProgress className="center green-text" disableShrink  />
                                                </div>
                                                <div className="col s12 m4"></div>
                                            </div>
                                        }
                                           
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
