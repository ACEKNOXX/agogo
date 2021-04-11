import React from 'react'
import { Link} from 'react-router-dom'

export default function LittleAbout() {
    return (
        <div>
            <div className="about  full-w" >
                <div className="row show-on-large hide-on-med-only hide-on-small-only">
                    <div className="col s12 m6 ">
                        <img src="assets/Aurora_images/About us page image 2-min.png" 
                        className="responsive-img full-w materialboxed " style={{margin:"0px 0px -20px -12px"}}  width="100%"    alt="" />
                    </div>
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
                   
                </div>
                <div className="row">
                    <div className="col s12  show-on-small show-on-medium hide-on-large-only">
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
                </div>
               
                <img src="assets/Aurora_images/About us page image 2-min.png" 
                        className="responsive-img full-w materialboxed show-on-small show-on-medium hide-on-med-only hide-on-large-only" width="100%"   alt="" />
            </div>
        </div>
    )
}
