import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';
import { storage, firestore } from './../../../firebase'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';



const useStyles = makeStyles((theme) => ({
root: {
'& > *': {
    margin: theme.spacing(1),
},
},
input: {
display: 'none',
},
formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
},
selectEmpty: {
    marginTop: theme.spacing(2),
},
}));

export default function AddCourse(props) {
    const history = useHistory()
    const courserPryDetails=props.courseDetails
    
    // console.log("desc", courserPryDetails)
    var courseTitle;
    var courseDesc;
    if (props.courseDetails==null) {
        console.log("omom we  get null data")
    } else {
        courseTitle = courserPryDetails.title
        courseDesc = courserPryDetails.desc
    }
    const courseCategoryrRef = useRef(null)
    const courseDurationRef = useRef(null)
    const courseShortDescriptionRef = useRef(null)
    const courseTutorRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [courseBannerImage, setCourseBannerImage] = useState(null)

    //handleChange section starts here
    const handleChange = (e) => {
        console.log("hereu there");
        if (e.target.files[0]) {
            console.log(e.target.files[0].name)
            console.log(e.target.files)
            // setMediapath(e.target.files[0].name)
            setCourseBannerImage(e.target.files[0])
        }
    }
    // handleChange ends here
    // handleSubmit starts here
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        setError("")
        // console.log(courseCategoryrRef.current.value)
        try {
            await storage.ref(`CourseBanner/${courseBannerImage.name}`).put(courseBannerImage)
            storage.ref(`CourseBanner/${courseBannerImage.name}`).getDownloadURL()
            .then(async (url) => {
                // `url` is the download URL for 'images/stars.jpg'
                console.log("url", url)
                console.log("gre")
                

                const dataToPush = {
                    "courseBannerImageUrl": url,
                    "courseTitle": courseTitle,
                    "courseDescription": courseDesc,
                    "courseDuration": courseDurationRef.current.value,
                    "courseCategory": courseCategoryrRef.current.value,
                    "courseShortDescription": courseShortDescriptionRef.current.value,
                    "courseTutor": courseTutorRef.current.value
                };
                console.log(dataToPush)

                await firestore.collection('courses').doc().set(dataToPush)
                //  history.push('/admincourseUpload')
            })
            .catch((error) => {
                // Handle any errors
                // setError(error)
                console.log(error)
            })
            // alert("xk")
            
            
        } catch (error) {
            // console.log(err)
            setError(error)
        }
        setLoading(false)
    }
    // handelSubmit sectionends here

    // js mataerial ui components
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = (e) => {
        setOpen(false);
    }

  return (
    <div>
        <Button variant="outlined" className="col s12 btn-large btn-flat btn-primary green-text"
              onClick={handleClickOpen}>
            Add Course
        </Button>
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            scroll={"body"}
            aria-labelledby="responsive-dialog-title"
          >
        <form onSubmit={handleSubmit}>
                  
        <DialogTitle id="responsive-dialog-title">
                      {"Add Course"}
            <div className="row">
                <div className="col s12">
                    {error &&
                        <div className="row alert-err" style={{ padding: "8px 8px" }} >
                            <span className="white-text  mt-25" >
                                {error}
                            </span>
                        </div>
                    }
                </div>
            </div>
        </DialogTitle>
        <DialogContent>
            <div className="row">
                <div className="col s12 m6">
                    <div className="form-section-1 row">
                        <div className=" col s12" >
                            <label  className="col s12 grey-text">Course Category</label>
                            <input className="col s12 mt-50 full-w" ref={courseCategoryrRef}  placeholder="File name" type="text" required/>

                        </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="form-section-1 row">
                        <div className=" col s12" >
                            <label  className="col s12 grey-text">Tutor name</label>
                            <input className="col s12 mt-50 full-w" ref={courseTutorRef} placeholder="Tutor name" type="text" required/>
                        
                        </div>
                    </div>
                </div>
            </div>

                  {/* row */}
            <div className="row">
                <div className="col s12 m3">
                    <div className="form-section-1 row">
                        <div className="col s12">
                            <div className="form-section-1 row">
                                <div className=" col s12" >
                                    <label htmlFor="email" className="col s12 grey-text">Duration</label>
                                              <input className="col s12 mt-50 full-w" ref={courseDurationRef} placeholder=""
                                                  type="text" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m9">
                    <div className="form-section-1 row">
                        <div className=" col s12" >
                            <label htmlFor="email" className="col s12 grey-text">Short Description</label>
                            <input className="col s12 mt-50 full-w" ref={courseShortDescriptionRef}   placeholder="short description" type="text" required/>
                        
                        </div>
                    </div>
                </div>
                          
            </div>      
                  {/* row */}
            <div className="row">
                <div className="col s12 m2"></div>
                      <div className="col s12 m8 center" style={{ border:"3px dashed #eee",borderRadius:"5px"}}>
                    <div className="file-field center input-field">
                        <div className="btn-flat  col s12">
                            <span>
                                <img src="../assets/svg/dot.svg" alt="" />
                            </span>
                            <input type="file" />
                        </div>
                        <div className="file-path-wrapper ">
                                      {courseBannerImage &&
                                        <p className="center">
                                              {courseBannerImage.name}
                                        </p>
                                      }
                                      
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file-image"
                                type="file"
                                // ref={imageRef}
                                onChange={handleChange}
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
                        </div>
                    </div>
                    <p>
                    
                    </p>
                </div>
                <div className="col s12 m2"></div>
            </div>
                  {/* row */}
            <div className=" container row mb-50">
                <div className="col s12 m4"></div>
                <div className="col s12 m4 center">
                    <Button type="submit" disabled={loading} 
                        id="submit-btn" className="mt-25 btn-large  col s12  btn-flat  ">
                        {loading &&
                            <CircularProgress className="white-text" disableShrink  />
                        }
                        {!loading &&
                            <span className="white-text">
                                Ok, done
                            </span>
                        }          
                    </Button>
                </div>
                <div className="col s12 m4"></div>

            </div>
        </DialogContent>
         </form>
        </Dialog>
              
    </div>
  );
}





