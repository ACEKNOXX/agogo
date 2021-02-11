import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import {firestore} from './../../../../firebase'
// import CircularProgress from '@material-ui/core/CircularProgress';
import ShimmerCourseCard from './../../../admin/includes/widget/ShimmerCourseCard'
import CourseCard from './../../../admin/includes/widget/CourseCard'

export default function ExploreBody() {
    const [loading, setLoading] = useState(false)
    const [courses,setCourses] = useState([])
    const [isEmpti,setIsEmpti] = useState(false)
    useEffect(() => {
        setLoading(true)

       firestore.collection("courses").get().then((item) => {
           const items = item.docs.map((doc) => doc)
            setCourses(items)
            // setCourses(itms)
           if (items.length == 0) {
                setIsEmpti(true)
            }
            setTimeout( ()=>{ }, 5000)
            setLoading(false)
        }).catch((e) => {
            console.log("error from snapshot",e)
        })
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m10">
                    <div className=" pb-25 left section-heading" >
                        <h4 className="primary-color" style={{fontWeight:"bold"}}>Trending public finance courses</h4>
                        <div className="row  full-w  hide-on-med-and-up" style={{marginTop:"-30px",width:"400px"}}>
                            <div className="col s7"></div>
                            <div className="col s3 pink" style={{ height: "15px" }}></div>
                            <div className="col s2"></div>
                            
                        </div>
                        <div className="row  full-w  hide-on-med-and-down" style={{marginTop:"-30px",width:"400px"}}>
                            <div className="col s7"></div>
                            <div className="col s3"></div>
                            <div className="col s2 pink" style={{height:"15px"}}></div>
                            
                        </div>
                    </div>
                </div>
                <div className=" col m2 s12 pt-25 ">
                    <h6 className="mt-25 right">
                        <Link to="/"  className=" green-text" style={{textDecoration:"underline"}}>View all</Link>
                    </h6>
                </div>
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
            {isEmpti &&
                <div className="row">
                    <div className="col s12 center">
                        <h2 className="center">Available No courses</h2>
                    </div>
                </div>
            }
        </div>
    )
}
