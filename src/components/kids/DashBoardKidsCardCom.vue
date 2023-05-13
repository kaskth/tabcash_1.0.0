<template>
  <q-card
      v-for="(kid,index) in store.kids"
      :key="index"
      class="q-pt-md flex row items-center"
  >
    <div class="q-pa-lg flex col-10 row items-center">
      <div class="flex column col">
        <span class="text-weight-bold">{{kid.first_name + " " + kid.last_name}}</span>
        <span class="text-grey-7">{{kid.phone_number}}</span>
      </div>

      <span class="col text-center text-weight-bold">{{kid.age}}</span>
      <span class="col text-center text-weight-bold">{{kid.type}}</span>
      <span class="col text-center text-weight-bold">{{kid.balance}}</span>
    </div>

    <div class="col flex justify-center items-center text-grey-7">
      <q-btn icon="edit" flat size="12px" @click="dialog_update(kid.phone_number)">
        <q-tooltip>Edit</q-tooltip>
      </q-btn>
      <q-btn icon="delete" flat size="12px" @click="dialog_delete(kid.phone_number)">
        <q-tooltip>Delete</q-tooltip>
      </q-btn>
    </div>

  </q-card>
</template>

<script>
import {store_dashboard} from "@/store/store_dashboard";
import {store_kids} from "@/store/store_kids";
export default {
  name: "DashBoardKidsCardCom",
  setup(){
    const store = store_dashboard()
    const store2 = store_kids()
    return{
      store,
      store2
    }
  },
  methods:{
    dialog_update(phone){
      this.store2.phone = phone
      this.store2.update_dialog = true
    },
    dialog_delete(phone){
      this.store2.phone = phone
      this.store2.delete_dialog = true
    }
  }
}
</script>

<style scoped>

</style>