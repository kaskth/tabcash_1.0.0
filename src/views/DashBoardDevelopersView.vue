<template>
  <div class="full-width q-pa-lg q-gutter-y-md" style="max-width: 800px">
    <section class="flex column justify-center items-center q-gutter-y-md">
      <span class="text-weight-bold text-h4 text-uppercase text-primary">Use our payment gateway</span>
      <span>Add the tap Cash payment method to your online store or real store</span>
    </section>

    <section class="full-width flex row q-gutter-y-md">
      <div class="flex row justify-between items-end full-width">
        <span class="text-h5 text-weight-bold ">Applications</span>
        <q-btn
            color="primary"
            label="Add an application"
            @click="store.apps_dialog = true"
        />
      </div>
      <q-separator class="full-width"/>
    </section>

    <section class="full-width q-gutter-y-md">
      <div class="full-width flex row text-weight-bold text-grey-8 q-px-lg">
        <span class="col">Name</span>
        <span class="col ">client_id</span>
        <span class="col ">client_secret</span>
      </div>
      <dash-board-developers-card-com/>
    </section>

    <q-dialog
        v-model="store.apps_dialog"
        persistent
    >
      <dash-board-developers-com/>
    </q-dialog>

  </div>
</template>

<script>
import DashBoardDevelopersCardCom from "@/components/developers/DashBoardDevelopersCardCom.vue";
import {store_developers} from "@/store/store_developers";
import DashBoardDevelopersCom from "@/components/developers/DashBoardDevelopersCom.vue";

export default {
  name: "DashBoardDevelopersView",
  components: {DashBoardDevelopersCom, DashBoardDevelopersCardCom},
  setup(){
    const store = store_developers()
    return{
      store
    }
  }
}
</script>

<style scoped>

</style>