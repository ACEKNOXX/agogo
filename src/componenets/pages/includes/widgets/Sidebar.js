import React,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Icon from '@material-ui/core/Icon';
import Login from "./../../../auth/Login";
import Signup from './../../../auth/Signup'
import { Link} from 'react-router-dom'
import { useAuth } from './../../../../context/AuthContext'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const useStyless = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 4,
    color: '#fff',
  },
}));

export default function Sidebar() {
  const history = useHistory()
  const { currentUser, logout,refresh } = useAuth();

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open, setOpen] = React.useState(false);
  const classess = useStyless();

  const handleLogout = async (e) => {
    e.preventDefault()
    
      setOpen(true)
      
      
      await logout()
      
      setTimeout(async () => {
          // await refresh()
          window.location.reload()
      }, 5000);
      
  }
  const toggleDrawer = (anchor, open) => (event) => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    if (event.key === 'Tab' || event.key === 'Shift') {
      
    return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Backdrop className={classess.backdrop} open={open} >
                <CircularProgress color="inherit" /><br/>
             
        </Backdrop>
      <List>
        {currentUser != null &&
          
          <ListItem button key={currentUser.displayName}>
            <Link to="/user" className="black-text">
              <ListItemIcon><i className="material-icons medium ">account_circle</i> </ListItemIcon>
              <ListItemText primary={currentUser.displayName} />
            </Link>
          </ListItem>
        }
        <Divider />
        {/* {['Home', 'Explore', 'Blog', 'About','Contact'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <ListItem button key={'Home'}>
          <Link to="/" className="black-text">
            <ListItemText primary={'Home'} />
          </Link>
        </ListItem>
        <ListItem button key={'Explore'}>
          <Link to="/explore" className="black-text">
            <ListItemText primary={'Explore'} />
          </Link>
        </ListItem>
        <ListItem button key={'Blog'}>
          <Link to="/blog" className="black-text">
            <ListItemText primary={'Blog'} />
          </Link>
        </ListItem>
        <ListItem button key={'About'}>
          <Link to="/about" className="black-text">
            <ListItemText primary={'About'} />
          </Link>
        </ListItem>
        <ListItem button key={'Contact'}>
          <Link to="/contact" className="black-text">
            <ListItemText primary={'Contact'} />
          </Link>
        </ListItem>
      </List>
      <Divider />
      {!currentUser && 
        <List>
            <ListItem>
              <Link to="/LoginPage" className="right btn-flat btn-primary white-text green darken-4">Login</Link>
              <span className="white-text">aa</span>
              {/* <Link to="/SignupPage" className="right btn-flat btn-primary transparent">Signup</Link> */}
              <Signup />
            </ListItem>
        </List>
      }
      <List>
        <ListItem>
          {currentUser && 
            <button type="button" onClick={handleLogout}  className="btn-flat btn-primary btn-oultine  transparent black-text modal-trigger">
                Logout
            </button>
          }
          </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={'left'}>
          <button type="button" className="btn-flat center"
            onClick={toggleDrawer('left', true)}><Icon>menu</Icon></button>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
