import { defineStore } from 'pinia'
import {ref} from "vue"

export const store_transations = defineStore('store_transations', {

    state: () => {
        return {
            transfer_dialog: ref(false),
            deposit_dialog: ref(false),
            withdrawal_dialog: ref(false)
        }
    },

})
