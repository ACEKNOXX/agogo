import React from 'react'
import Navbar from './includes/widgets/Navbar'
import Footer from './includes/widgets/Footer'
import { usePaystackPayment } from 'react-paystack'
import Button from '@material-ui/core/Button';

export default function Pay() {

  
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

    const PaystackHookExample = () => {
     var gu=(new Date()).getTime()
      const config = {
            reference:`${gu}`,
            email: "user@example.com",
            amount: 20000,
            publicKey: 'pk_live_e09257868dcb4f294715010d6971277b28bfaba5'
        }
        const initializePayment = usePaystackPayment(config)
      return (
        <div>
              <button className="btn-flat btn-primary green darken-4 white-text"
                  onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Paystack Hooks Implementation</button>
        </div>
      );
  };
    return (
        <div>
            <Navbar />
            <h1>Pay</h1>
                <PaystackHookExample />
            <Footer />
        </div>
    )
}
