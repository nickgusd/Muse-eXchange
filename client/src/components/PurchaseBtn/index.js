import React,{useState} from "react";
// import Paypal from "../PayPal"
import Payment from "../../pages/Payment"
function PurchaseBtn(props){
console.log(props)
const[checkout,setCheckout] = useState(false)


return (
   
   <div className= 'Paypal'>
       {checkout?window.location.replace("../../pages/Payment/"+ props.title + "/" + props.price):(
        <button onClick={ ()=> {setCheckout(true); } }>  Make Purchase   </button>
       )}
    </div>
)






}


export default PurchaseBtn;