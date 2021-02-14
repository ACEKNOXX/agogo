import React,{useRef,useState} from 'react'
import { Link} from 'react-router-dom'
import PayButton from './../../../util/PayButton'
import ClubBodyOne from './ClubBodyOne'
import ClubBodyTwo from './ClubBodyTwo'


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
    return (
        <div>
            <ClubBodyOne plan={financialPlan} />
            <ClubBodyTwo plan={financialPlan} />
       </div>
    )
}
