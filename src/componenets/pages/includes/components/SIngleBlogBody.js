import React,{useEffect} from 'react'

export default function SIngleBlogBody(props) {
    const article = props.article
    const postdata = article.data()
    var postDa= postdata.bodyText
    var bodyText = postDa.replace('<p>', '')
    bodyText = bodyText.replace('</p>','<br/>')
    
    
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m3"></div>
                <div className="col s12 m6">
                    <br />
                    <img src={postdata.imageUrl} width="100%" style={{
                        minHeight:"400px"
                    }} alt="" />
                    <h4 className="primary-color " >
                        <b>
                            {`${ postdata.title }`}
                        </b>
                        
                    </h4>
                    <br />
                    {/* <article> */}
                    {/* {postdata.bodyText) */}
                    {bodyText }
                    {/* </article> */}
                    
                </div>
                <div className="col s12 m3"></div>
            </div>
        </div>
    )
}
