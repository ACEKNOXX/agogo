import React,{useRef,useState} from 'react'
import { usePaystackPayment } from 'react-paystack'
import { useHistory } from 'react-router-dom';
import {firestore} from './../../../../firebase'

export default function ClubBodyOne(props) {

    const history = useHistory()
  
    // ononoo
    const financialPlan = props.plan;
    const [amount,setAmount] = useState(5000)
    

    const emailRef = useRef(null)
    const nameRef = useRef(null)
    const phoneNumberRef = useRef(null)
    // const passwordRef = useRef(null)
    const investmentplanRef = useRef(null)
    const [ok, setOk] = useState(false)

    var dataToPush 
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        var a, b, c, d;
        a = emailRef.current.value
        b = nameRef.current.value
        c = phoneNumberRef.current.value
        d = investmentplanRef.current.value
        // e = passwordRef.current.value
        setAmount(d)
        console.log(d)
        console.log("amount", amount)
        console.log(a,b,c,d)
        if ( a.length !==0 && b.lenghth !==0 && c.length !==0 && d.length !==0 ){
            setOk(true)
        } else {
            setOk(false)
        }
    }
    const handleChangePlan = () => {
        var mm = investmentplanRef.current.value
        setAmount(mm)
        console.log("new amount",amount)
    }
    // oononon
    
    
  // you can call this function anything
  const onSuccess = async(reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    // redirect to whatsapp groupd
    //   try {
    //       var a, b, c, d;
    //       a = emailRef.current.value
    //       b = nameRef.current.value
    //       c = phoneNumberRef.current.value
    //       d = investmentplanRef.current.value
    //       await firestore.collection("financialClubUsers")
    //           .doc().set({
    //               "displayName": b,
    //               "email": a,
    //               "phone": c,
    //               "investment_plan": financialPlan,
    //               "reference": reference
    //           })
            
            
    //       window.location.href = "https://chat.whatsapp.com/G0I0FDFns0G3QLKjoSKknv"

    //   } catch (e) {
        
    //       console.log(e.message)
    //   }

  };

  // you can call this function anything
  const onClose = async() => {

    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
    // history.push("http://google.com")
      try {
          var a, b, c, d;
          a = emailRef.current.value
          b = nameRef.current.value
          c = phoneNumberRef.current.value
          d = investmentplanRef.current.value
          await firestore.collection("financialClubUsers")
              .doc().set({
                  "displayName": b,
                  "email": a,
                  "phone": c,
                  "investment_plan": financialPlan,
                  "amount_paid":d,
                  "reference": "dkjakndkn"
              })
            
            
          window.location.href = "https://chat.whatsapp.com/G0I0FDFns0G3QLKjoSKknv"

      } catch (e) {
        
          console.log(e.message)
      }
  }

    const PaystackHookExample = () => {
        
        var gu = (new Date()).getTime()
        const config = {
            reference: `${gu}`,
            email: emailRef.current.value,
            amount: amount * 100,
            publicKey: 'pk_live_e09257868dcb4f294715010d6971277b28bfaba5'
        }
        const initializePayment = usePaystackPayment(config)
        return (
            <div>
                <button className="btn-flat btn-primary green darken-4 white-text"
                    onClick={() => {
                        initializePayment(onSuccess, onClose)
                    }}>Pay with paystack</button>
            </div>
        );
    };
    return (
    <div className=" ">
             <div className="dashboard-snippet hide-on-med-and-up pt-100   full-w " >

                    <div className="container learn-online ">
                        <h4 className="primary-color center container mt-50" >
                            <b>
                                {financialPlan} mobile
                            </b>
                            
                        </h4>
                        <div className="container" style={{ width: "400px "}}>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="form-section-1 mt-25 row">
                                    <div className=" col s12" >
                                        <label htmlFor="username" className="col s12 grey-text text-darken-4">Username</label>
                                        <input onChange={handleChange} ref={nameRef} id="username" className="col s12 mt-50 ful l-w" placeholder="username"  type="text" required/>
                                    </div>
                                </div>
                                <div className="form-section-1 mt-25 row">
                                    <div className=" col s12" >
                                        <label htmlFor="phone" className="col s12 grey-text text-darken-4">Phone number</label>
                                        <input onChange={handleChange} id="phone" className="col s12 mt-50 ful l-w" placeholder="phone number"
                                            ref={phoneNumberRef} type="tel" required/>
                                    </div>
                                </div>
                                <div className="form-section-1 mt-25 row">
                                    <div className=" col s12" >
                                        <label htmlFor="email" className="col s12 grey-text text-darken-4">Email Address</label>
                                        <input onChange={handleChange} id="email" className="col s12 mt-50 ful l-w" placeholder="email address"
                                            ref={emailRef} type="email" required/>
                                    </div>
                                </div>
                                {/* <div className="form-section-1 mt-25 row">
                                    <div className=" col s12" >
                                        <label htmlFor="password" className="col s12 grey-text text-darken-4">Password</label>
                                        <input onChange={handleChange} id="password" className="col s12 mt-50 ful l-w" placeholder="Password"
                                            ref={passwordRef} type="password" required/>
                                    </div>
                                </div> */}
                                
                                <div className="form-section-1 mt-25 row">
                                    <div className="col s12">
                                        <label>Investment club plan</label>
                                    <select ref={investmentplanRef} onChange={handleChange} className="browser-default">
                                            
                                            
                                            {financialPlan === "Investment Club" && 
                                                <option value="0"  >choose option</option>
                                            }
                                        
                                            {financialPlan === "Investment Club" && 
                                                <option value="10000">₦10000/12months</option>
                                            }
                                            
                                            {financialPlan === "Investment Club" && 
                                                <option value="6000">₦6000/6months</option>
                                            }
                                            {financialPlan  === "Savings club" &&
                                                <option value="5000">₦5000/One-off Fee</option>
                                            }
                                            
                                        </select>
                                    </div>
                                </div>
                                <div className="form-section-1 mt-25 row">
                                    <div className=" col s12" >
                                        {!ok &&
                                            <button type="submit" className="btn-flat btn-primary green darken-4 white-text"
                                            >Proceed to Pay({amount})</button>
                                        }
                                        
                                        {ok &&
                                            <PaystackHookExample />
                                        }
                                    </div>
                                </div>

                            </form>
                        </div>
                        <img src="assets/Aurora_images/Courses dashboard Aurora 1-min.png" 
                        className=" hide-on-med-and-down container z-depth-2 responsive-img full-w materialboxed show-on-med-and-down hide-on-med-and-up" width="100%"   alt="" />
                    </div>

                </div>
                
            </div>
        // </div>
    )
}
