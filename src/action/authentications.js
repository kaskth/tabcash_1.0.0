import axios  from "axios";
import {Loading,Notify} from "quasar";
import router from '../router/index.js'
import getUserData from "@/action/getUserData.js";

export async function signin(data=Object) {

    try {

        Loading.show({
            message:"Please wait..."
        })

        const phone_number = data.phone_number
        const password   = data.password
        const validation_code = data.validation_code

        const res = await axios.post('/authentications/signin',{
            phone_number,
            password,
            validation_code
        })

        sessionStorage.setItem('token', res.data.token);

        axios.defaults.headers.authorization = res.data.token

        await getUserData()

        Loading.hide()
        router.push('/dashboard')
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



export async function signup(data=Object) {

    try {

        Loading.show({
            message:"Please wait..."
        })

        const phone_number = data.phone_number
        const first_name   = data.first_name
        const last_name = data.last_name
        const password = data.password
        const national_ID = data.national_ID
        const expiration_date = data.expiration_date
        const date_of_birth  = data.date_of_birth
        const validation_code = data.validation_code

        const res = await axios.post('/authentications/signup',{
            phone_number,
            first_name,
            last_name,
            password,
            national_ID,
            expiration_date,
            date_of_birth,
            validation_code
        })

        sessionStorage.setItem('token', res.data.token);

        axios.defaults.headers.authorization = res.data.token

        await getUserData()

        Loading.hide()

        router.push('/dashboard')
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