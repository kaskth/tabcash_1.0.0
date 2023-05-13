import { defineStore } from 'pinia'
import {ref} from "vue"

export const store_kids = defineStore('store_kids', {

    state: () => {
        return {
            phone: ref(null),
            create_dialog: ref(false),
            update_dialog: ref(false),
            delete_dialog: ref(false),
        }
    },

})
