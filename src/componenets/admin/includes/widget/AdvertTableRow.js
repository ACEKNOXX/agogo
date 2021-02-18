import React,{useState} from 'react'
import DeleteAds from './../../modals/DeleteAds'
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { storage, firestore } from './../../../../firebase'
import { useAuth } from './../../../../context/AuthContext'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link, useHistory } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function AdvertTableRow(props) {
    const classes = useStyles();
    const history = useHistory()
    
    const [loading, setLoading] = useState(false)
    const {currentUser,firebaseC} = useAuth();

    
    // swithc
    const corse = props.ads
    const course = corse.data()
    const [state,setState] = useState(course.status)
    const handleChange = (event) => {
        setState(!state);
    };
    // console.log(course)
    const handelSwitch = async() => {
        setLoading(true)
        try {
            await firestore.collection("adverts").doc(corse.id).update({
                status:!state
            }).then(() => {
                // console.log("Document successfully updated!");
                setLoading(true)
                history.push("/admin")
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
            setLoading(true)
        } catch (e) {
            
        }
    }
    return (

            <tr >
                <td>
                    <p>
                    <label>
                        <DeleteAds courseId={corse.id}/>
                    </label>
                    </p>
                </td>
                <td><b>{course.title}</b></td>
                <td>
                    {/* {course.url} */}
                    <img src={course.url} width="300px" style={{height:"300px",borderRadius:"5px"}} alt="" />
                </td>
                {/* <td> 
                    <FormControlLabel
                    control={<Checkbox checked={state} onChange={handleChange} name="gilad" />}
                    label="Active"
                />
                <br />
                
                        <FormControlLabel
                        control={<Checkbox checked={state} onChange={handleChange} name="gilad" />}
                        label="Act"
                    />
                    
                </td> */}
                <td>
                    <span>
                        <Button disabled={loading} onClick={handelSwitch} className="green lighten-4" style={{margin:"0px 2px"}}>
                            {/* <Link to={`/adminAddCourseItem/${corse.id}`} className="red btn-flat transparent"> */}
                                {state &&
                                    <h6 className="green-text">Active</h6>
                                }
                                
                                {!state &&
                                    <h6 className="red-text">Disabled</h6>
                                }
                                {loading &&
                                    <CircularProgress disableShrink  />
                                }
                            {/* </Link> */}
                        </Button>
                        
                        
                    </span>
                </td>
            </tr>
           
    )
}
