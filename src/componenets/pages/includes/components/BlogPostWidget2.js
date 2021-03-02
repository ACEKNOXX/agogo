import React from 'react'
import { Link} from 'react-router-dom'

export default function BlogPostWidget2(props) {
    const article = props.dets
    const articlePost = article.data()
    const id=article.id
    return (
        <div>
             <div className="col m6 s12">
                <div className="card" style={{
                    height: "550px"
                
                }}>
                    <div className="card-image" style={{
                        borderRadius: "10px", minHeight: "350px"
                    }}>
                       <img width="384px" height="400px" src={articlePost.imageUrl} alt=""  style={{
                        borderRadius:"10px 10px 0px 0px"
                    }} />
                        
                        
                        <Link to={`/blogArticle/${id}`} className="btn-floating halfway-fab waves-effect waves-light red">
                            <i className="material-icons">insert_comment</i>
                        </Link>
                    </div>
                    <div className="card-content">
                        <span className="card-title" style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            lineHeight: "34px", color: "#002044"
                        }}>
                            {articlePost.title.substring(0, 50)} ...
                        </span>
                        
                        {/* <p>{articlePost.bodyText.substring(0, 50)}</p> */}
                    </div>
                </div>

            </div>
        </div>
    )
}
