import React from 'react'
import { Link} from 'react-router-dom'
import Subscribe from './Subscribe'


export default function Footer() {
    return (
    <footer>
        <div className="footer  bg-primary" >
            <div className="container row">
                <div className="col mt-50  s12  m3 hide-on-med-and-down">
                <img className="mt-50" src="assets/logos/logo white version.svg" alt="" />
                </div>
                <div className="col s12 mt-50 show-on-medium-and-down hide-on-med-and-up">
                    <h6 className="white-text" style={{ fontSize: "22px" }}> Subscribe to mailing list </h6>
                    <Subscribe />    
                
                
                </div>
                
                <div className="col mt-50  s12  m6">
                    <div className="col s12 m4">
                        <h6 className="white-text" style={{fontSize:"25px"}}> <b>Quick links</b>  </h6>
                        <div className="mt-25 footer-nav">
                            <Link to="/" className="white-text"><h6>Home</h6> </Link>
                            <Link to="/explore" className="white-text"><h6>Explore</h6> </Link>
                            <Link to="/" className="white-text"><h6>Community</h6> </Link>
                            <Link to="" className="white-text"><h6>About Us</h6> </Link>
                        </div>
                    </div>
                
                    <div className="col s12 m4">
                        <h6 className="white-text" style={{fontSize:"25px"}}> 
                            <b>Company</b>    
                        </h6>
                        <div className="mt-25 footer-nav">
                            <Link to="/" className="white-text"><h6>Help & support</h6> </Link>
                            <Link to="/" className="white-text"><h6>Terms of use</h6> </Link>
                            <Link to="/" className="white-text"><h6>Contact Us</h6> </Link>
                            <Link to="/" className="white-text"><h6>Privacy</h6> </Link>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <h6 className="white-text" style={{fontSize:"25px"}}> <b>Courses</b>  </h6>
                        <div className="mt-25 footer-nav">
                            <Link to="/" className="white-text"><h6>Public finance</h6> </Link>
                            <Link to="/" className="white-text"><h6>Business finance</h6> </Link>
                        
                        </div>
                    </div>
                </div>
                <div className="col m3  s12 mt-50 hide-on-med-and-down">
                    <h6 className="white-text" > Subscribe to mailing list </h6>
                    <Subscribe />
                    
                </div>
                <div className="col s12  m3 show-on-medium-and-down hide-on-med-and-up">
                    <img className="mt-25" src={"assets/logos/logo white version.svg"} alt="" />
                    <div className="col  s12"></div>
                </div>

            </div>
            
        </div>
            
        <div className="footer-copyright z-depth-1">
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 white-text">
                        <small>
                            <p>&#169; 2020 Aurora.All rights reserved   </p>
                        </small>
                    </div>
                    <div className="col s12 m6">
                        <div className="row">
                            <div className="col s8"></div>
                            <div className="col s1 ">
                                <Link to="/" className="grey-text text-lighten-4 mlr-2 right">
                                    <img src="assets/Aurora_images/svg/instagram.svg" alt="" />
                                </Link>
                            </div>
                            <div className="col s1">
                                <Link to="/" className="grey-text text-lighten-4 mlr-2 right">
                                    <img src="assets/Aurora_images/svg/facebook.svg" alt="" />
                                </Link>
                            </div>
                            <div className="col s1">
                                <Link to="/" className="grey-text text-lighten-4 mlr-2 right">
                                    <img src="assets/Aurora_images/svg/twitter.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                    
                        
                    </div>
                </div>
            
            </div>
        </div>
    
    </footer>
    )
}
