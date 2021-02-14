import React,{useRef,useState} from 'react'
import { usePaystackPayment } from 'react-paystack'
import { useHistory } from 'react-router-dom';

export default function ClubBodyTwo(props) {
const history = useHistory()
  
const financialPlan = props.plan;
    
    var amount
    
    if (financialPlan == "Savings club") {
        amount = "5000" 
    } else if(financialPlan == "Investment Club") {
        amount = "10000" 
    } else {
        amount = "6000"
    }

    const emailRef = useRef(null)
    const nameRef = useRef(null)
    const phoneNumberRef = useRef(null)
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
        amount = d
        console.log(d)
        console.log("amount",amount)
        if ( a.length !==0 && b.lenght !==0 && c.length !==0 ){
            setOk(true)
            dataToPush = {
                email: a,
                name: b,
                phone: c,
                amount:amount
            }
        } else {
            
            setOk(false)
        }
    }
    const handleChangePlan = () => {
        amount = investmentplanRef.current.value
        console.log(amount)
    }
    // oononon
    
    
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    // redirect to whatsapp groupd
    window.location.href="https://chat.whatsapp.com/G0I0FDFns0G3QLKjoSKknv"

  };

  // you can call this function anything
  const onClose = () => {

    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
    // history.push("http://google.com")
  }

    const PaystackHookExample = () => {
     var gu=(new Date()).getTime()
      const config = {
            reference:`${gu}`,
            email: emailRef.current.value,
            amount: amount*100,
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
                <div className="row hide-on-med-and-down pb-100">
                    <div className="col s12  m5">
                        <div className="container mt-100" >
                            <div className="pl-50 mt-120 " style={{width:"400px"}}>
                                <h4 className="primary-color " >
                                    <b>
                                        {financialPlan}
                                    </b>
                                    
                                </h4>
                                <div className="" style={{width:"400px"}}>
                                     
                                    {/* <PayButton amount={dataToPush} /> */}
                                     <form onSubmit={handleSubmit}>
                                        <div className="form-section-1 mt-25 row">
                                            <div className=" col s12" >
                                                <label htmlFor="username" className="col s12 grey-text text-darken-4">Username</label>
                                                <input onChange={handleChange} ref={nameRef} id="username" className="col s12 mt-50 ful l-w" placeholder="username"  type="text" required/>
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
                                        <div className="form-section-1 mt-25 row">
                                            <div className="col s12">
                                                <label>Investment club plan</label>
                                                <select ref={investmentplanRef}  onChange={handleChangePlan} className="browser-default">
                                                    <option value="" disabled selected>choose option</option>
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
                            </div>
                            
                        </div>
                    </div>
                    <div className="col s12 m7   hide-on-med-and-down" style={{padding:"0px !important",background:"transparent !important"}}>
                        <div className="dashboard-snippet-image z-depth-3"></div>
                    </div>
                </div>
            </div>
        // </div>
    )
}
