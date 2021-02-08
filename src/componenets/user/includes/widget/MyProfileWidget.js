import React from 'react'
import { useAuth } from './../../../../context/AuthContext'

export default function MyProfileWidget() {
    const { currentUser } = useAuth();

    return (
        <div>
            <div className="row">
                    <div className="col s12">
                        <ul id="profile-account-collection" className="collection grey lighten-2">
                            <li className="collection-item grey lighten-4 avatar" >
                                <img src="../assets/Aurora_images/11.jpeg" 
                                width="100px"  
                                height="100px"  className="circle" />
                                <span className="title">
                                    <h5>{currentUser.displayName}</h5>
                                </span>
                                <p className="grey-text">Description:
                                    <br/>
                                    <span className="black-text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi aut labore eveniet nesciunt optio nihil et in error quaerat veniam omnis, suscipit doloremque doloribus totam, unde quam placeat, incidunt quidem.
                                    </span>
                                </p>
                               
                                
                            </li>
                            <li className="collection-item avatar grey lighten-4">
                                <i className="material-icons circle grey lighten-2">mail</i>
                                <span className="title">
                                   
                                </span>
                                <p>
                                    {currentUser.email}
                                </p>
                            </li>
                            <li className="collection-item avatar grey lighten-4">
                                <i className="material-icons circle grey lighten-2">phone</i>
                                <span className="title">
                                    {currentUser.phoneNumber==null && ""}
                                    {currentUser.phoneNumber!=null && currentUser.phoneNumber}
                                </span>
                            </li>
                            <li className="collection-item avatar grey lighten-4">
                                <i className="material-icons circle grey lighten-2">edit</i>
                                <span className="title">
                                    johndeo@gmail.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

        </div>
    )
}
