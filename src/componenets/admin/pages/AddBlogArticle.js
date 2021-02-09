import React, { useRef, useState } from 'react';
import Sidebar from './../includes/Sidebar'
import Header from './../includes/Header' 
import Footer from './../includes/Footer'
import TopHeader from './../includes/TopHeader'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
// import CourseTableRow from './../includes/widget/CourseTableRow'
import { Link, useHistory } from 'react-router-dom'
import RichTextBox from './../../util/RIchText'
import { Editor } from '@tinymce/tinymce-react';
import './../css/style.css'
import './../css/style2.css'

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


export default function AddBlogArticle() {
    const classes = useStyles();
    const articleTitle = useRef(null)
    const articleAuthor = useRef(null)
    const [articleBannerImage, setArticleBannerImage] = useState(null)
    const [loading,setLoading] = useState(null)

    const handleChange = () => {
        
    }
    const handleSubmit = (e) => {
        e.prevenetDefault()
        console.log("bode thomas")
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
                                <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col s12  page-header-title">
                                        <span id="page-header-title">
                                            Add Article
                                        </span>
                                    </div>
                                    
                                </div>
                                <div className="row">
                                    <div className="col s12 m2"></div>
                                    <div className="col s12  m8">

                                        <div className="container">

                                            {/* <div className="form-section-1">
                                                <div className=" col s12" >
                                                    <label  className="col s12 grey-text">Article author</label>
                                                    <input className="col s12 mt-50 full-w"  placeholder="Article author" type="text" />
                                                
                                                </div>
                                            </div>
                                            <div className="form-section-1">
                                                <div className=" col s12" >
                                                    <label  className="col s12 grey-text">Article Title</label>
                                                    <input className="col s12 mt-50 full-w"  placeholder="Article title" type="text" />
                                                
                                                </div>
                                            </div>
                                            <div className="form-section-1">
                                                <div className=" col s12" >
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
                                            </div> */}

                                            
                                            <div className="from-section-1">
                                                <div className="col s12">
                                                    <RichTextBox />
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                        
                                        
                                    </div>
                                    <div className="col s12 m2"></div>
                                </div>
                                </form>
                                {/* <!-- main body --> */}
                            
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />

        </div>
    )
}
