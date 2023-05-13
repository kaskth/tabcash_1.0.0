<template>
  <q-card class="flex column" style="width:800px;height: 350px">

<!--    section1-->

    <section class="col-auto flex column q-pl-xl q-py-lg">
      <span class="t">Hello,</span>
      <span class="text-weight-bold text-h5">{{store.wallet.first_name}}</span>
    </section>

<!--    section2-->

    <section class="col flex row">

<!--      col1-->

      <div class="col flex justify-center items-center">

        <q-card
          style="width: 300px"
          class="flex column q-pa-md bg-grey-10"
        >

          <div class="q-pa-md q-mb-md col flex row justify-between items-center">
            <span class="text-grey-4 text-weight-bold" style="font-size: 18px">{{num}}</span>
            <q-img src="@/assets/images/Mastercard_2019_logo.svg.png" width="40px"/>
          </div>

          <div class="col flex row justify-between items-center q-px-md text-white">
            <div class="flex column text-center">
              <span class="text-grey-5">Balance</span>
              <span class="text-h6">{{store.creditcard.balance}}</span>
            </div>
            <div class="flex column text-center">
              <span class="text-grey-5">cvv</span>
              <span>{{store.creditcard.cvv}}</span>
            </div>
            <div class="flex column text-center">
              <span class="text-grey-5">expiration</span>
              <span>{{store.creditcard.expiration}}</span>
            </div>
          </div>
        </q-card>


      </div>

<!--      col2-->

      <div class="col flex column justify-center q-gutter-y-md">

        <span class="text-uppercase text-grey-8">wallet balance</span>
        <span class="text-h4 text-weight-bold">{{store.wallet.balance}}</span>

        <div class="flex q-gutter-x-md">
          <q-btn
              color="primary"
              label="send money"
              @click="store2.transfer_dialog = true"
          >
            <q-tooltip>to another wallet</q-tooltip>
          </q-btn>
          <q-btn
              outline
              color="primary"
              icon="south"
              @click="store2.deposit_dialog = true"
          >
            <q-tooltip>deposit</q-tooltip>
          </q-btn>
          <q-btn
              outline
              color="primary"
              icon="open_in_new_off"
              @click="store2.withdrawal_dialog = true"
          >
            <q-tooltip>withdraw</q-tooltip>
          </q-btn>
          <q-btn
              outline
              color="primary"
              icon="join_right"
              @click="store2.transfer_smartCard_dialog = true"
          >
            <q-tooltip>Transfer to smart card</q-tooltip>
          </q-btn>
        </div>

      </div>

    </section>

  </q-card>
</template>

<script>
import {store_dashboard} from "@/store/store_dashboard";
import {store_transations} from "@/store/store_transations";
export default {
  name: "DashBoardHelloCom",
  setup(){
    const store = store_dashboard()
    const store2 = store_transations()
    return{
      store,
      store2
    }
  },
  computed:{
    num(){
      var number = this.store.creditcard.card_number;
      var formattedNumber = "";

      for (var i = 0; i < number.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedNumber += " ";
        }
        formattedNumber += number.charAt(i);
      }

      return formattedNumber
    }
  }
}
</script>

<style scoped>

</style>