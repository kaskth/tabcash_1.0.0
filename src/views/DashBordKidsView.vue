<template>
  <div class="full-width q-pa-lg q-gutter-y-md" style="max-width: 800px">
    <section class="flex column justify-center items-center q-gutter-y-md">
      <span class="text-weight-bold text-h4 text-uppercase text-primary">Follow your children</span>
      <span>Create an account for your children and control their actions</span>
    </section>

    <section class="full-width flex row q-gutter-y-md">
      <div class="flex row justify-between items-end full-width">
        <span class="text-h5 text-weight-bold ">Children</span>
        <q-btn
            color="primary"
            label="Create a child wallet"
            @click="store.create_dialog = true"
        />
      </div>
      <q-separator class="full-width"/>
    </section>

    <section class="full-width q-gutter-y-md">
      <div class="full-width flex row text-weight-bold text-grey-8 q-px-lg">
        <span class="col">Name</span>
        <span class="col text-center">Age</span>
        <span class="col text-center">Type</span>
        <span class="col text-center">Price</span>
      </div>
      <dash-board-kids-card-com/>
    </section>

    <q-dialog
        v-model="store.create_dialog"
        persistent
    >
      <dash-board-kids-com/>
    </q-dialog>

  </div>
</template>

<script>
import DashBoardKidsCardCom from "@/components/kids/DashBoardKidsCardCom.vue";
import {store_kids} from "@/store/store_kids";
import DashBoardKidsCom from "@/components/kids/DashBoardKidsCom.vue";

export default {
  name: "DashBordKidsView",
  components: {DashBoardKidsCom, DashBoardKidsCardCom},
  setup(){
    const store = store_kids()
    return{
      store
    }
  }
}
</script>

<style scoped>

</style>