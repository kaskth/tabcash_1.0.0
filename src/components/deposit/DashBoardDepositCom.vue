<template>
  <q-card
      class="q-pa-lg full-width"
      style="max-width: 350px"
  >
    <q-form greedy @submit="eve_deposit()" class="flex column justify-center q-gutter-y-md">
      <div class="full-width text-center flex column q-gutter-y-xs">
        <span class="text-weight-bold text-h4 text-uppercase text-primary">deposit</span>
        <span class="text-weight-bold text-grey-8">Deposit money in the wallet safely</span>
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
          v-model="name"
          outlined
          label="The name on the card"
          maxlength="11"
          lazy-rules
          :rules="card_holder_name_regex"
      />

      <q-input
          v-model="number"
          outlined
          label="card number"
          maxlength="16"
          lazy-rules
          :rules="card_number_regex"
      />

      <div class="full-width flex row">
        <q-input
            v-model="expiry"
            outlined
            label="expiry date"
            maxlength="11"
            class="col q-pr-md"
            lazy-rules
            :rules="expiry_date_regex"
        />
        <q-input
            v-model="cvv"
            outlined
            label="cvv"
            class="col-3"
            maxlength="11"
            lazy-rules
            :rules="cvv_regex"
        />
      </div>

      <q-input
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          outlined
          label="password"
          lazy-rules
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
          label="DEPOSIT"
          type="submit"
      />
      <q-btn outline label="later" color="green-5" v-close-popup/>
    </q-form>
  </q-card>
</template>

<script>
import {store_transations} from "@/store/store_transations";
import {ref} from "vue";

export default {
  name: "DashBoardDepositCom",
  setup(){
    const store =store_transations()
    return{
      store,
      amount: ref(null),
      name: ref(null),
      number: ref(null),
      expiry: ref(null),
      cvv: ref(null),
      password: ref(null),
      amount_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^[0-9]{1,5}$/.test(val) || 'Please enter a valid phone number'
      ],
      card_holder_name_regex: [
        val => val && val.length > 0 || 'Please type something',
        val => /^[a-zA-Z\s]+$/.test(val) || 'Data pattern error'
      ],
      card_number_regex: [
        val => val && val.length > 0 || 'Please type something',
        val => /^((4\d{3})|(5[1-5]\d{2})|(6011)|(7\d{3}))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/.test(val) || 'Data pattern error'
      ],
      expiry_date_regex: [
        val => val && val.length > 0 || 'Please type something',
        val => /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(val) || 'Data pattern error'
      ],
      cvv_regex: [
        val => val && val.length > 0 || 'Please type something',
        val => /^[0-9]{3,4}$/.test(val) || 'error'
      ],
      password_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val) || 'Check the format'
      ],
      isPwd: ref(true)
    }
  },
  methods:{
    async eve_deposit(){

    }
  }

}
</script>

<style scoped>

</style>