<template>
  <q-card
      v-for="(app,index) in store.apps"
      :key="index"
      class="q-pa-lg flex row items-center"
  >
    <div class="col flex column">
      <span class="text-weight-bold">{{app.name}}</span>
      <span class="text-grey-7">{{app.created_at.slice(0,10)}}</span>
    </div>

    <div class="col flex row justify-center items-center q-px-sm">
      <q-input
          readonly
          filled
          type="password"
          class="col text-center text-weight-bold overflow-hidden"
          :model-value="app.client_id"
          style="width: 60px"
          @click="copy(app.client_id)"
      />
      <q-btn icon="content_copy" flat @click="copy(app.client_id)"/>
    </div>

    <div class="col flex row justify-center items-center q-px-sm">
      <q-input
          readonly
          filled
          type="password"
          class="col text-center text-weight-bold overflow-hidden"
          :model-value="app.client_secret"
          style="width: 60px"
          @click="copy(app.client_secret)"
      />
      <q-btn icon="content_copy" flat @click="copy(app.client_secret)"/>
    </div>

    <div class="col-1 text-grey-7">
      <q-btn icon="delete" flat size="12px" @click="dialog_delete(app.name)">
        <q-tooltip>Delete</q-tooltip>
      </q-btn>
    </div>

  </q-card>
</template>

<script>
import {store_dashboard} from "@/store/store_dashboard";
import {Notify} from "quasar";
import {store_developers} from "@/store/store_developers";

export default {
  name: "DashBoardDevelopersCardCom",
  setup(){
    const store = store_dashboard()
    const store2 = store_developers()
    return{
      store,
      store2
    }
  },
  methods:{
    copy(text){
      var textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      Notify.create({
        type:"positive",
        message: "Copied"
      })
    },
    async dialog_delete(name){
      this.store2.name = name
      this.store2.delete_app_dialog = true
    }
  }
}
</script>

<style scoped>

</style>