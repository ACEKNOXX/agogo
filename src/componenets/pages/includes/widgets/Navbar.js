import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from './../../../../context/AuthContext'
import Dialog from '@material-ui/core/Dialog';
import Login from "./../../../auth/Login";
import Signup from "./../../../auth/Signup";
import Sidebar from './Sidebar'
import PriceCalculator from '../../../modals/PriceCalculator'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 4,
    color: '#fff',
  },
}));


const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const { currentUser, logout, refresh } = useAuth();
    // var str = currentUser!=null ? currentUser.displayName:"Ace";
    // var s= str.split("")
    // var initials = s[0].toUpperCase()
    // const history = useHistory()
    
    

    const handleLogout = async (e) => {
        e.preventDefault()
        setOpen(true)
        
        
        await logout()
        
        setTimeout(async () => {
            // await refresh()
            window.location.reload()
        }, 5000);
        
    }
    return (
        
        <div>
        <Backdrop className={classes.backdrop} open={open} >
                <CircularProgress color="inherit" /><br/>
                {/* <div className="center">
                    <p>Logging out user</p>
                </div> */}
        </Backdrop>
         <nav className="white">
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo">
                    <img src='./../../assets/logos/1.svg' alt="" />
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
                        <Link to="/eventGallery"  className="grey-text text-darken-3">Event Gallery</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="grey-text text-darken-3">Blog</Link>
                    </li>
                    <li>
                        <Link to="/" className="grey-text text-darken-3">Community</Link>
                    </li>
                    <li>
                        <Link to="/about" className="grey-text text-darken-3">About Us</Link>
                    </li>
                    <li>
                        <PriceCalculator />
                    </li>
                    
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
                        
                    
                    { currentUser && 
                        
                        <li className="right">
                            <Link to="/admin" className="btn-floating btn-flat green center white-text " >
                                <i className="material-icons">account_circle</i>
                            </Link>
                        </li> 
                        
                    }
                    {currentUser && 
                        <li className="right">
                            <button type="button" onClick={handleLogout}  className="btn-flat btn-primary btn-oultine  transparent  modal-trigger">
                                    Logout
                                </button>
                        </li>
                    }
                    
                </ul>
            </div>
            </nav>
            
            
        </div>
    )
}
            

export default Navbar;