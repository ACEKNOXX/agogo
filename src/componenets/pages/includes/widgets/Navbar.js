import React from 'react'
import { Link,useHistory } from 'react-router-dom'
// import SignedIn from './SignedInLinks'
// import SignedOut from './SignedOutLinks'
import { useAuth } from './../../../../context/AuthContext'
import Dialog from '@material-ui/core/Dialog';
import Login from "./../../../auth/Login";
import Signup from "./../../../auth/Signup";
import Sidebar from './Sidebar'


const Navbar = () => {
    const { currentUser, logout,refresh } = useAuth();
    const history = useHistory()
    
    

    const handleLogout = async() => {
        await logout()
        await refresh()
    }
    return (
       
        <div>
         <nav className="white">
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo">
                    <img src={'./assets/logos/1.svg'} alt="" />
                </Link>
                <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
                    {/* <i className="material-icons black-text">menu</i> */}
                    <Sidebar />
                </Link>
                
                <ul className="right  hide-on-med-and-down destop-nav">
                    <li className="">
                        <div className="">
                            <Link to="/" className="black-text" >
                                <b>Home</b>
                            </Link>
                                <hr className="green" style={{
                                    marginTop:"-20px",
                                    width: "25px",
                                    border: "10px",
                                    borderRadius:"3px",
                                    height:"5px",
                                    marginLeft:"15px"
                                    }}
                                 />
                        </div>
                    </li>
                    <li>
                        <Link to="/explore"  className="grey-text text-darken-3">Explore</Link>
                    </li>
                    <li>
                        <Link to="/" className="grey-text text-darken-3">Blog</Link>
                    </li>
                    <li>
                        <Link to="/" className="grey-text text-darken-3">Community</Link>
                    </li>
                    <li>
                        <Link to="/about" className="grey-text text-darken-3">About Us</Link>
                    </li>
                    <li>
                        <Link to="#modal-pricing"  className="grey-text text-darken-3  modal-trigger">Pricing calculator</Link>
                    </li>
                    {/* <li>
                        {!currentUser && 
                             <Login />

                        }
                    </li> */}
                    {!currentUser && 
                    <li className="right" style={{
                            marginTop:"12px"
                            }}>
                        <Login />
                    </li>
                    }
                    
                    
                    {!currentUser &&
                        <li className="right" style={{
                            marginTop:"12px"
                            }}>
                            <Signup />
                        </li>
                    }
                        
                    {currentUser && 
                        <li className="right">
                            <button type="button" onClick={handleLogout}  className="btn-flat btn-primary btn-oultine  transparent  modal-trigger">
                                    Logout
                                </button>
                        </li>
                    }
                    { currentUser && 
                        <li className="right">
                            <Link to="/user" className="btn-floating green center with-text text-darken-3">TM</Link>
                        </li> 
                        
                    }

                    
                </ul>
            </div>
            </nav>
            
            {/* <ul className="sidenav" id="mobile-demo">
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="">Explore</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/">Community</Link></li>
                <li>
                    <Link to="#modal-pricing"  className="grey-text text-darken-3  modal-trigger">Pricing calculator</Link>
                </li>
                <li className="">
                    <Link to="#modal1"   className=" btn-flat btn-primary btn-oultine btn-large  transparent modal-trigger">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/"  type="button" data-target="modal-pricing-plan" className="btn-oultine modal-trigger btn-large btn-flat btn-large-primary white-text green">
                        Join aurora 
                    </Link>
                </li>
                
            </ul> */}
        </div>
    )
}
            

export default Navbar;