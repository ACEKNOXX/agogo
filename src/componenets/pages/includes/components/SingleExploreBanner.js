import React,{useEffect,useState} from 'react'
import { firestore } from './../../../../firebase'
import ShimmerSingleExploreWidget from './../widgets/ShimmerSingleExploreWidget'

export default function SingleExploreBanner(props) {
    const id = props.id
    const [details,setDetails] = useState([])
    const [loading, setLoading] = useState(false)
    const [course,setCourse] = useState(null)
    const [isEmpti,setIsEmpti] = useState(false)    
    
    useEffect(() => {
         setLoading(true)

        firestore.collection("courses").doc(id).get().then((item) => {
        
            setLoading(true)
            if (item.exists) {
                var r= item.data()
                // setCourse(r)
                // console.log("Document data:", item.data());
            } else {
                setLoading(false)
                setIsEmpti(true)
                // console.log("No such document!");
            }
            // console.log(item.id)
           
            setTimeout( ()=>{ }, 5000)
            setLoading(false)
        }).catch((e) => {
            // console.log("error from snapshot",e)
        })
    },[])
    return (
        
        <section>
            {loading && 
                <ShimmerSingleExploreWidget />
            }
            {isEmpti &&
                <div className="banner banner-single-course">
                    <div className="row">
                        <div className="col s12 m4"></div>
                        <div className="col s12 m4 white center z-depth-1" style={{borderRadius:"20px"}}>
                            <p><i className="material-icons center medium">error_outline</i></p>    
                            <h2>Content Not Found !</h2>
                        </div>
                        <div className="col s12 m4"></div>
                    
                    </div>
                </div>
            }
            {!loading &&

                <div className="banner banner-single-course">
                    <div className="banner-single-course ">
                    <div className="container white  row z-depth-2" style={{ borderRadius: "20px" }}>
                        <div className="col  s12 m6 l6 mt-50 mb-50">
                            <div className="container ">
                                <h6 style={{fontWeight: "bold",
                                fontSize: "45px",
                                lineHeight: "71px",
                                color: "#002044"}}>
                                   {course}
                                </h6>
                                <p style={{fontWeight: "normal",
                                    fontSize: "16px",
                                    lineHeight:"23px",
                                    color: "#002044"}}>
                                    by
                                    {/* {course.courseAuthor && course.courseAuthor} */}
                                </p>
                                <article style={{
                                    fontWeight: "normal",
                                    fontSize: "13px",
                                    lineHeight: "26px",
                                    color: "rgba(53, 53, 53, 0.9)"
                                }}>
                                   {/* {course.courseShortDescription && course.courseShortDescription} */}
                                </article>
                                <div className="" style={{
                                    width: "210px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "10px 0px", marginLeft: "-13px !important"
                                }}>
                                    <div className="col s4">
                                        <img src="assets/Aurora_icons/my account icon.svg" height="12px" alt="" />
                                        <small>
                                            <b> 
                                                2.5k
                                            </b>
                                        </small>
                                    </div>
                                    <div className="col s4">
                                        <small>
                                            <b> 
                                                4.5
                                            </b>
                                        </small>
                                        
                                        <i className="material-icons yellow-text icons-small">star</i>
                                    </div>
                                    <div className="col s4">
                                        <small>
                                            <b> 01h 25m </b>
                                        </small>
                                    </div>
                                </div>
                                <div className="" style={{
                                    width: "210px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginLeft: "-13px !important"
                                }}>
                                    <div className="col s4 left">
                                        <img src="assets/Aurora_icons/Saved courses icon.svg" height="12px" alt=""/>
                                        <small>
                                            <b> 
                                                4.5k
                                            </b>
                                        </small>
                                    </div>
                                    <div className="col s4 left" >
                                        <i className="material-icons  icons-small">share</i>
                                        <small>
                                            <b> 
                                                2.5k
                                            </b>
                                        </small>
                                    </div>
                                    <div className="col s4"></div>
                                    
                                </div>
                                <div className="mt-25 full-w">
                                    <a href="#modal1" className="btn-flat col s3 center btn-large green lighten-4 waves-effect waves-light btn "
                                        style={{ width: "150px", borderRadius: "8px" }}>
                                        <b className=" green-text text-lighten-1">Enroll now</b>
                                    </a>  
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l6" id="card-info-right"></div>
                    </div>
                </div>
            </div>
            }
            
        </section>
    )
}
