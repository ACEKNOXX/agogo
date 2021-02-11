import React from 'react'
import { usePaystackPayment } from 'react-paystack'
import { useHistory } from 'react-router-dom';

export default function PayButton(props) {
  const amount = props.amount 
  const history = useHistory()
  
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    // redirect to whatsapp groupd
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
    // history.push("http://google.com")
    window.location.href="https://chat.whatsapp.com/G0I0FDFns0G3QLKjoSKknv"
  }

    const PaystackHookExample = () => {
     var gu=(new Date()).getTime()
      const config = {
            reference:`${gu}`,
            email: "user@example.com",
            amount: amount*100,
            publicKey: 'pk_live_e09257868dcb4f294715010d6971277b28bfaba5'
        }
        const initializePayment = usePaystackPayment(config)
      return (
        <div>
              <button className="btn-flat btn-primary green darken-4 white-text"
                  onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Proceed to Pay({amount})</button>
        </div>
      );
  };
    return (
      <PaystackHookExample />
    )
}
