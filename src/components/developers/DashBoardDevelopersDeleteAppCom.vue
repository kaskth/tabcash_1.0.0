<template>
  <q-card
      class="q-pa-lg full-width"
      style="max-width: 350px"
  >
    <q-form greedy @submit="eve_deleteApp()" class="flex column justify-center q-gutter-y-md">
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
import {store_developers} from "@/store/store_developers";
import {ref} from "vue";
import {deleteApp} from "@/action/applications";

export default {
  name: "DashBoardDevelopersDeleteAppCom",
  setup(){
    const store = store_developers()
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
    async eve_deleteApp(){
      await  deleteApp({
        app_name: this.store.name,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>

</style>