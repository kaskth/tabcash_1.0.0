import axios  from "axios";
import {Loading, Notify} from "quasar";






export async function sms_verification(phone_number) {

    try {
        Loading.show({
            message:"Please wait..."
        })
        await axios.post('/messaging/sms-verification',{
            phone_number
        })
        Loading.hide()
    }catch (e) {
        Notify.create({
            type: 'negative',
            message: e.response.data.message
        })
        Loading.hide()
    }

}



export async function sms_verification_v2(phone_number) {

    try {

        Loading.show({
            message:"Please wait..."
        })

        await axios.post('/messaging/sms-verification-v2',{
            phone_number
        })
        Loading.hide()
        return true
    }catch (e) {
        Notify.create({
            type: 'negative',
            message: e.response.data.message
        })
        Loading.hide()
        return false
    }

}