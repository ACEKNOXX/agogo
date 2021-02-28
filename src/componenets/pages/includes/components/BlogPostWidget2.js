import React from 'react'
import { Link} from 'react-router-dom'

export default function BlogPostWidget2(props) {
    const article = props.dets
    const articlePost = article.data()
    const id=article.id
    return (
        <div>
             <div className="col m6 s12">
                {/* <div className="card z-depth-0" style={{
                    border:"2px dashed red"
                }}>
                    <div className="card-image">
                        <img width="384px" height="400  px" src={articlePost.imageUrl} alt="" />
                    </div>
                    <div className="card-content left transparent">
                        <h5 style={{
                            fontWeight: "bold",
                            fontSize: "24px",
                            lineHeight: "34px", color: "#002044"
                        }}>
                            {articlePost.title}
                        </h5>
                        <p>
                            
                            <br />
                            <small>May 30, 2020</small>
                            
                        </p>
                        <Link to={`/blogArticle/${id}`} className=" btn-flat btn-primary btn-oultine transparenet ">
                            See more...
                        </Link>
                    </div>

                </div> */}
                {/*  */}

                <div className="card">
                    <div className="card-image" style={{
                        borderRadius:"10px"
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
                            fontSize: "24px",
                            lineHeight: "34px", color: "#002044"
                        }}>
                            {articlePost.title}
                        </span>
                        
                        {/* <p>{articlePost.bodyText.substring(0, 50)}</p> */}
                    </div>
                </div>

            </div>
        </div>
    )
}
