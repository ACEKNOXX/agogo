import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Navbar from './../pages/includes/widgets/Navbar'
import Footer from './../pages/includes/widgets/Footer'
import ExploreBanner from './../pages/includes/components/ExploreBanner'
import ExploreBody from './../pages/includes/components/ExploreBody'
import { Link,useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function SignupPage() {
    return (
        <div>
            <Navbar />
                
            <Footer />

        </div>
    )
}
