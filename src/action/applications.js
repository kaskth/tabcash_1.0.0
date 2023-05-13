import axios  from "axios";
import {Loading,Notify} from "quasar";
import getUserData from "@/action/getUserData.js";
import {store_developers} from "@/store/store_developers";


export async function createApp(data=Object) {

    try {

        const store = store_developers()

        Loading.show({
            message:"Please wait..."
        })

        const name = data.name
        const password = data.password

        const res = await axios.post('/gateway/application/create',{
            name,
            password
        })

        await getUserData()
        store.$state.apps_dialog = false

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



export async function deleteApp(data=Object) {

    try {

        const store = store_developers()

        Loading.show({
            message:"Please wait..."
        })

        const app_name = data.app_name
        const password = data.password

        const res = await axios.post('/gateway/application/delete',{
            app_name,
            password
        })

        await getUserData()
        store.$state.delete_app_dialog = false

        Loading.hide()

        Notify.create({
            type: 'positive',
            message: res.data
        })
    }catch (e) {
        Loading.hide()
        Notify.create({
            type: 'negative',
            message: e.response.data.message
        })
    }

}