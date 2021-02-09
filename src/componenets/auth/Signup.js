import React, { useRef,useState } from 'react'
import {Link, useHistory } from 'react-router-dom';
import { useAuth } from './../../context/AuthContext'
import {firestore,auth} from './../../firebase'
import './../css/App.css'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button';

export default function Signup() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };
    const handleClose = () => {
    setOpen(false);
    };

    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const {signup} = useAuth();
    // error state below
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        // alert(passwordRef.current.value);
        
        if (passwordRef.current.value.length < 6 ) {
            return setError('Password should be atleast 6 chars')
        }
        
        try {
            setError('')
            setLoading(true)
            // console.log(user.user.uid);
            // console.log("username",usernameRef.current.value);
            // console.log("email address", emailRef.current.value)
            // console.log("pass",passwordRef.current.value)
            // console.log("agagon")
            var name = usernameRef.current.value
            var currentemail = emailRef.current.value
            var user= await signup(emailRef.current.value, passwordRef.current.value)
            
            var userCurrent = auth.currentUser;
                console.log(userCurrent)


                userCurrent.updateProfile({
                    displayName: name ,
                    // photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(function() {
                // Update successful.
                    console.log("user details  Update successful")
                }).catch(function(error) {
                // An error happened.    
                    console.log(error)
                })
            // console.log(user.user.uid)
            await firestore.collection("users")
                .doc(user.user.uid).set({
                    "uid":user.user.uid,
                    "displayName":name,
                    "email": currentemail,
                    "phoneNumber":null
                })
            
            history.push('/user')
            
        }  catch (e) {
            console.log(e)
            let errMsg = e.message;
            setError(errMsg)
        }
        setLoading(false)
    }
    
  return (
    <div>
        <Button variant="outlined" className="right btn-flat btn-primary btn-oultine transparenet " style={{
              margin: "0px 10px",
           
        }} onClick={handleClickOpen}>
        SignUp
      </Button>
            
      <Dialog open={open} onClose={handleClose} scroll={"body"}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
                  <h4 className="center">Sign up</h4>
        </DialogTitle>
        <DialogContent style={{width:"100% !important"}}>
                  
            <div className="center">
                <i className="material-icons medium center">account_circle</i>
            </div>
            {error &&
                <div className="col s12">
                    <div className="row alert-err" style={{ padding: "16px" }} >
                        <span className="white-text  mt-25" >
                            {error}
                        </span>
                    </div>
                </div>
            }
          <DialogContentText className="center">
            Enjoy unlimited learning experience
          </DialogContentText>

           <div className="modal-content " style={{width:"400px !important"}}>
                <div className="row" id="login-form" >
                    {/* <div className="col  s12 center ">
                        { currentUser && <Link to="/user">You logged in pls continue</Link> }    
                    </div> */}
                    <div className="pt-25">
                        <form onSubmit={handleSubmit}>
                                <div className="">
                            <div className="row">
                                
                                <div className="col s12 body ">
                                    
                                    <div className="form-section-1 mt-25 row">
                                        <div className=" col s12" >
                                            <label htmlFor="username" className="col s12 grey-text">Username</label>
                                            <input ref={usernameRef} id="username" className="col s12 mt-50 ful l-w" placeholder="email address"  type="text" />
                                        </div>
                                    </div>
                                    <div className="form-section-1 mt-25 row">
                                        <div className=" col s12" >
                                            <label htmlFor="email" className="col s12 grey-text">Email Address</label>
                                            <input id="email" className="col s12 mt-50 ful l-w" placeholder="email address" ref={emailRef} type="email" />
                                        </div>
                                    </div>
                                    <div className="form-section-1 mt-25 row">
                                        <div className=" col s12" >
                                            <label htmlFor="password" className="col s12 grey-text">Password</label>
                                            <input  className="col s12 mt-50 full-w" id="password" ref={passwordRef} placeholder="password" type="password" />
                                        
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                    <button disabled={loading} type="submit" className="col s12 btn-flat btn-large btn-large-primary white-text green"
                                    style={{
                                              marginLeft:"5px"
                                    }}>
                                      {loading &&
                                        <CircularProgress disableShrink  />
                                      }
                                      {!loading &&
                                          <b>Login</b>
                                      }
                                    </button>
                                    </div>
                                        
                                </div>
                            </div>
                            <div className="full-w center">
                                <p>Don’t have account yet? 
                                    <Link to="/signup"  className="green-text">Join Aurora today</Link> 
                                </p>
                            </div>
                            <div className="full-w center">
                                <p> 
                                    <Link to="/signup"  className="green-text">Forget Password</Link> 
                                </p>
                            </div>
                        </div>
                        
                        </form>
                    </div>
                    
                </div>
            </div>
        </DialogContent>
        <DialogActions>
          
          {/* <Button onClick={handleClose} color="primary">
            Forget Password
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
