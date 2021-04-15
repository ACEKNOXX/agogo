import React, { useRef, useState } from 'react';

import Button from '@material-ui/core/Button';
import { Link,useHistory } from 'react-router-dom'
import { useAuth } from './../../../context/AuthContext'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { storage,firestore } from './../../../firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}))
export default function UploadImageToGallery() {
    const classes = useStyles();

  const [openn, setOpenn] = React.useState(false);

  const handleClickOpen = () => {
    setOpenn(true);
  };
  const handleClose = () => {
    setOpenn(false);
  };

    const titleRef = useRef(null);
    const passwordRef = useRef(null);
    const { login,currentUser } = useAuth();
    // error state below
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            console.log(e.target.files[0].name)
            console.log(e.target.files)
            // setMediapath(e.target.files[0].name)
            setImage(e.target.files[0])
        }
  }
  
 

    const handleSubmit = async (e) => {
        e.preventDefault()
        // alert("djdj")
        setLoading(true)
        try {
            const upload = await storage.ref(`Gallery/${image.name}`).put(image)
            
            storage.ref(`Gallery/${image.name}`).getDownloadURL()
            .then( async (url) => {
                // `url` is the download URL for 'images/stars.jpg'

                console.log("url", url)
                var dataToPush = {
                    "url": url,
                    "title": titleRef.current.value,
                    "fileName":image.name,
                    "status": true,
                    "image": true,
                    "video":false
                }
                console.log(dataToPush)
                await firestore.collection('gallery').doc().set(dataToPush)

                history.push("/admin")
            })
            .catch((error) => {
                // Handle any errors
            })
            
            
        } catch(err) {
            console.log(err)
        }
        setLoading(false)
        // console.log(imageRef.current.value)
    }
  return (
    <div>
      <Button variant="outlined" id="submit-btn"  className="right btn-large  col s12  btn-flat green   white-text"  onClick={handleClickOpen}>
        Upload To Gallery
      </Button>

      <Dialog open={openn} scroll={'body'} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <div className="right">
            <button onClick={handleClose} className="btn-flat transparent center" type="button" style={{
              width:"15px"
            }}>
              <i className="material-icons">close</i>
            </button>
          </div>
          <div className="col s12 center">
            <h4 className="center">Upload Images to Gallery</h4>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="center">
            Please enter name/title for each image
          </DialogContentText>

           <div className="modal-content " style={{width:"350px !important"}}>
                <div className="row" id="login-form" >
                    <div className="col  s12 center ">
                        {/* error msg tab */}
                       
                    </div>
                    <div className="pt-25">
                        <form onSubmit={handleSubmit}>
                                <div className="">
                            <div className="row">
                                
                                <div className="col s12 body ">
                                    <div className="form-section-1 row">
                                        <div className=" col s12" >
                                            <label htmlFor="title" className="col s12 grey-text">Image title</label>
                                            <input id="title" className="col s12 mt-50 full-w" placeholder="image title" ref={titleRef} type="text" />
                                        </div>
                                    </div>
                                    
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file-image"
                                        type="file"
                                        // ref={imageRef}
                                        onChange={handleChange}
                                        multiple
                                    />
                                    <label htmlFor="contained-button-file-image">
                                        <Button disableElevation variant="contained" className=" grey-text" component="span" style={{
                                            marginRight:"10px"
                                        }}>
                                        Pick Banner Image
                                        <IconButton className="white-text" aria-label="upload picture" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                        </Button>
                                    </label>
                                    {  image &&    
                                        <div className=" col s12 grey lighten-2" style={{
                                          borderRadius:"5px"
                                        }}>
                                        <p>{ image.name }</p>
                                        </div>
                                    }
                                    
                                      <Button disabled={loading} type="submit" className="btn-large green" variant="contained" color="secondary">
                                                   
                                          {loading &&
                                              <CircularProgress disableShrink  />
                                          }
                                          {!loading &&
                                              <span>Upload </span>
                                          }
                                      </Button>
                                        
                                </div>
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
