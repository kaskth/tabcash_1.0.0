import axios  from "axios";
import {Loading,Notify} from "quasar";
import {store_transations} from "@/store/store_transations";
import getUserData from "@/action/getUserData.js";

export default async function withdrawal(data=Object) {

    try {

        const store = store_transations()

        Loading.show({
            message:"Please wait..."
        })

        const amount = data.amount
        const bank_account_number = data.bank_account_number
        const password = data.password


        const res = await axios.patch('/transactions/withdrawal',{
            amount,
            bank_account_number,
            password
        })

        await getUserData()

        store.$state.withdrawal_dialog = false

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
