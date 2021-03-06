import React, { useRef, useState } from 'react';
import {Link,useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import { firestore } from './../../../../firebase'

export default function ContactBody() {
    const emailRef = useRef(null);
    const fullnameRef = useRef(null);
    const msgRef = useRef(null);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    const handleSubmit =async(e) => {
        e.preventDefault();
        try {
            setError('')
            setLoading(true)
            const dataToPush = {
                "fullname": fullnameRef.current.value,
                "email": emailRef.current.value,
                "msg":msgRef.current.value
            }
            // await firestore.collection("contact_feedback")doc().set(dataToPush)

        } catch (e) {
            console.log(e)
            let errMsg = e.message;
            setError(errMsg)
        }
        setLoading(false)
    
    }
    
    return (
        <div>
            <section>
                <div className="row contact-body" style={{
                    paddingTop:"0px !important"
                }}>
                    <div className="full-w" style={{
                        // border:"2px dashed red"
                    }}>
                        <div className="row">
                            <div className="col s12 m6">
                                <div className="container ">
                                    <div className="alittle-text mt-50 " >

                                        <div className="alittle-text-header  col s12 pb-25 left section-heading" >
                                            <h4 className="primary-color">A little about Aurora</h4>
                                            
                                        </div>

                                        <div className="col s12">
                                            <p className=" alittle-text grey-text">
                                                The whole idea of Aurora Financial Literacy with KWO is to share with people how you can grow investments, savings or other source of income . Financial literacy is about unlearning our old habits and learning new ones...
                                            </p><br/>
                                            <Link to="/" className="green-text">
                                                Read more
                                            </Link>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col s12 m6 " style={{padding:"0px !important"}}>
                                <img src="./../../../../assets/Aurora_images/3.jpg" 
                                    className="responsive-img full-w materialboxed 
                                hide-on-med-and-down" width="100%" style={{
                                        marginTop: "-30px",
                                        marginRight:"-100px",
                                        height: "35     0px !important"
                                    }} alt="" />
                            </div>
                        </div>
                        <img src="./../../../../assets/Aurora_images/3.jpg" 
                                className="responsive-img full-w materialboxed show-on-med-and-down hide-on-med-and-up" width="100%"   alt="" />
                    </div>

                    <div className="container row">
                        <div className="col s12 m2"></div>
                    </div>
                    {/* <div className="row">
                        <div className="col s12 m3 l3"></div>
                        <div className="col s12 m6 l6 body ">
                            <form onSubmit={handleSubmit}>
                            <h3 className="section_body_title"> Submit a request</h3>
                            <div className="form-section-1 mt-25 row">
                                <div className=" col s12" style={{paddingTop:"0px !important"}}>
                                    <label className="col s12 grey-text">Full name</label>
                                    <input ref={fullnameRef} className="col s12 mt-50 full-w" placeholder="Full name"
                                        type="text" style={{
                                            fontSize: "15px !important",
                                            border: "1px solid grey",
                                            padding: " 2px 0px 8px 5px",
                                            borderRadius:"5px"
                                        }}
                                        required/>
                                </div>
                            </div>
                            <div className="form-section-1 mt-25 row">
                                <div className=" col s12" style={{paddingTop:"0px !important"}}>
                                    <label htmlFor="email" className="col s12 grey-text">Email Address</label>
                                    <input ref={emailRef} className="col s12 mt-50 full-w" id="email"
                                        placeholder="Email Address" type="text"
                                        style={{
                                            fontSize:"15px !important", 
                                            border: "1px solid grey",
                                            padding: "2px 0px 8px 5px",
                                            borderRadius:"5px"
                                        }}
                                        required/>
                                
                                </div>
                            </div>
                            <div className="form-section-1 mt-25 row">
                                <div className=" col s12" style={{paddingTop:"0px !important"}}>
                                    <label htmlFor="msg" className="col s12 grey-text">Your message</label>
                                    <textarea ref={msgRef} id="msg"
                                    className="col s12 materialize-textarea"
                                        style={{
                                            fontSize: "15px !important",
                                            border: "1px solid grey",
                                            padding: "2px 8px",
                                            borderRadius:"5px",
                                            height:"200px !important",
                                        }} required></textarea>
                                        
                                </div>
                            </div>
                            <div className="row">
                                <button disabled={loading} type="button" className="col s5 btn-large btn-flat btn-large-primary white-text green">
                                       
                                    {loading &&
                                        <CircularProgress disableShrink  />
                                    }
                                    {!loading &&
                                        <b> Send request</b>
                                    }
                                </button>
                            </div>
                            </form>
                        </div>
                        <div className="col s12 m3 l3"></div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}
