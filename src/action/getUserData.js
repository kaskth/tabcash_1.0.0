import axios from 'axios'
import {store_dashboard} from "@/store/store_dashboard";




export default async function getUserData() {

    try {

        const store = store_dashboard()

        const res = await axios.get('/user/data')

        store.$state = res.data

    }
    catch (e) {
        console.log(e)
    }

}