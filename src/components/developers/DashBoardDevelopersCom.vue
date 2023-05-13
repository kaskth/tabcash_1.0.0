<template>
  <q-card
      class="q-pa-lg full-width"
      style="max-width: 350px"
  >
    <q-form greedy @submit="eve_app_create()" class="flex column justify-center q-gutter-y-md">
      <div class="full-width text-center flex column q-gutter-y-xs">
        <span class="text-weight-bold text-h4 text-uppercase text-primary">send money</span>
        <span class="text-weight-bold text-grey-8">Transfer money to any other wallet safely</span>
      </div>
      <q-input
          v-model="name"
          outlined
          label="Application Name"
          lazy-rules
          :rules="name_rules"
      />
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
          label="transfer"
          type="submit"
      />
      <q-btn outline label="close" color="green-5" v-close-popup/>
    </q-form>
  </q-card>
</template>

<script>
import {ref} from 'vue'
import {createApp} from "@/action/applications";
export default {
  name: "DashBoardDevelopersCom",
  setup(){
    return{
      isPwd: ref(true),
      name: ref(null),
      password: ref(null),
      name_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^[a-zA-Z]+$/.test(val) || 'Please enter a natural name'
      ],
      password_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val) || 'Check the format'
      ]
    }
  },
  methods:{
    async eve_app_create(){
      await createApp({
        name: this.name,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>

</style>