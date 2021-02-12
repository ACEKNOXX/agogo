import React,{useEffect,useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {firestore} from './../../../../firebase'
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageSlider from './../../../util/ImageSlider'

export default function AdsSection() {
const [loading, setLoading] = useState(false)
    const [courses,setCourses] = useState([])
    const [isEmpti,setIsEmpti] = useState(false)
    useEffect(() => {
        setLoading(true)

        firestore.collection("adverts").get().then((item) => {
           const items = item.docs.map((doc) => doc.data().url)
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
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col s12 m4"></div>
                <div className="col s12 m4 center">
                    {/* {courses.map((course)=> `${course}--` )} */}
                    {/* <CircularProgress /> */}
                    <ImageSlider imgs={courses}/>

                </div>
                <div className="col s12 m4"></div>
            </div>
        </div>
    )
}
