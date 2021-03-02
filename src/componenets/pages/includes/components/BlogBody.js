import React, { useEffect, useState } from 'react'
import BlogPostWidget2 from './BlogPostWidget2'
import BlogPostShimmer2 from './BlogPostShimmer2'
import {firestore} from './../../../../firebase'


export default function BlogBody() {
    const [loading, setLoading] = useState(false)
    const [aritcle,setAritcle] = useState([])
    const [isEmpti,setIsEmpti] = useState(false)
    useEffect(() => {
        setLoading(true)

        firestore.collection("blogArticle").get().then((item) => {
            const items = item.docs.map((doc) => doc)
            console.log(items)
            setAritcle(items)
            // setAritcle(itms)
           if (items.length == 0) {
                setIsEmpti(true)
            }
            setTimeout( ()=>{ }, 5000)
            setLoading(false)
        }).catch((e) => {
            
            console.log("error from snapshot",e)
        })
    },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m3 pt-50">
                    <h4 style={{fontSize: "34px",color:"#002044"}}>
                        Related articles
                    </h4>
                    <div className="col s12">
                        <div className="card z-depth-0">
                            <div className="card-image">
                              <img width="280px" height="127px" src="./../../../../assets/Aurora_images/Blog page image 1-min.png" alt="" />
                            </div>
                            <div className=" left transparent">
                                <p>
                                    What you don’t know about busines success. <br/>
                                    <small>Jun 21, 2020</small>
                                    
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* <div className="col s12 m1"></div> */}
                <div className="col s12 m8 pt-50">
                    <div className="row">
                        {loading && 
                            <div>
                            <BlogPostShimmer2 />
                            <BlogPostShimmer2 />
                            <BlogPostShimmer2 />
                            <BlogPostShimmer2 />

                            </div>
                        }
                        {aritcle &&
                            <div>
                                
                                {
                                    aritcle.map((post) => <BlogPostWidget2 dets={post} />)
                                }
                            </div>
                            
                        }
                        {isEmpti &&
                            <div className="row">
                                <div className="col s12 m4"></div>
                                <div className="col s12 m4">
                                    <h2>No Blog Content</h2>
                                </div>
                                <div className="col s12 m4"></div>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
