import axios  from "axios";
import {Loading,Notify} from "quasar";
import {store_transations} from "@/store/store_transations";
import getUserData from "@/action/getUserData.js";


export default async function deposit(data=Object) {

    try {

        const store = store_transations()

        Loading.show({
            message:"Please wait..."
        })

        const amount = data.amount
        const card_holder_name   = data.card_holder_name
        const card_number = data.card_number
        const expiry_date = data.expiry_date
        const cvv = data.cvv
        const password = data.password


        const res = await axios.patch('/transactions/deposit',{
            amount,
            card_holder_name,
            card_number,
            expiry_date,
            cvv,
            password
        })

        await getUserData()

        store.$state.deposit_dialog = false

        Loading.hide()

        Notify.create({
            type: 'positive',
            message: res.data.message
        })
    }catch (e) {
        Loading.hide()
        Notify.create({
            type: 'negative',
            message: e.response.data.message
        })
    }


}
