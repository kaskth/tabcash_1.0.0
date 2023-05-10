import axios  from "axios";
import {Loading,Notify} from "quasar";
import router from '../router/index.js'
import {store_transations} from "@/store/store_transations";

const store = store_transations()

export async function signin(data=Object) {

    try {

        Loading.show({
            message:"Please wait..."
        })

        const amount = data.phone_number
        const receiver   = data.password
        const password = data.validation_code

        const res = await axios.patch('/transfer/to-wallet',{
            amount,
            receiver,
            password
        })


        sessionStorage.setItem('token', res.data.token);

        Loading.hide()
        router.push('/dashboard')
        Notify.create({
            type: 'positive',
            message: res.data.message
        })
    }catch (e) {
        Notify.create({
            type: 'negative',
            message: e.response.data.message
        })
    }


}
