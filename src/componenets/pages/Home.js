import React,{useEffect} from 'react'
import Navbar from './includes/widgets/Navbar'
import IndexBanner from './includes/components/IndexBanner'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Button from '@material-ui/core/Button';
import { useAuth } from './../../context/AuthContext'
import { makeStyles } from '@material-ui/core/styles';
import AboutCeo from './includes/components/AboutCeo'
import Footer from './includes/widgets/Footer'
import Feedback from './includes/components/Feedback'
import HowItWorks from './includes/components/HowItWorks'
import DashboardSnippet from './includes/components/DashboardSnippet'
import LittleAbout from './includes/components/LittleAbout'
import PopularCourses from './includes/components/PopularCourses'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 4,
    color: '#fff',
  },
}));

export default function Home() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const { currentUser, logout,refresh } = useAuth();
    
    useEffect(() => {
        if (currentUser != null) {
            // setOpen(false);
        }
    })
    return (
        <div className="Home-section">
            
            <Backdrop className={classes.backdrop} open={open} >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Navbar />
            <IndexBanner />
            <PopularCourses />
            <HowItWorks />
            <DashboardSnippet />
            <LittleAbout />
            <AboutCeo />
            <Feedback />
            <Footer />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </div>
    )
}
