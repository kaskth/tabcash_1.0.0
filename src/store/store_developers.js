import { defineStore } from 'pinia'
import {ref} from "vue"

export const store_developers = defineStore('store_developers', {

    state: () => {
        return {
            name: ref(null),
            apps_dialog: ref(false),
            delete_app_dialog: ref(false),
        }
    },

})
