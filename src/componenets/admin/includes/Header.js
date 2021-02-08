import React from 'react'
import { Link} from 'react-router-dom'
export default function Header() {
    return (

    <div>
    <nav className="hide-on-med-and-up " style={{
        background:"#002044"
    }}>
    <div className=" hide-on-med-and-up pb-25  nav-wrapper">
        <Link to="/" className="brand-logo black-text ">
            <img src="../assets/logos/logo white version.svg" style={{
                marginTop: "10px",
                height: "60px"
            }} alt="" />
        </Link>
        <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons white-text">menu</i>
        </Link>
        <ul className="right " style={{height:"53px"}}>
            <li className="">
                
                <Link to="notifications.php" className="black-text" >
                    <i className="material-icons white-text">notifications_none</i>
                </Link>
                    
            </li>
            
        </ul>
    </div>
    </nav>
    
    <ul className="sidenav" id="mobile-demo">
        <li className="grey lighten-2 ">
                <div className="row pt-25 pb-50">
                    <Link to="myAccount.php">
                        <img src="assets/images/avatar.png" alt="" className=" col s3 circle" />
                    </Link>
                    <span className="title col s9">
                        <Link to="myAccount.php" className="black-text">
                            Emeka Doe
                        </Link>
                    </span>
                </div>

        </li> 
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/">My Courses</Link></li>
        <li><Link to="/">Community</Link></li>
        <li><Link to="/">Logout</Link></li>

    </ul>
                
</div>

               
                    
    )
}
