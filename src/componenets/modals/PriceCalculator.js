import React, { useRef, useState } from 'react';

import Button from '@material-ui/core/Button';
import { Link,useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './../css/App.css'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function PriceCalculator() {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const principal = useRef(null)
    const ratePer = useRef(null)
    const timePer = useRef(null)

    const handleChange = () => {
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            console.log(principal.current.value, ratePer.current.value, timePer.current.value)
            var p = principal.current.value
            var r = ratePer.current.value * 0.01
            var t = timePer.current.value
            const interest =(p*r*t)/100
            console.log(interest);
        } catch (e) {
            
        }
        
        setLoading(false)
    }

    return (
    <div>
            
            {/* <Button type="button" id="banner-join-now"  
                className="btn-large btn-flat btn-large-primary white-text green"
                onClick={handleClickOpen} >
                <h6 style={{
                    
                }}>
                    Join aurora 
                </h6>
            </Button> */}
        <Link to="#modal-pricing"  onClick={handleClickOpen}  className="grey-text text-darken-3  modal-trigger">Pricing calculator</Link>
       
        <Dialog
            open={open}
            onClose={handleClose}
            scroll={"body"}
            aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className="center" style={{width:"100% !important"}}>
                  
        </DialogTitle>
        <DialogContent style={{ width: "100% !important" }}>
            <div>
                <div className="col s12 right">
                    <span onClick={handleClose} className="right modal-close black-text red lighten-4" 
                    style={{cursor: "pointer",borderRadius:"100%",width:"25px",height:"25px",padding:"3px 4px"}}> 
                                <i className="material-icons red-text" style={{ fontSize: "16px" }}>close</i> 
                    </span>
                </div>
            </div>        
            <div className="">
                <form onSubmit={handleSubmit}>
                <div className="" style={{width:"100% !important"}}>
                    <div className="col  s12 left " >
                        <h5 style={{fontWeight: "bold",
                        fontSize: "23px",
                        lineHeight:"46px",color: "#002044"}}>Interest calculator</h5>
                        <small>Choose any pricing plan today and learn how to grow your investments.</small>
                        <hr className="red-text" style={{border:"1px solid #eee"}} />
                    </div>
                    
                    <p>How much do you want to save?</p>
                    <div className=" col s12 full-w" style={{ display: "flex",justifyContent:"space-between" }}>
                                <input ref={principal} onChange={handleChange} placeholder="NGN 0.00" type="text" className="validate"
                                    style={{width:"75% !important"}} />
                        <select style={{width:"25% !important"}}>
                            <option value="" selected>month</option>
                            <option value="1">Option 1</option>
                        </select>
                    </div>
                    <p>For how long?(in months)</p>
                    <div className=" col s12 full-w" style={{ display: "flex" }}>
                        <input placeholder="0" type="text" ref={timePer} onChange={handleChange}  className="validate" style={{ width: "100% !important" }}/>
                    </div>
                    <p>Interest rate in % per annum</p>
                    <div className=" col s12 full-w" style={{ display: "flex" }}>
                        <input placeholder="0" type="text" ref={ratePer} onChange={handleChange} className="validate" style={{ width: "100% !important" }}/>
                    
                    </div>
                    <div className="full-w row pt-25">
                        
                        <button disabled={loading} className="btn-flat btn- col s12 green center white-text">
                                       
                            {loading &&
                            <CircularProgress disableShrink  />
                            }
                            {!loading &&
                                 "Calculate"
                            }
                        </button>
                                    
                        
                    </div>
                </div>
                </form>
            </div>
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
