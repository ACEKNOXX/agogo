import React,{useEffect,useState} from 'react'
import {firestore} from './../../../../firebase'
import CircularProgress from '@material-ui/core/CircularProgress';
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
