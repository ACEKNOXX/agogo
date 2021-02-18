import React,{useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { firestore } from '../../../firebase'
import { useHistory } from 'react-router-dom';

export default function AdsActivate(props) {
        const history = useHistory()
    const [loading, setLoading] = useState(false)

        const courseId=props.courseId
            console.log("coourseId==", courseId)
        var courseDocId;
        if (props.courseId==null) {
            console.log("omom we  get null data")
        } else {
            courseDocId = courseId
        }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleAgree = async () => {
        setLoading(true)
        try {
            await firestore.collection("adverts").doc(courseDocId).delete()
            console.log("course deleted")
            handleClose()
            history.push("/admin")
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="grey lighten-5" onClick={handleClickOpen}>
        <i className="material-icons red-text">delete</i>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this course?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Note: After deleting curse , this course cannot be retreived.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
        <Button disabled={loading} onClick={handleAgree} className="green white-text" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
