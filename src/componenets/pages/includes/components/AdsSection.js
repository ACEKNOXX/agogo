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

        firestore.collection("adverts").where("status", "==", true).get().then((item) => {
           const items = item.docs.map((doc) => doc.data())
            setCourses(items)
            // setCourses(itms)
            console.log("t---",items)
            // console.log(item.data().status)
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
            <div className="row ">
                <div className="col s12 m3"></div>
                <div className="col s12 m6 center">
                   
                    {loading &&
                        <CircularProgress />
                    }
                    {courses.length === 0 && 
                        ""
                    }
                    {courses.length > 0 &&
                        
                        <ImageSlider items={courses}/>
                    }
                                      

                </div>
                <div className="col s12 m3"></div>
            </div>
            {/* <div className="col s12">
                <ImageSlider items={courses}/>
            </div> */}
        </div>
    )
}
