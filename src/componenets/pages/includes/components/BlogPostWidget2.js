import React from 'react'
import { Link} from 'react-router-dom'

export default function BlogPostWidget2(props) {
    const article = props.dets
    const articlePost = article.data()
    const id=article.id
    return (
        <div>
             <div className="col m6 s12">
                <div className="card z-depth-0">
                    <div className="card-image">
                        <img width="384px" height="400  px" src={articlePost.imageUrl} alt="" />
                    </div>
                    <div className=" left transparent">
                        <h5 style={{
                            fontWeight: "bold",
                            fontSize: "24px",
                            lineHeight: "34px", color: "#002044"
                        }}>
                            {articlePost.title}
                        </h5>
                        <p>
                            Seamlessly maximize user friendly communities 
                            whereas customer directed results. Professionally 
                            productize impactful portals 
                            through standardized ROI.<br/>
                            <small>May 30, 2020</small>
                            
                        </p>
                        <Link to={`/blogArticle/${id}`} className=" btn-flat btn-primary btn-oultine transparenet ">
                            See more...
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
