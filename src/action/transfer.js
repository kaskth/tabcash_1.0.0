import axios  from "axios";
import {Loading,Notify} from "quasar";
import {store_transations} from "@/store/store_transations";
import getUserData from "@/action/getUserData.js";


export async function transferToWallet(data=Object) {

    try {

        const store = store_transations()

        Loading.show({
            message:"Please wait..."
        })

        const amount = data.amount
        const receiver   = data.receiver
        const password = data.password

        const res = await axios.patch('/transactions/transfer/to-wallet',{
            amount,
            receiver,
            password
        })

        await getUserData()
        store.$state.transfer_dialog = false

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




export async function transferToSmartCard(data=Object) {

    try {

        const store = store_transations()

        Loading.show({
            message:"Please wait..."
        })

        const amount = data.amount
        const password = data.password

        const res = await axios.patch('/transactions/transfer/to-smartCard',{
            amount,
            password
        })

        await getUserData()
        store.$state.transfer_smartCard_dialog = false

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