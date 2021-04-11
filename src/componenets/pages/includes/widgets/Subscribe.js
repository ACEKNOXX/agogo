import React,{useRef} from 'react'

export default function Subscribe() {
    const subscribeEmailRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(subscribeEmailRef.current.value )
    }
    return (
        <form onSubmit={handleSubmit}>
            <input ref={subscribeEmailRef} className="subscibe-input mt-50" placeholder="Email address" type="text"
                    style={{
                        fontSize:"15px !important",
                        border:"1px solid #eee",
                        width:"250px",
                        padding:"2px 8px",borderRadius:"5px",color:"#eee !important"
                    }}
                required/>
            <br/>
            <button type="submit" className="btn-flat
                     btn-primary transparent waves-effect white-text waves-light btn modal-trigger"
                                style={{ height: "45px", borderRadius: "8px" }}>
                                Subcribe Now!</button>
        </form>
    )
}
