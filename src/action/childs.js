import axios  from "axios";
import {Loading,Notify} from "quasar";
import getUserData from "@/action/getUserData.js";
import {store_kids} from "@/store/store_kids";


export async function createChild(data=Object) {

    try {

        const store = store_kids()

        Loading.show({
            message:"Please wait..."
        })

        const phone_number = data.phone_number
        const first_name = data.first_name
        const last_name = data.last_name
        const password = data.password
        const age = data.age
        const type = data.type
        const expense = data.expense
        const category   = data.category

        const res = await axios.post('/childs/create',{
            phone_number,
            first_name,
            last_name,
            password,
            age,
            type,
            expense,
            category
        })

        await getUserData()

        store.$state.create_dialog = false

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





export async function updateChild(data=Object) {

    try {

        const store = store_kids()

        Loading.show({
            message:"Please wait..."
        })

        const child_phone_number = data.child_phone_number
        const expense  = data.expense
        const type  = data.type
        const password = data.password


        const res = await axios.patch('/childs/update',{
            child_phone_number,
            expense,
            type,
            password
        })

        await getUserData()

        store.$state.update_dialog = false

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







export async function deleteChild(data=Object) {

    try {

        const store = store_kids()

        Loading.show({
            message:"Please wait..."
        })

        const child_phone_number = data.child_phone_number
        const password = data.password


        const res = await axios.post('/childs/delete',{
            child_phone_number,
            password
        })

        await getUserData()

        store.$state.delete_dialog = false

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