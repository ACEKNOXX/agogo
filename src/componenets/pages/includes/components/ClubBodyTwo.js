import React,{useRef,useState} from 'react'
import { usePaystackPayment } from 'react-paystack'
import { useHistory } from 'react-router-dom';
import {firestore,auth} from './../../../../firebase'
import { useAuth } from './../../../../context/AuthContext'
import PayButton from './../../../util/PayButton'

export default function ClubBodyTwo(props) {
const history = useHistory()
  
const financialPlan = props.plan;
    
    

    const emailRef = useRef(null)
    const nameRef = useRef(null)
    const phoneNumberRef = useRef(null)
    const investmentplanRef = useRef(null)
    const [ok, setOk] = useState(false)
     const { signup,currentUser } = useAuth();

    var dataToPush = {
        email:"incorrect@gmail.com",username:"Fake John",phoneNumber:"123"
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        var a, b, c, d;
        a = emailRef.current.value
        b = nameRef.current.value
        c = phoneNumberRef.current.value
 
        if ( a.length !==0 && b.lenght !==0 && c.length !==0 ){
            setOk(true)
            dataToPush.email = a
            dataToPush.username = b
            dataToPush.phoneNumber =c
        } else {
            setOk(false)
        }
    }
    
   
    
    
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    // redirect to whatsapp groupd
    window.location.href="https://chat.whatsapp.com/G0I0FDFns0G3QLKjoSKknv"

      
      
  };

  // you can call this function anything
  const onClose = async() => {
    console.log('closed')

   
  }

    const PaystackHookExample = () => {
     var gu=(new Date()).getTime()
      const config = {
            reference:`${gu}`,
            email: emailRef.current.value,
            amount: 50000,
            publicKey: 'pk_live_e09257868dcb4f294715010d6971277b28bfaba5'
        }
      const initializePayment = usePaystackPayment(config)
      return (
        <div>
              <button className="btn-flat btn-primary green darken-4 white-text"
                  onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Proceed to Pay</button>
        </div>
      );
  };
    return (
    <div className=" ">
                {/* <div className="row hide-on-med-and-down pb-100"> */}
                <div className="row  pb-100">
                    <div className="col s12 m1"></div>
                    <div className="col s12  m5">
                        <div className="container mt-100" >
                            <div className="mt-50">
                                <h4 className="primary-color " >
                                    <b>
                                        {financialPlan}desktop
                                    </b>
                                    
                                </h4>
                                <div className="col s12">
                                     
                                    {/* <PayButton amount={dataToPush} /> */}
                                     <form onSubmit={handleSubmit}>
                                        <div className="form-section-1 mt-25 row">
                                            <div className=" col s12" >
                                                <label htmlFor="username" className="col s12 grey-text text-darken-4">Username</label>
                                                <input onChange={handleChange} ref={nameRef} id="username"
                                                className="col s12 mt-50 full-w" placeholder="username" type="text" required />
                                            </div>
                                        </div>
                                        <div className="form-section-1 mt-25 row">
                                            <div className=" col s12" >
                                                <label htmlFor="email" className="col s12 grey-text text-darken-4">Email Address</label>
                                                <input onChange={handleChange} id="email" className="col s12 mt-50 ful l-w" placeholder="email address"
                                                    ref={emailRef} type="email" required/>
                                            </div>
                                        </div>
                                        <div className="form-section-1 mt-25 row">
                                            <div className=" col s12" >
                                                <label htmlFor="phone" className="col s12 grey-text text-darken-4">Phone Number</label>
                                                <input onChange={handleChange} id="phone" className="col s12 mt-50 ful l-w" placeholder="Phone number"
                                                    ref={phoneNumberRef} type="tel" required/>
                                            </div>
                                        </div>

                                        {!ok &&
                                            <button className="btn btn-large disabled">Submit</button>
                                        }
                                        {ok &&
                                        <PayButton dataToPush={dataToPush} />
                                        }
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col s12 m1"></div>
                    <div className="col s12 m5   hide-on-med-and-down" style={{ padding: "0px !important", background: "transparent !important" }}>
                            <div className="dashboard-snippet-image z-depth-3"></div>
                        </div>
                    </div>
            </div>
        // </div>
    )
}
