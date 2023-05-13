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

    <div v-if="store2.apps.length == 0" class="full-width flex column justify-center items-center text-grey-7 q-pa-xl">
      <q-icon name="self_improvement" size="150px"/>
      <span>You can add an application to the list by pressing Create</span>
    </div>

    <section v-else class="full-width q-gutter-y-md">
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

    <q-dialog
        v-model="store.delete_app_dialog"
        persistent
    >
      <dash-board-developers-delete-app-com/>
    </q-dialog>

  </div>
</template>

<script>
import DashBoardDevelopersCardCom from "@/components/developers/DashBoardDevelopersCardCom.vue";
import {store_developers} from "@/store/store_developers";
import DashBoardDevelopersCom from "@/components/developers/DashBoardDevelopersCom.vue";
import {store_dashboard} from "@/store/store_dashboard";
import DashBoardDevelopersDeleteAppCom from "@/components/developers/DashBoardDevelopersDeleteAppCom.vue";
export default {
  name: "DashBoardDevelopersView",
  components: {DashBoardDevelopersDeleteAppCom, DashBoardDevelopersCom, DashBoardDevelopersCardCom},
  setup(){
    const store = store_developers()
    const store2 = store_dashboard()
    return{
      store,
      store2
    }
  }
}
</script>

<style scoped>

</style>