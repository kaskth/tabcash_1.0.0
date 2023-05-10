import { defineStore } from 'pinia'
import {ref} from "vue"

export const store_dashboard = defineStore('store_dashboard', {

  state: () => {
    return {
      wallet:{
        phone_number: ref("01153300178"),
        first_name: ref("Mohamed"),
        last_name: ref("Khaled"),
        national_ID: ref("29812270100973"),
        balance: ref(27800.00)
      },
      creditcard: {
        card_holder_name: ref("Mohamed Khaled"),
        card_number: ref("2343920123590781"),
        expiration: ref('01/24'),
        cvv: ref(419),
        balance: ref(0.00)
      },
      history:{
        balance: ref(3,261.98) ,
        transations:[
          {
            description: "Sending money to the children",
            date: "2023-05-05 18:06:33",
            type: "transfer",
            amount: 1000.00
          },
          {
            description: "Deposit balance in the wallet",
            date: "2023-05-05 18:06:33",
            type: "deposit",
            amount: 1000.00
          }
        ]
      },
      kids:[
        {
          phone_number: "01153300178",
          first_name: "Mohamed",
          last_name: "Khaled",
          balance: 100.00,
          type: 'daily',
          age: 11
        },
        {
          phone_number: "01153300178",
          first_name: "Ahmed",
          last_name: "Khaled",
          balance: 500.00,
          type: 'weekly',
          age: 14
        }
      ],
      apps:[
        {
          name: 'kaskth',
          client_id:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          client_secret : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          created_at: "2023-05-07 19:26:59"
        },
        {
          name: 'Tab Cash',
          client_id:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          client_secret : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          created_at: "2023-05-07 19:26:59"
        },
      ]
    }
  },

})
