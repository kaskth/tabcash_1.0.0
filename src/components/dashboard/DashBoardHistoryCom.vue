<template>
  <q-card
      class="q-pa-lg"

  >
    <div class="flex row justify-between text-h5">
      <span>Balance</span>
      <span class="text-weight-bold">{{store.history.balance}}</span>
    </div>

    <div>
      <span class="text-grey-8" style="font-size: 16px">Transations</span>
      <q-separator/>

<!--      Transation card-->

      <div v-if="store.history.transations.length == 0" class="q-pa-lg full-width flex column justify-center items-center text-grey-7">
        <q-icon name="change_circle" size="70px"/>
        <span class="text-weight-bold">You can perform some Transactions to show the details</span>
      </div>

      <div
          v-else
          v-for="(tran,index) in store.history.transations"
          :key="index"
      >
        <div class="full-width flex row q-py-md justify-center items-center">
          <div class="col-auto q-pa-sm">
            <q-icon v-if="tran.type == 'deposit'" name="add_circle_outline" size="30px" color="primary"/>
            <q-icon v-else-if="tran.type == 'withdrawal'" name="change_circle" size="30px" color="yellow"/>
            <q-icon v-else name="remove_circle_outline" size="30px" color="red"/>
          </div>

          <div class="col flex column">
            <span class="text-weight-bold">{{tran.description}}</span>
            <span class="text-grey-7">{{tran.date.slice(0,10) + " " + tran.date.slice(11,19)}}</span>
          </div>

          <div class="col-auto flex column items-center">
            <span class="text-weight-bold">{{tran.amount}}</span>
            <span class="text-uppercase text-grey-7">{{tran.type}}</span>
          </div>
        </div>
        <q-separator class="full-width"/>
      </div>

      <!--      Transation card end-->

    </div>

  </q-card>
</template>

<script>
import {store_dashboard} from "@/store/store_dashboard";
export default {
  name: "DashBoardHistoryCom",
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