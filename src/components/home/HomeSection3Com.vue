<template>
  <div class="flex row q-px-xl" >

<!--    col1-->
    <div class="col-xs-12 col-md-6 flex column q-pa-xl justify-start items-xs-center items-md-start q-gutter-y-md">
      <span class="text-weight-bold">How it works</span>
      <span
          class="text-h3 text-weight-bold text-primary"
          :class="{'text-h5': $q.screen.xs || $q.screen.sm,'text-center':$q.screen.xs || $q.screen.sm}"
      >
        "Revolutionize the Way You Manage Your Money with our e-Wallet: Store, Spend, and Transfer Funds Safely and Easily"
      </span>
      <q-btn
          style="width: 150px"
          outline
          label="learn more"
        color="primary"
      />
    </div>


<!--    col1-->
    <div class="col q-pa-xl flex justify-center">
      <q-img v-if="$q.screen.xs" src="@/assets/images/homeSection3.png" width="100%"/>
      <q-img v-else-if="$q.screen.sm" src="@/assets/images/homeSection3.png" width="70%"/>
      <q-img v-else src="@/assets/images/homeSection3.png" />
    </div>

  </div>
</template>

<script>
export default {
  name: "HomeSection3Com"
}
</script>

<style scoped>

</style>