import React,{useRef,useState, useEffect} from 'react'
import PayButton from './../../../util/PayButton'



export default function ClubBodyTwo(props) {
  
const financialPlan = props.plan;
    
    

    // const emailRef = useRef(null)
    // const nameRef = useRef(null)
    // const phoneNumberRef = useRef(null)
    const [ok, setOk] = useState(false)

    const [dataToPush, setDataToPush] = useState({
        email:"",username:"",phoneNumber:""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        var { name, value } = e.target;
        var dd = { ...dataToPush };
        dd[name] = value;
        setDataToPush(dd);
        
    }
    
    useEffect(() => {
        if (dataToPush.email !== "" &&
        dataToPush.username !== "" &&
        dataToPush.phoneNumber !== ""
        ) {
            setOk(true);
        } else {
            setOk(false)
        }
    },[dataToPush])

    return (
    <div className=" ">
                <div className="row  pb-100">
                    <div className="col s12 m1"></div>
                    <div className="col s12  m5">
                        <div className="container mt-100" >
                            <div className="mt-50">
                                <h4 className="primary-color center" >
                                
                                    <b>
                                        {financialPlan}
                                    </b>
                                    
                                </h4>
                                <div className="col s12">
                                     <form onSubmit={handleSubmit}>
                                        <div className="form-section-1 mt-25 row">
                                            <div className=" col s12" >
                                                <label htmlFor="username" className="col s12 grey-text text-darken-4">Full name</label>
                                                <input onChange={(e)=>handleChange(e)} name="username" id="username"
                                                className="col s12 mt-50 full-w" placeholder="username" type="text" required />
                                            </div>
                                        </div>
                                        <div className="form-section-1 mt-25 row">
                                            <div className=" col s12" >
                                                <label htmlFor="email" className="col s12 grey-text text-darken-4">Email Address</label>
                                                <input onChange={(e)=>handleChange(e)} name="email" id="email" className="col s12 mt-50 ful l-w" placeholder="email address"
                                                     type="email" required/>
                                            </div>
                                        </div>
                                        <div className="form-section-1 mt-25 row">
                                            <div className=" col s12" >
                                                <label htmlFor="phone" className="col s12 grey-text text-darken-4">Phone Number</label>
                                                <input onChange={(e)=>handleChange(e)} id="phoneNumber" name="phoneNumber" className="col s12 mt-50 ful l-w" placeholder="Phone number"
                                                    type="tel" required/>
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
