import React, { useRef,useState,Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';
import { storage,firestore } from './../../firebase'
import { CircularProgress } from '@material-ui/core';


var bodText,title,image,author
var loading = false
// const [image, setImage] = useState(null)



export default class RichTextBox extends Component {
    useStyles = ()=>{
        return makeStyles((theme) => ({
        root: {
            '& > *': {
            margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
        }))
    }
    handleAuthor = (e) => {
        author=e.target.value
    }
    handleEditorChange = (content, editor) => {
        // console.log('Content was updated:', content);
        bodText = content
    }
     handleChange (e)  {
        if (e.target.files[0]) {
            console.log(e.target.files[0].name)
            console.log(e.target.files)
            // setMediapath(e.target.files[0].name)
            image = e.target.files[0]
        }
    }
    handleTitle(e) {
        // console.log(e.target.value)
        title=e.target.value
    }
    handleSubmit =async(e)=>{
        e.preventDefault();
        loading=true
        console.log(title, author, bodText)
        console.log(image.name)
        // console.log()
        try {
            const upload = await storage.ref(`BlogArtcleBanner/${image.name}`).put(image)
            storage.ref(`BlogArtcleBanner/${image.name}`).getDownloadURL()
            .then( async (url) => {
                // `url` is the download URL for 'images/stars.jpg'

                console.log("url", url)
                var dataToPush = {
                    "imageUrl": url,
                    "title": title,
                    "author": author,
                    "bodyText":bodText,
                    "status":true
                }
                console.log(dataToPush)
                await firestore.collection('blogArticle').doc().set(dataToPush)

            })
            .catch((error) => {
                // Handle any errors
            })
        } catch (e) {
            
        }
        loading=false 
    }
    
    
render() {
    
    const classes =  this.useStyles();
    
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
            {/* <div className="container"> */}
                <div className="form-section-1">
                    <div className=" col s12" >
                        <label  className="col s12 grey-text">Article author</label>
                        <input onChange={this.handleAuthor}  className="col s12 mt-50 full-w" id="aritcle-title"
                            placeholder="Article author" type="text" required/>
                    
                    </div>
                </div>
                <div className="form-section-1">
                    <div className=" col s12" >
                        <label  className="col s12 grey-text">Article Title</label>
                        <input onChange={this.handleTitle} className="col s12 mt-50 full-w"  placeholder="Article title" type="text" required/>
                    
                    </div>
                </div>  
                <div className="form-section-1">
                    <div className=" col s12" >
                        <input
                            accept="image/*"
                            // className={classes.input}
                            hidden
                            id="contained-button-file-image"
                            type="file"
                            // ref={imageRef}
                            style={{border:"none !important"}}
                            onChange={this.handleChange}
                            required
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
            {/* </div> */}
            <Editor
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar:'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help'
                }}
                onEditorChange={this.handleEditorChange}
                />
                <div className=" row">
                    <div className="form-section-1 container col s12">
                        <div className="col s12 p-2">
                            <Button disabled={loading} onClick={this.handleSubmit}  id="submit-btn" className="btn-large col s5  btn-flat  ">
                                {loading && 
                                    <CircularProgress />
                                }
                                {!loading &&
                                    <span className="white-text">
                                    Ok, publish
                                    </span>  
                                }
                                  
                            </Button>
                        </div>
                    </div>

                </div>
                                            
            </form>
        </div>
     );
   }
}
