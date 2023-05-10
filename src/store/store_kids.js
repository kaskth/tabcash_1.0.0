import { defineStore } from 'pinia'
import {ref} from "vue"

export const store_kids = defineStore('store_kids', {

    state: () => {
        return {
            create_dialog: ref(false),
        }
    },

})
