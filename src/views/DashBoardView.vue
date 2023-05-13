<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold cursor-pointer" @click="$router.push('/')">
          <q-avatar square>
           <q-icon name="account_balance_wallet" size="40px"/>
          </q-avatar>
          Tab Cash
        </q-toolbar-title>
        <q-btn icon="logout" label="log out" color="black" @click="logout()" flat class="bg-grey-4"/>
      </q-toolbar>

      <q-tabs class="bg-green-4" align="center" inline-label>
        <q-route-tab icon="grid_view" to="/dashboard/home" label="dashboard" />
        <q-route-tab icon="account_balance_wallet" to="/dashboard/sub-wallet" label="kids wallet" />
        <q-route-tab icon="code" to="/dashboard/developers" label="developers" />
      </q-tabs>
    </q-header>

    <q-page-container class="flex justify-center items-center">
      <div class="full-width flex justify-center" style="max-width: 1400px">
        <router-view />
      </div>
    </q-page-container>

  </q-layout>
</template>

<script>
import getUserData from "@/action/getUserData.js";
import axios from "axios"
import {store_dashboard} from "@/store/store_dashboard";
export default {
  name: "DashBoardView",
  methods:{
    logout(){
      sessionStorage.removeItem('token')
      axios.defaults.headers.authorization = ''
      this.$router.push('/signin')
    }
  },
  beforeRouteEnter : async () =>{

    const store = store_dashboard()

    if (store.$state.status == false){
      const token = sessionStorage.getItem('token');

      axios.defaults.headers.authorization = token
      await getUserData()
    }

  }
}
</script>

<style scoped>

</style>