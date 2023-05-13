<template>
  <q-card
      class="q-pa-lg full-width"
      style="max-width: 350px"
  >
    <q-form greedy @submit="eve_kidsEdit()" class="flex column justify-center q-gutter-y-md">
      <div class="full-width text-center flex column q-gutter-y-xs">
        <span class="text-weight-bold text-h4 text-uppercase text-primary">Edit</span>
        <span class="text-weight-bold text-grey-8">You can change the expense and duration</span>
      </div>
      <q-input
          v-model="expense"
          outlined
          label="Amount"
          type="number"
          lazy-rules
          :rules="expense_rules"
      />
      <q-select
          v-model="type"
          outlined
          label="Type"
          :options="type_options"
          maxlength="11"
          :rules="type_rules"
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
          label="update"
          type="submit"
      />
      <q-btn outline label="cancel" color="green-5" v-close-popup/>
    </q-form>
  </q-card>
</template>

<script>
import {ref} from "vue";
import {updateChild} from "@/action/childs";
import {store_kids} from "@/store/store_kids";
export default {
  name: "DashBoardKidsEditCom",
  setup(){
    const store = store_kids()
    return{
      store,
      isPwd: ref(true),
      expense: ref(null),
      type: ref(null),
      password: ref(null),
      type_options: [
        'daily', 'weekly', 'monthly', 'none'
      ],
      expense_rules:[
        val => val && val.length > 0 || 'Please type something',
        val => /^[1-9]\d*$/.test(val) || 'Please enter a valid value'
      ],
      type_rules:[
        val => val && val.length > 0 || 'Please type something'
      ],
      password_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val) || 'Check the format'
      ],
    }
  },
  methods:{
    async eve_kidsEdit(){
      await updateChild({
        child_phone_number: this.store.phone,
        expense: this.expense,
        type: this.type,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>

</style>