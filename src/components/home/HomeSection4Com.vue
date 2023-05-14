<template>
  <div class="flex column justify-center items-center q-pa-xl q-gutter-y-md">

    <div class="flex column justify-center items-center q-gutter-y-md" style="max-width: 500px">
      <span class="text-weight-bold">Main feature</span>
      <span
          class="text-h4 text-center text-weight-bold text-primary"
          :class="{'text-h5': $q.screen.xs}"
      >
        The Smart and Secure Way to Manage Your Money
      </span>
      <span class="text-center">The Transfer and Withdraw feature of e-Wallet allows you to easily transfer money to other e-Wallet users or withdraw funds to your bank account. With just a few clicks, you can move money around and have access to your funds whenever you need them.</span>
      <q-btn
          outline
          color="primary"
          label="learn more"
      />
    </div>

    <div class="full-width flex justify-center">
      <q-img v-if="$q.screen.xs" src="@/assets/images/homeSection4.png" width="80%"/>
      <q-img v-else src="@/assets/images/homeSection4.png" width="70%"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSection4Com"
}
</script>

<style scoped>

</style>