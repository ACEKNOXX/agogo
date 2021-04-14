import React from 'react'
import { Link} from 'react-router-dom'
export default function AboutCeo2() {
    return (
       <div>
            <section>
            <div className="full-w  "  style={{background:"#002044",marginTop:"-20px !important"}}>
                <div className="row hide-on-med-and-down " id="meet-ceo"> 
                    <div className="col s12 m6 pt-50 pb-25">
                        <img className="mt-50 pl-100" src="assets/Aurora_images/11.jpeg" style={{borderRadius:"10px !important"}} height="500px" alt="" />
                    </div>
                    <div className="col s12 m6 mt-25 ">
                        <h3 className="white-text">Meet the Convener</h3>
                        <p className="grey-text text-lighten-4 mt-50" >
                                Kehinde is a seasoned Finance professional and a strong player in the Treasury 
                                Management space with over 21 years banking experience spanning Treasury , 
                                Currency trading, Corporate Sales, Liquidity Management, Derivatives Trading, Financial Modeling,
                                Fixed Income Trading and  Balance Sheet Management amongst other skills.
                        </p>
                        <p className="grey-text text-lighten-4 " >
                                She is an alumnus of the prestigious Goldman Sachs Training Institute, 
                                Wharton Business School as well as the Lagos Business School (LBS).
                        </p>
                        <p className="grey-text text-lighten-4 " >
                                She is a member of the Lagos Business School Alumni Governing Council 
                                and a Fellow of the Financial Markets Dealers Association. She is an Associate 
                                of the Chartered Institute of Bankers Nigeria (CIBN) 
                                as well as the Chartered Institute of Bankers Scotland and Wales.
                        </p>
                        <Link to="/about" className="green-text btn">
                            Read more
                        </Link>
                        
                    </div>
                </div>
                <div className="row hide-on-med-and-up" id="meet-ceo">
                    <div className="col s12 m4 pt-50 center">
                        <img className="mt-50 " src="assets/Aurora_images/11.jpeg" style={{borderRadius:"10px !important"}}
                            width="300px" height="430px" alt="" />
                    </div>
                        <div className="col s12 m5 mt-25 center " style={{ margin:" 0px auto !important" }}>
                        <h3 className="white-text ">Meet the Convener</h3>
                        
                        <p className="grey-text text-lighten-4 mt-50" >
                                Kehinde is a seasoned Finance professional and a strong player in the Treasury 
                                Management space with over 21 years banking experience spanning Treasury , 
                                Currency trading, Corporate Sales, Liquidity Management, Derivatives Trading, Financial Modeling,
                                Fixed Income Trading and  Balance Sheet Management amongst other skills.
                        </p>
                        <p className="grey-text text-lighten-4 " >
                                She is an alumnus of the prestigious Goldman Sachs Training Institute, 
                                Wharton Business School as well as the Lagos Business School (LBS).
                        </p>
                        <p className="grey-text text-lighten-4 " >
                                She is a member of the Lagos Business School Alumni Governing Council 
                                and a Fellow of the Financial Markets Dealers Association. She is an Associate 
                                of the Chartered Institute of Bankers Nigeria (CIBN) 
                                as well as the Chartered Institute of Bankers Scotland and Wales.
                        </p>
                        <Link to="/about" className="green-text " style={{
                            borderRadius:"4px"
                        }}>
                            Read more ...
                        </Link>
                                               
                    </div>
                    <div className="col 12 m2 l2"></div>
                </div>
                    <div className="full-w" style={{ height:"100px",background:"#002044"}}> </div>
            </div>
        </section>
        </div>
    )
}
