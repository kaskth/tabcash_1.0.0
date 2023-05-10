<template>
  <q-card
      v-for="(kid,index) in store.kids"
      :key="index"
      class="q-pa-lg flex row items-center"
  >
    <div class="flex column col">
      <span class="text-weight-bold">{{kid.first_name + " " + kid.last_name}}</span>
      <span class="text-grey-7">{{kid.phone_number}}</span>
    </div>

    <span class="col text-center text-weight-bold">{{kid.age}}</span>
    <span class="col text-center text-weight-bold">{{kid.type}}</span>
    <span class="col text-center text-weight-bold">{{kid.balance}}</span>

  </q-card>
</template>

<script>
import {store_dashboard} from "@/store/store_dashboard";
export default {
  name: "DashBoardKidsCardCom",
  setup(){
    const store = store_dashboard()
    return{
      store
    }
  }
}
</script>

<style scoped>

</style>