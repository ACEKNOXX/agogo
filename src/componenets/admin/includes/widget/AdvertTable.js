import React,{useState,useEffect} from 'react'
import CourseTableRow from './CourseTableRow'
import { Link} from 'react-router-dom'
import './../../css/style.css'
import './../../css/style2.css'
import { firestore } from './../../../../firebase'
import CircularProgress from '@material-ui/core/CircularProgress';
import AdvertTableRow from './AdvertTableRow'

export default function AdvertTable() {
    const [loading, setLoading] = useState(false)
    const [ads,setAds] = useState([])
    
    
    useEffect(() => {
        firestore.collection("adverts").get().then((item) => {
            setLoading(true)
            const items = item.docs.map((doc) => doc)
            setAds(items)
            // setAds(itms)
            console.log(items)
            setTimeout( ()=>{ }, 5000)
            setLoading(false)
        }).catch((e) => {
            console.log("error from snapshot",e)
        })
    },[])
    return (
        <div>
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
                            <th>Title</th>
                            <th>image</th>
                            <th>status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>

                        
                        
                        {!loading &&
                            <tbody>
                                {ads.map((course)=> <AdvertTableRow ads={course}/>)}
                            </tbody>
                        }

                        
                    </table>
                        
                    {ads.length==0 &&
                            <div className="row" style={{margin:"20px 0px ",width:"100%"}}>
                                <div className="col s12 m4"></div>
                                <div className="col s12 m4 center">
                            {/* <CircularProgress className="center green-text" disableShrink  /> */}
                                    <h5>No Ads uploadeed</h5>
                                </div>
                                <div className="col s12 m4"></div>
                            </div>
                    }
                    {loading &&
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
        </div>
    )
}
