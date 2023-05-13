<template>
  <div class="q-pa-lg q-gutter-y-md">
    <dash-board-hello-com/>
    <dash-board-history-com/>

    <q-dialog
        v-model="store.transfer_dialog"
        persistent
    >
      <dash-board-transfer-com/>
    </q-dialog>

    <q-dialog
        v-model="store.deposit_dialog"
        persistent
    >
      <dash-board-deposit-com/>
    </q-dialog>

    <q-dialog
        v-model="store.withdrawal_dialog"
        persistent
    >
      <dash-board-withdrawal-com/>
    </q-dialog>

    <q-dialog
        v-model="store.transfer_smartCard_dialog"
        persistent
    >
      <dash-bord-transfer-to-smart-card/>
    </q-dialog>

  </div>
</template>

<script>
import DashBoardHelloCom from "@/components/dashboard/DashBoardHelloCom.vue";
import DashBoardHistoryCom from "@/components/dashboard/DashBoardHistoryCom.vue";
import DashBoardTransferCom from "@/components/transfer/DashBoardTransferCom.vue";
import {store_transations} from "@/store/store_transations";
import DashBoardDepositCom from "@/components/deposit/DashBoardDepositCom.vue";
import DashBoardWithdrawalCom from "@/components/withdrawal/DashBoardWithdrawalCom.vue";
import DashBordTransferToSmartCard from "@/components/transfer/DashBordTransferToSmartCard.vue";

export default {
  name: "DashBoardHomeView",
  components: {
    DashBordTransferToSmartCard,
    DashBoardWithdrawalCom, DashBoardDepositCom, DashBoardTransferCom, DashBoardHistoryCom, DashBoardHelloCom},
  setup(){
    const store = store_transations()
    return{
      store
    }
  }
}
</script>

<style scoped>

</style>