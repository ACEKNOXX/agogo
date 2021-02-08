import React,{useEffect,useState} from 'react'
import app, { firestore } from './../../../../firebase'
import { useAuth } from './../../../../context/AuthContext'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link} from 'react-router-dom'


export default function MyCoursesWidget() {
    const { currentUser } = useAuth();
const [loading, setLoading] = useState(false)
    const [courses,setCourses] = useState([])
    const getMyCourses = () => {
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
    }

    
    
    

    useEffect(  () => {
        firestore.collection("users").doc(currentUser.uid).collection("courses").get().then((item) => {
            setLoading(true)
            const items = item.docs.map((doc) => doc)
            console.log(items)
            setCourses(items)
            setTimeout( ()=>{ }, 5000)
            setLoading(false)
        }).catch((e) => {
            console.log("error from snapshot",e)
        })
    
    },[])
    return (
        <div>
            
            {loading &&
                
                
                <div className="row">
                    <div className="col s12 m4"></div>
                    <div className="col s12 m4">
                        <CircularProgress className="greem" />
                    </div>
                    <div className="col s12 m4"></div>

                </div>
            }
            {courses.length==0 &&
                <div className="row">
                    <div className="col s12 center">
                        <h4>You have not engaged any course</h4>
                        <h5>Browse our course to get started</h5>
                        <Link className="center btn-flat btn-primary btn-oultine " to="/explore">Explore Courses</Link>
                    </div>

                </div>
            }
           
            


        </div>
    )
}
