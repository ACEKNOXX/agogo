import React from 'react'
import { Link} from 'react-router-dom'

export default function TopHeader() {
    return (
        <div>
            <div className="row z-depth-2 hide-on-med-and-down">
    <div className="col s8">
        <div className="nav-wrapper">
            <form>
            <div className="input-field">
                <input id="search" type="search" placeholder="search" required />
                <label className="label-icon" htmlFor="search">
                    <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
            </div>
            </form>
        </div>
    </div>
  
    <div className="col s4 right top-navi-icons" >
    
        <Link className="dropdown-trigger btn transparent btn-flat right red"  to='#'  data-target='dropdown1' 
        data-beloworigin="true" style={{width:"500px",paddingTop:"50px !important"}}>
           <img className="right" src="../assets/Aurora_icons/notification icon.svg" style={{marginTop:"20px"}} alt="" />
        </Link>

        <ul id='dropdown1' className='dropdown-content' >
            <li><Link to="/" style={{width:"100% !important"}}>New Update</Link></li>
            <li><Link to="/">two</Link></li>
            <li className="divider" ></li>
            <li><Link to="/">three</Link></li>
            <li><Link to="/"><i className="material-icons">view_module</i>four</Link></li>
            <li><Link to="/"><i className="material-icons">cloud</i>five</Link></li>
        </ul>



        <div className="center" id="navi-icons">
            <Link className='dropdown-trigger btn transparent btn-flat' to='#' 
            data-target='user-profile-btn' >
                <img src="../assets/Aurora_icons/my account icon.svg" alt="" />
            </Link>
            <ul id='user-profile-btn' className='dropdown-content'>
                <li><Link to="myAccount.php">Profile</Link></li>
                <li className="divider" ></li>
                
                <li><Link to="#logout" className="modal-trigger" >Sign out</Link></li>
            </ul>
        </div>

        
    </div>
</div>
        </div>
    )
}
