<template>
  <q-card
      class="q-pa-lg full-width"
      style="max-width: 350px"
  >
    <q-form greedy @submit="eve_kidsDelete()" class="flex column justify-center q-gutter-y-md">
      <div class="full-width text-center flex column q-gutter-y-xs">
        <span class="text-weight-bold text-h4 text-uppercase text-primary">Delete</span>
        <span class="text-weight-bold text-grey-8">Are you sure, this decision cannot be reversed?</span>
      </div>
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
          color="red"
          label="Delete"
          type="submit"
      />
      <q-btn outline label="cancel" color="green-5" v-close-popup/>
    </q-form>
  </q-card>
</template>

<script>
import {ref} from "vue";
import {deleteChild} from "@/action/childs";
import {store_kids} from "@/store/store_kids";
export default {
  name: "DashBoardKidsDeleteCom",
  setup(){
    const store = store_kids()
    return{
      store,
      isPwd: ref(true),
      password: ref(null),
      password_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val) || 'Check the format'
      ],
    }
  },
  methods:{
    async eve_kidsDelete(){
      await  deleteChild({
        child_phone_number: this.store.phone,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>

</style>