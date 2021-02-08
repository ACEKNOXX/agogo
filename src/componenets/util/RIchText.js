import React, { useRef,useState,Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

var bodText,articl
var loading=false
export default class RichTextBox extends Component {
    handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
        bodText = content
    }
    handleTitle(e) {
        console.log(e.target.value)
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(bodText)
    
    }
render() {
       
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
            {/* <div className="container"> */}
                <div className="form-section-1">
                    <div className=" col s12" >
                        <label  className="col s12 grey-text">Article author</label>
                        <input onChange={this.handleTitle} className="col s12 mt-50 full-w" id="aritcle-title" placeholder="Article author" type="text" />
                    
                    </div>
                </div>
                <div className="from-section-1">
                    <div className="col s12">
                        
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
                            <Button disabled={loading}  id="submit-btn" type="submit" className="btn-large col s5  btn-flat  ">
                                <span className="white-text">
                                Ok, publish
                                </span>    
                            </Button>
                        </div>
                    </div>

                </div>
                                            
            </form>
        </div>
     );
   }
}
