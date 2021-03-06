import React from 'react'
import { usePaystackPayment } from 'react-paystack'
import { useHistory } from 'react-router-dom';

export default function PayButton2(props) {
  const res = props.dataToPush
  console.log(res)
  
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    // redirect to whatsapp groupd

    // window.location.href="https://chat.whatsapp.com/G0I0FDFns0G3QLKjoSKknv"
    // fetch(`http://aurorafinance.com.ng/mailer/mailer.php?q=${res.email}`, {//options => (optional)
    // method: 'get' //Get / POST / ...
    // }).then(function(response) {
    //     //response
    //   alert("omo i don send mail oh ")
    // }).catch(function(err) {
    // // Called if the server returns any errors
    //   console.log("Error:"+err);
    // });
  };

  // you can call this function anything
  const onClose = () => {
    console.log(res)
    window.location.href=`http://aurorafinance.com.ng/mailer/index.php?q=${res.email}`
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
    // history.push("http://google.com")
  }

    const PaystackHookExample = () => {
     var gu=(new Date()).getTime()
      const config = {
            reference:`${gu}`,
            email: res.email,
            amount:600000,
            publicKey: 'pk_live_e09257868dcb4f294715010d6971277b28bfaba5'
        }
      const initializePayment = usePaystackPayment(config)
      return (
        <div>
              <button className="btn-flat btn-primary green darken-4 white-text"
                  onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Proceed to Pay 6k  </button>
        </div>
      );
  };
    return (
      <PaystackHookExample />
    )
}
