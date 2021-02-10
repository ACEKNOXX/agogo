import React,{useEffect,useState} from 'react'
import {firestore} from './../../../../firebase'

export default function MyProfileWidget(props) {
    const uid = props.uid
    const [loading, setLoading] = useState(false)
    var dett = {
        displayName:null,
        phoneNumber: null,
        photoUrl: null,
        email: null,
        aboutMe:null
    }
    const [myDetails,setMyDetails]=useState(null)

    useEffect(() => {
        firestore.collection("users").doc(uid).get().then((doc) => {
            setLoading(true)
            const dets = doc.data()
            setMyDetails(dets)
            console.log(dets)

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
                        <ul id="profile-account-collection" className="collection grey lighten-2">
                            <li className="collection-item grey lighten-4 avatar" >
                                <img src="../assets/Aurora_images/11.jpeg" 
                                width="100px"  
                                height="100px"  className="circle" />
                                <span className="title">
                                    <h5>
                                        {loading && 
                                            <div className="progress grey lighten-3" style={{borderRadius:"20px",height:"40px"}}>
                                                <div className="indeterminate grey lighten-4"></div>
                                            </div>
                                        }
                                    
                                    </h5>
                                </span>
                                <p className="grey-text">Description:
                                    <br/>
                                    <span className="black-text">
                                        <div className="progress grey lighten-3" style={{borderRadius:"20px",height:"80px"}}>
                                            <div className="indeterminate grey lighten-4"></div>
                                        </div>
                                    </span>
                                </p>
                               
                                
                            </li>
                            <li className="collection-item avatar grey lighten-4">
                                <i className="material-icons circle grey lighten-2">mail</i>
                                <span className="title">
                                   
                                </span>
                                <p>
                                    <div className="progress grey lighten-3" style={{borderRadius:"20px",height:"40px"}}>
                                        <div className="indeterminate grey lighten-4"></div>
                                    </div>
                                </p>
                            </li>
                            <li className="collection-item avatar grey lighten-4">
                                <i className="material-icons circle grey lighten-2">phone</i>
                                <span className="title">
                                {loading &&
                                    <div className="progress grey lighten-3" style={{borderRadius:"20px",height:"40px"}}>
                                        <div className="indeterminate grey lighten-4"></div>
                                    </div>
                                }
                                </span>
                            </li>
                           
                        </ul>
                    </div>
                </div>

        </div>
    )
}
