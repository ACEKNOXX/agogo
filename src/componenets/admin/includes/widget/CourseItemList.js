import React,{useState,useEffect} from 'react'
import { Link} from 'react-router-dom'
import { firestore } from './../../../../firebase'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from './../../../../context/AuthContext'
import ItemListingWidget from './ItemListingWidget'
import Button from '@material-ui/core/Button';

export default function CourseItemList(props) {
    const id = props.id;
    const [loading, setLoading] = useState(true)
    const [courseItem,setCourseItem] = useState([])
    const {currentUser,firebaseC} = useAuth();
    const [isEmti,setIsEmti] = useState(false)
    
    useEffect(() => {
        firestore.collection("courses").doc(id).collection("courseLessons").get().then((doc) => {
            // console.log(doc.docs)
            const items = doc.docs.map((doc) => doc)
            setCourseItem(items)
            
            if (items.length == 0) {
                setIsEmti(true)
                setLoading(false)
            }

            setLoading(false)

        }).catch((error) => {
            console.log("Error getting document:", error);
        })

    },[])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th >
                           <Button className="white">
                                <i className="material-icons ">delete</i>
                            </Button>
                        </th>
                        <th>title</th>
                        <th>tutor</th>
                        <th>Duration</th>
                    </tr>
                </thead>

                <tbody>
                   
                    {courseItem.map((course)=> <ItemListingWidget  course={course}/>)}
                </tbody>
            </table>
            {loading &&
                <div className="row" style={{margin:"20px 0px ",width:"100%"}}>
                    <div className="col s12 m4"></div>
                    <div className="col s12 m4 center">
                        <CircularProgress className="center green-text" disableShrink  />
                    </div>
                    <div className="col s12 m4"></div>
                </div>
            }
            {isEmti &&
                <div className="row" style={{margin:"20px 0px ",width:"100%"}}>
                    <div className="col s12 m3"></div>
                    <div className="col s12 m6 center">
                        <h3>No Content Uploaded</h3> 
                    </div>
                    <div className="col s12 m3"></div>
                </div>
            }
        </div>
    )
}
