import React,{useState,useEffect} from 'react'
import Sidebar from './../includes/Sidebar'
import Header from './../includes/Header' 
import Footer from './../includes/Footer'
import TopHeader from './../includes/TopHeader'
import BlogTableRow from './../includes/widget/BlogTableRow'
import { firestore } from './../../../firebase'
import { Link} from 'react-router-dom'
import './../css/style.css'
import './../css/style2.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import UploadImageToGallery from './../modals/UploadImageToGallery'


export default function AddToGallery() {
    const [loading, setLoading] = useState(false)
    const [courses,setCourses] = useState([])
    
    
    useEffect(() => {
        firestore.collection("blogArticle").get().then((item) => {
            setLoading(true)
            const items = item.docs.map((doc) => doc)
            setCourses(items)
            console.log(items)
            // setCourses(itms)
            setTimeout( ()=>{ }, 5000)
            setLoading(false)
        }).catch((e) => {
            console.log("error from snapshot",e)
        })
    },[])
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
                              <div className="row">
                                    <div className="col s12 m9 page-header-title">
                                        <span id="page-header-title">
                                         Gallery Section
                                        </span>
                                    </div>
                                    <div className="col s12 m3 right">
                                        {/* <Link to="/adminAddBlogArticle" id="submit-btn" className="mt-25 btn-large  col s12  btn-flat  ">
                                            <span className="white-text">
                                                Upload new article
                                            </span>    
                                        </Link> */}
                                        <UploadImageToGallery />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />

        </div>
    )
}
