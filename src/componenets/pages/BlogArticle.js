import React, { useEffect, useState } from 'react'
import Navbar from './includes/widgets/Navbar'
import Footer from './includes/widgets/Footer'
import {firestore} from './../../firebase'
import BlogPostShimmer2 from './includes/components/BlogPostShimmer2'
import BlogPostWidget2 from './includes/components/BlogPostWidget2'

export default function BlogArticle(props) {
    const id = props.match.params.id;
    const [loading, setLoading] = useState(false)
    const [aritcle,setAritcle] = useState(null)
    const [isEmpti,setIsEmpti] = useState(false)
    // postArticle=
    useEffect(() => {
        setLoading(true)

        firestore.collection("blogArticle").doc(id).get().then((item) => {
            const items = item.data()
            
            setAritcle(items)
            console.log(items)
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
        <div>
            <Navbar />
                {loading && 
                    <BlogPostShimmer2 />
                }
                {aritcle &&
                    <div>
                    <BlogPostWidget2 dets={aritcle} />
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

                {/* <div className="row">
                    <div className="col s12 m9">
                        
                    </div>
                    <div className="col s12 m3"></div>
                </div> */}
            <Footer />
        </div>
    )
}
