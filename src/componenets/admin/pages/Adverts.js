import React, { useRef, useState } from 'react';
import Sidebar from './../includes/Sidebar'
import Header from './../includes/Header' 
import Footer from './../includes/Footer'
import TopHeader from './../includes/TopHeader'
import './../css/style.css'
import './../css/style2.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import VideocamIcon from '@material-ui/icons/Videocam';
import './../css/style.css'
import './../css/style2.css'
import { storage,firestore } from './../../../firebase'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from './../../../context/AuthContext'


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

export default function Adverts() {
    const classes = useStyles();
    const imageRef = useRef(null);
    const videoRef = useRef(null);
    const titleRef = useRef(null);
    const [image, setImage] = useState(null)
    const [video,setVideo] = useState(null)
    const [loading, setLoading] = useState(false)
    const {currentUser,firebaseC} = useAuth();
    // const [mediapath,setMediapath] = useState(null)
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
            const upload = await storage.ref(`AdvertMedia/${image.name}`).put(image)
            
            storage.ref(`AdvertMedia/${image.name}`).getDownloadURL()
            .then( async (url) => {
                // `url` is the download URL for 'images/stars.jpg'

                console.log("url", url)
                var dataToPush = {
                    "url": url,
                    "title": titleRef.current.value,
                    "status": true,
                    "image": true,
                    "video":false
                }
                console.log(dataToPush)
                await firestore.collection('adverts').doc().set(dataToPush)

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
             <Header />
                <main>
                    <div className="main">
                        <div className="row">
                            <Sidebar />
                            <div className="col m3 s12 "></div>
                            <div className="col m9 s12 white side-side">
                                <TopHeader />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m3"></div>
                            <div className="col s12 m9 main-main">
                                {/* <!-- main body --> */}
                            
                                <div className="row">
                                    <div className="col s12  page-header-title">
                                        <span id="page-header-title">
                                            Adverts
                                        </span>
                                    </div>
                                  
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-section-1 row">
                                                <div className=" col s12" >
                                                    <label htmlFor="email" className="col s12 grey-text">Enter prefered title</label>
                                                    <input className="col s12 mt-50 full-w"  placeholder="title" type="text" ref={titleRef} required/>
                                                </div>
                                               
                                            </div>
                                            <div className="form-section-1 row" style={{
                                                padding: "16px"
                                                }}>
                                                
                                                {  image &&    
                                                    <div className=" col s12 grey lighten-2" style={{
                                                     borderRadius:"5px"
                                                    }}>
                                                    <p>{ image.name }</p>
                                                    </div>
                                                }
                                            </div>
                                            <div style={{
                                                padding:"16px"
                                            }}>
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
                                                    <span style={{
                                                        marginRight:"10px"
                                                    }}></span>
                                                {/* <input
                                                    accept="video/*"
                                                    className={classes.input}
                                                    id="contained-button-file-video"
                                                    type="file"
                                                    // ref={videoRef}
                                                    onChange={handleChange}
                                            
                                                />
                                                <label htmlFor="contained-button-file-video">
                                                    <Button disableElevation variant="contained" className=" grey-text" component="span">
                                                    Pick Banner Video
                                                    <IconButton className="white-text" aria-label="upload picture" component="span">
                                                        <VideocamIcon /> 
                                                    </IconButton>
                                                    </Button>
                                                </label> */}
                                                <p></p>
                                                <Button disabled={loading} type="submit" className="btn-large green" variant="contained" color="secondary">
                                                   
                                                    {loading &&
                                                        <CircularProgress disableShrink  />
                                                    }
                                                    {!loading &&
                                                        <b>Upload Media</b>
                                                    }
                                                </Button>
                                            </div>
                                            
                                        </form>
                                    </div>
                                    
                                </div>
                                
                            
                                {/* <!-- main body --> */}
                            
                            </div>
                        </div>
                    </div>
                </main>
                {/* <Footer /> */}

        </div>
    )
}
