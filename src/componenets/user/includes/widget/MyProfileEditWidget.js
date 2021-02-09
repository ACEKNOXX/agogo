import { useAuth } from './../../../../context/AuthContext'
import React, { useRef,useState } from 'react'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { firestore } from './../../../../firebase'

export default function MyProfileEditWidget() {
    const emailRef = useRef(null)
    const displayNameRef = useRef(null)
    const phoneNumberRef = useRef(null)
    const passwordRef = useRef(null)
    const passwordConRef = useRef(null)
    const aboutMeRef = useRef(null)
    const { currentUser } = useAuth();

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handlePasswordMatch = () => {
        if (passwordRef.current.value !== passwordConRef.current.value) {
            setError("Password does not match")
        }
        if (passwordRef.current.value == passwordConRef.current.value) {
            setError(null)
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        // console.log(emailRe)
        // var email = emailRef.current.value
        // var displayName = displayNameRef.current.value
        // var phoneNumber = phoneNumberRef.current.value
        // var aboutMe = aboutMeRef.current.value
        // var password = passwordRef.current.value


        try {
            console.log(currentUser.id)
            // currentUser.updateEmail(email);
            // firestor.collection("users").doc(currentUser.id).update({
            //     capital: true
            // })
            // .then(() => {
            //     console.log("Document successfully updated!");
            // })
            // .catch((error) => {
            //     // The document probably doesn't exist.
            //     console.error("Error updating document: ", error);
            // });
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }
    return (
        <div>
            <div className="row">
                <div className="col s12">
                    <div className="  p-2 bg-primary">
                        <div className="row mt-25">
                            <div className="col s12 m1"></div>
                            <div className="col s12 m1">
                                <img src="./../../../../assets/Aurora_images/Ellipse 19-min.png" alt="" height="80px" width="80px" className="circle" />
                            </div>
                            <div className="col s12 left m5">
                                <h6 className="p-2 ">
                                    Emeka Doe
                                    <span>
                                        <br/>
                                        <small>
                                            Pro membership plan
                                        </small>
                                    </span>
                                </h6>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="row">
                    
                    <div className="col s12">
                        <div className="container">
                            
                            <div className="row ">
                                <div className="col s12 m6">
                                    <div className="form-section-1 mt-25 row">
                                        <div className=" col s12" >
                                            <label htmlFor="email" className="col s12 grey-text">Fullname</label>
                                            <input className="col s12 mt-50 full-w" id="fullname" ref={displayNameRef} placeholder="Fullname" type="text" />
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m6">
                                    <div className="form-section-1 mt-25 row">
                                        <div className=" col s12" >
                                            <label htmlFor="email" className="col s12 grey-text">About me</label>
                                            <input className="col s12 mt-50 full-w" id="password" ref={aboutMeRef} placeholder="bio" type="text" required/>
                                        
                                        </div>
                                    </div>
                                </div>

                                <div className="col s12 m6">
                                    <div className="form-section-1 row">
                                        <div className=" col s12" >
                                            <label htmlFor="email" className="col s12 grey-text">Phone</label>
                                            <input className="col s12 mt-50 full-w" id="email" ref={phoneNumberRef} placeholder="+234" type="tel" required/>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m6">
                                    <div className="form-section-1 row">
                                        <div className=" col s12" >
                                            <label htmlFor="email" className="col s12 grey-text">New Password</label>
                                            <input className="col s12 mt-50 full-w" id="password" ref={passwordRef} placeholder="New password" type="password" required/>
                                        
                                        </div>
                                    </div>
                                </div>

                                 <div className="col s12 m6">
                                    <div className="form-section-1 row">
                                        <div className=" col s12" >
                                            <label htmlFor="email" className="col s12 grey-text">Email</label>
                                            <input className="col s12 mt-50 full-w" id="email" ref={emailRef} placeholder="Email Address" type="email" required/>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m6">
                                    <div className="form-section-1 row">
                                        <div className=" col s12" >
                                            <label htmlFor="email" className="col s12 grey-text">Confirm Password</label>
                                            <input className="col s12 mt-50 full-w" id="password" onChange={handlePasswordMatch} ref={passwordConRef} placeholder="password" type="password" required/>
                                        
                                        </div>
                                    </div>
                                </div>
                                {error &&
                                    <div className="col s12">
                                        <div className="row  alert-err" style={{ padding: "16px",width:"90% !important",margin:"20px auto !imporant", }} >
                                            <span className="white-text  mt-25" >
                                                {error}
                                            </span>
                                        </div>
                                    </div>
                                }
                                <br/>
                                 <div className="col s12 m6">
                                    <button type="submit" disabled={loading} id="submit-btn" className="btn-large col s5  btn-flat  ">
                                        {!loading &&
                                            <span className="white-text">
                                                Save Changes
                                            </span>
                                        }

                                        {loading &&
                                            <CircularProgress />
                                        }
                                    </button>
                                </div>
                                <div className="col s12 m6">
                                    
                                </div>

                            </div>

                            

                        </div>  
                    </div>
                </div>
            </form>
        </div>
    )
}
