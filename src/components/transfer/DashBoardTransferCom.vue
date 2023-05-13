<template>
  <q-card
    class="q-pa-lg full-width"
    style="max-width: 350px"
  >
    <q-form greedy @submit="eve_transfer()" class="flex column justify-center q-gutter-y-md">
      <div class="full-width text-center flex column q-gutter-y-xs">
        <span class="text-weight-bold text-h4 text-uppercase text-primary">send money</span>
        <span class="text-weight-bold text-grey-8">Transfer money to any other wallet safely</span>
      </div>
      <q-input
          v-model="amount"
          outlined
          label="Amount"
          type="number"
          lazy-rules
          :rules="amount_rules"
      />
      <q-input
          v-model="receiver"
          outlined
          label="receiver"
          maxlength="11"
          :rules="receiver_rules"
      />
      <q-input
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          outlined
          label="password"
          :rules="password_rules"
      >
        <template v-slot:append>
          <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn
          color="primary"
          label="transfer"
          type="submit"
      />
      <q-btn outline label="cancel" color="green-5" v-close-popup/>
    </q-form>
  </q-card>
</template>

<script>
import {store_transations} from "@/store/store_transations";
import {ref} from "vue";
import {transferToWallet} from '@/action/transfer.js'
export default {
  name: "DashBoardTransferCom",
  setup(){
    const store =store_transations()
    return{
      store,
      amount: ref(null),
      receiver: ref(null),
      password: ref(null),
      amount_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^[0-9]{1,5}$/.test(val) || 'Please enter a valid value'
      ],
      receiver_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^01[0-2|5]{1}[0-9]{8}$/.test(val) || 'Please enter a valid phone number'
      ],
      password_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val) || 'Check the format'
      ],
      isPwd: ref(true)
    }
  },
  methods:{
    async eve_transfer(){
      await transferToWallet({
        amount: this.amount,
        receiver: this.receiver,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>

</style>