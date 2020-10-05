import React, { useRef, useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import API from "../../utils/API";

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
                    email_address: props.email
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
          console.log(props.currentuser)
          
          console.log(order.purchase_units[0].description)
          const songid = order.purchase_units[0].description;
          const userid = props.currentuser
          const tutorialid = order.purchase_units[0].description;
          
          console.log(songid)
          console.log(userid)

        
          // console.log(user)
          //get the song id here
          //perform API call here

          // GetPurchasedSongs: function(songid, userid) {
          //   return axios.get(`api/users/${songid}/${userid}`)
          // },

          // PurchasedSongs = (songid, userid) => {
          //    songid = order.purchase_units[0].description;
          //    userid = props.currentuser
          
          // console.log(order.purchase_units[0].description)
          

         

          API.GetPurchasedSongs(songid, userid).then(res => {
            console.log(res.data)
          })
          .catch(err => {
            console.log(err)
            console.log(err.response.data)
            console.error(err.response.headers)
          }
            )
        
          API.GetPurchasedTutorials(tutorialid, userid).then(res => {
            console.log(res.data)
          })
          .catch(err => {
            console.log(err)
            console.log(err.response.data)
            console.error(err.response.headers)
          }
            )





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

