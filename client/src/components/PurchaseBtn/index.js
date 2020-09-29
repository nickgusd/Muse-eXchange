import React,{useState} from "react";
// import Paypal from "../PayPal"
import Payment from "../../pages/Payment"
function PurchaseBtn(){

const[checkout,setCheckout] = useState(false)


return (
   
   <div className= 'Paypal'>
       {checkout?(<Payment /> ):(
        <button onClick={ ()=> {setCheckout(true); } }>  Make Purchase   </button>
       )}
    </div>
)






}


export default PurchaseBtn;