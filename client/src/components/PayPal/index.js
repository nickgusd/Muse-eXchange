import React, { useRef, useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import API from "../../utils/API";
// import { AddPurchasedSongs } from "../../../../controllers/userControllers";



export default function Paypal(props) {
  // const [user, setUser] = useState();
  
  const history = useHistory()
    const paypal = useRef();
console.log(props.id)

    useEffect(() => {
     
            // Configure environment
            
            // Customize button (optional)
            
            
         window.paypal.Buttons({ 
            style: {
                size: 'responsive',
                color: 'black',
                shape: 'rect',
                layout:'vertical'
              },
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: props.id.id,

                amount: {
                  currency_code: "USD",
                  value: props.price,
                },
                payee: {
                    email_address: "sb-lsm47g3309758@personal.example.com"
                },
                
                
              }
            ]
          })
        }, 
        onApprove: async (data, actions) => {
          console.log(actions);
          console.log(data);
          const order = await actions.order.capture();
          console.log(order)
          console.log(props.currentuser.id)
          console.log(order.purchase_units[0].description)
          // console.log(user)
          //get the song id here
          //perform API call here

          // AddPurchasedSongs: function(songid, userid) {
          //   return axios.get(`api/users/${songid}/${userid}`)
          // },

          // AddPurchasedSongs = () => {
          // console.log(order.purchase_units[0].description)
          // API.AddPurchasedSongs(order.purchase_units[0].description, props.currentuser.id).then(res => {
          //   console.log(res)}
          // )
          // .catch(err => console.log(err))
          // }



        history.push("/")
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );

}

