import React,{useEffect} from 'react'
import parse from 'html-react-parser';

export default function SIngleBlogBody(props) {
    const article = props.article
    const postdata = article.data()
    var postDa= postdata.bodyText
    var bodyText = postDa.replace('<p>', '')
    bodyText = bodyText.replace('</p>','<br/>')
    
    
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m8">
                    <br />
                    <h4 className="center primary-color " >
                        <b>
                            {`${ postdata.title }`}
                        </b>
                        
                    </h4>
                    <img src={postdata.imageUrl} width="100%" style={{
                        minHeight:"400px"
                    }} alt="" />
                    
                    <br />
                    <article style={{
                        fontSize:"20px"
                    }}>
                    
                        { parse(bodyText)  }
                    </article>
                    
                </div>
                <div className="col s12 m1"></div>
                <div className="col s12 m3"></div>
            </div>
        </div>
    )
}
