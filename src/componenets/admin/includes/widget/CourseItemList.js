import React,{useState,useEffect} from 'react'
import { Link} from 'react-router-dom'
import { firestore } from './../../../../firebase'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from './../../../../context/AuthContext'
import ItemListingWidget from './ItemListingWidget'
import Button from '@material-ui/core/Button';

export default function CourseItemList(props) {
    const id = props.id;
    const [loading, setLoading] = useState(false)
    const [courseItem,setCourseItem] = useState([])
    const {currentUser,firebaseC} = useAuth();
    
    
    useEffect(() => {
        firestore.collection("courses").doc(id).collection("courseLessons").get().then((doc) => {
            // console.log(doc.docs)
            const items = doc.docs.map((doc) => doc)
            setCourseItem(items)
            // doc.forEach((docc) => {
            // // doc.data() is never undefined for query doc snapshots
            //     console.log(doc.id, " => ", doc.data());
            // });

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
            {courseItem.length==0 &&
                <div className="row" style={{margin:"20px 0px ",width:"100%"}}>
                    <div className="col s12 m4"></div>
                    <div className="col s12 m4 center">
                        <CircularProgress className="center green-text" disableShrink  />
                    </div>
                    <div className="col s12 m4"></div>
                </div>
            }
        </div>
    )
}
