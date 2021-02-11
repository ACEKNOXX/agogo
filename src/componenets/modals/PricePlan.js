import React, { useRef, useState } from 'react';

import Button from '@material-ui/core/Button';
import { Link,useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './../css/App.css'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function PricePlan() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)


    return (
    <div>
            {/* <Button id="banner-join-now" type="button" 
                className="modal-trigger btn-large btn-flat btn-large-primary white-text green"
                onClick={handleClickOpen}>
                <h6 style={{
            }}>
                Join aurora 
            </h6>
            </Button> */}
            <Button type="button" id="banner-join-now"  
                className="btn-large btn-flat btn-large-primary white-text green" onClick={handleClickOpen} >
                <h6 style={{
                    
                }}>
                    Join aurora 
                </h6>
            </Button>
       
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className="center" style={{width:"90% !important"}}>
                    <h4 className="center">Pick Link  Plan</h4>
                    <small className="center">Enjoy unlimited learning experience</small>
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText className="center">
            
          </DialogContentText> */}
                <DialogContent>
                    <script src="https://js.paystack.co/v1/inline.js"></script>     
                    <div className="row" >
                            <div className="col s12 m6">
                                
                                {/* card */}
                                <div className="card-panel" style={{
                                    borderRadius:"20px",padding:"0px",width:"230px",height:"300px",backgroundColor:"#FAFAFA"}}>
                                    <div className="center pt-25" style={{
                                        background: "#EF8836", height: "100px",
                                        borderRadius: "20px 20px 0px 0px"
                                    }}>
                                        <h5 className="white-text" style={{
                                            fontWeight:"bold",
                                            fontSize:"28px",
                                            lineHeight: "46px"
                                        }}>Savings club</h5>
                                    </div>
                                    <div className="center">
                                        <span>
                                            <h4 className="pt-25" style={{fontWeight:"normal",
                                            lineHeight:"28px",color:"#353535"}}>
                                            <small style={{fontSize:"20px"}}> ₦</small><b>5000</b>    
                                            </h4>
                                            <small style={{fontWeight:"normal",
                                            fontSize:"16px",
                                            lineHeight: "23px",color:"rgba(53, 53, 53, 0.8)"}}>
                                            One-off Fee</small>
                                        </span>
                                    
                                    </div>
                                    <div className="center mt-25">
                                        <div className="col s3"></div>
                                        <Link to="/financialClub/Savings club" className="col s6  btn-flat   btn-primary transparent waves-effect waves-light btn modal-trigger"
                                            style={{ height: "45px" }}>
                                            Join Aurora
                                        </Link >
                                        <div className="col s3"></div>
                                    </div>
                                </div>
                                {/* card */}
                            </div> 
                            <div className="col s12 m6 ">
                                {/* <div style={{
                                    width:"200px",height:"300px"
                                }}></div> */}
                                {/* card */}
                                <div className="card-panel" style={{
                                    borderRadius:"20px",padding:"0px",width:"230px",height:"300px",backgroundColor:"#FAFAFA"}}>
                                    <div className="center pt-25" style={{
                                        background: "rgba(216, 20, 58, 0.8)", height: "100px",
                                        borderRadius: "20px 20px 0px 0px"
                                    }}>
                                        <h5 className="white-text" style={{
                                            fontWeight:"bold",
                                            fontSize:"28px",
                                            lineHeight: "46px"
                                        }}>Investment Club </h5>
                                    </div>
                                    <div className="center">
                                        <span>
                                            <h4 className="pt-25" style={{fontWeight:"normal",
                                            lineHeight:"28px",color:"#353535"}}>
                                            <small style={{ fontSize: "20px" }}> ₦</small><b>6000</b>/
                                            <small style={{fontSize:"20px"}}> ₦</small><b>10000</b>    
                                            </h4>
                                            <small style={{fontWeight:"normal",
                                            fontSize:"16px",
                                            lineHeight: "23px",color:"rgba(53, 53, 53, 0.8)"}}>
                                            for 6 months/for 12 months</small>
                                        </span>
                                    
                                    </div>
                                    <div className="center mt-25">
                                        <div className="col s3"></div>
                                        <Link to="/financialClub/Investment Club" className="col s6  btn-flat   btn-primary transparent waves-effect waves-light btn modal-trigger"
                                            style={{ height: "45px" }}>
                                            Join Aurora
                                        </Link >
                                        <div className="col s3"></div>
                                    </div>
                                </div>
                                {/* card */}
                            </div> 
                    </div>
                      
               </DialogContent>                                     
        </DialogContent>
        <DialogActions>
          
          {/* <Button onClick={handleClose} color="primary">
            Forget Password
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  )
}
