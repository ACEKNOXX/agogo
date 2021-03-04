import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { Link} from 'react-router-dom'
import { useAuth } from './../../../context/AuthContext'


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

export default function MobileSidebar() {
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
      <List>
        {currentUser != null &&
          
          <ListItem button key={currentUser.displayName}>
            <Link to="/user" className="black-text">
              <ListItemIcon><i className="material-icons  medium ">account_circle</i> </ListItemIcon>
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
          <Link to="/admin" className="black-text">
            <ListItemText primary={'Home'} />
          </Link>
        </ListItem>
        <ListItem button key={'My Courses'}>
          <Link to="/admincourses" className="black-text">
            <ListItemText primary={'Courses'} />
          </Link>
        </ListItem>
        <ListItem button key={'My Account'}>
          <Link to="/adminAdvert" className="black-text">
            <ListItemText primary={'Advert'} />
          </Link>
        </ListItem>
        <ListItem button key={'Community'}>
          <Link to="/adminBlogPanel" className="black-text">
            <ListItemText primary={'Blog'} />
          </Link>
        </ListItem>
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
            onClick={toggleDrawer('left', true)}><Icon className="white-text">menu</Icon></button>
          <Drawer   anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
