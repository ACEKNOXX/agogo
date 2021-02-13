import React,{useRef,useState} from 'react'
import { Link} from 'react-router-dom'
import PayButton from './../../../util/PayButton'



export default function FinancialClubBody(props) {
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
        if ( a.length !==0 && b.lenght !==0 && c.length !==0 ){
            setOk(true)
            dataToPush = {
                email: a,
                name: b,
                phone: c,
                amount:amount
            }
        } else {
            console.log(d)
            
            setOk(false)
        }
    }
    return (
        <div className=" ">
             <div className="dashboard-snippet   full-w " >
                <div className="hide-on-med-and-up" >
                    <div className="container learn-online ">
                        <h4 className="primary-color container mt-50" >
                            <b>
                                {financialPlan}
                            </b>
                            
                        </h4>
                        <div className="container" style={{ width: "400px "}}>
                            <article className="grey-text">
                                Seamlessly maximize user friendly communities whereas customer directed results.
                            </article><br />
                            {/* <form onSubmit={handleSubmit}>
                                <div className="form-section-1 mt-25 row">
                                    <div className=" col s12" >
                                        <label htmlFor="username" className="col s12 grey-text">Username</label>
                                        <input onChange={handleChange} ref={nameRef} id="username" className="col s12 mt-50 ful l-w" placeholder="email address"  type="text" required/>
                                    </div>
                                </div>
                                <div className="form-section-1 mt-25 row">
                                    <div className=" col s12" >
                                        <label htmlFor="email" className="col s12 grey-text">Email Address</label>
                                        <input onChange={handleChange} id="email" className="col s12 mt-50 ful l-w" placeholder="email address"
                                            ref={emailRef} type="email" required/>
                                    </div>
                                </div>
                                <div className="form-section-1 mt-25 row">
                                    <div className=" col s12" >
                                        <label htmlFor="phone" className="col s12 grey-text">Email Address</label>
                                        <input onChange={handleChange} id="phone" className="col s12 mt-50 ful l-w" placeholder="email address"
                                            ref={phoneNumberRef} type="tel" required/>
                                    </div>
                                </div>
                                <div className="form-section-1 mt-25 row">
                                    <div className=" col s12" >
                                        {!ok &&
                                            <button type="submit" className="btn-flat btn-primary green darken-4 white-text"
                                            >Proceed to Pay({amount})</button>
                                        }
                                        
                                        {ok &&
                                            <PayButton amount={dataToPush} />
                                        }
                                    </div>
                                </div>

                            </form> */}
                        </div>
                        <img src="assets/Aurora_images/Courses dashboard Aurora 1-min.png" 
                        className=" hide-on-med-and-down container z-depth-2 responsive-img full-w materialboxed show-on-med-and-down hide-on-med-and-up" width="100%"   alt="" />
                    </div>

                </div>
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
                                    <p className="grey-text">
                                        Seamlessly maximize user friendly communities whereas customer directed results.
                                    </p><br/> 
                                    {/* <PayButton amount={dataToPush} /> */}
                                     <form onSubmit={handleSubmit}>
                                        <div className="form-section-1 mt-25 row">
                                            <div className=" col s12" >
                                                <label htmlFor="username" className="col s12 grey-text">Username</label>
                                                <input onChange={handleChange} ref={nameRef} id="username" className="col s12 mt-50 ful l-w" placeholder="email address"  type="text" required/>
                                            </div>
                                        </div>
                                        <div className="form-section-1 mt-25 row">
                                            <div className=" col s12" >
                                                <label htmlFor="email" className="col s12 grey-text">Email Address</label>
                                                <input onChange={handleChange} id="email" className="col s12 mt-50 ful l-w" placeholder="email address"
                                                    ref={emailRef} type="email" required/>
                                            </div>
                                        </div>
                                        <div className="form-section-1 mt-25 row">
                                            <div className=" col s12" >
                                                <label htmlFor="phone" className="col s12 grey-text">Phone Number</label>
                                                <input onChange={handleChange} id="phone" className="col s12 mt-50 ful l-w" placeholder="Phone number"
                                                    ref={phoneNumberRef} type="tel" required/>
                                            </div>
                                        </div>
                                        <div className="form-section-1 mt-25 row">
                                            <div className="col s12">
                                                <label>Investment club plan</label>
                                                <select ref={investmentplanRef}  onChange={handleChange} className="browser-default">
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
                                                    <PayButton amount={dataToPush} />
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
        </div>
    )
}
