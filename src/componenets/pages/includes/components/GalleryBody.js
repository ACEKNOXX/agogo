import React,{useState,useEffect} from 'react';
import { firestore } from './../../../../firebase'
import CircularProgress from '@material-ui/core/CircularProgress';
import GalleryTab from './../widgets/GalleryTab'

export default function GalleryBody() {
const [loading, setLoading] = useState(true)
  const [rows, setRows] = useState([])
    
    
    useEffect(() => {
        firestore.collection("gallery").get().then((item) => {
            setLoading(true)
          const rowss = item.docs.map((doc)=> doc )
            setRows(rowss)
            console.log(rowss)
            setTimeout( ()=>{ }, 5000)
            setLoading(false)
        }).catch((e) => {
            console.log("error from snapshot",e)
        })
    },[])
  return (
    <div className="row">
      {loading &&
        <div className="col s12 center">
          <CircularProgress/>
        </div>
      }
      {!loading &&

        rows.map((data) => <GalleryTab dara={data} /> )
      }
    </div>
  );
}
