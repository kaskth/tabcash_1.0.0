import { defineStore } from 'pinia'
import {ref} from "vue"

export const store_developers = defineStore('store_developers', {

    state: () => {
        return {
            apps_dialog: ref(false),
        }
    },

})
