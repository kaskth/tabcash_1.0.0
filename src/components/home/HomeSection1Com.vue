<template>
  <div class="flex row" style="min-height: 680px">

<!--    col 1-->

    <div class="col-xs-12 col-sm-7 flex justify-center items-center">

      <div class="flex column q-pa-xl q-gutter-y-md full-width " style="max-width: 90%">

        <div
            class="text-h2 text-weight-bold text-primary flex row justify-center items-center"
            :class="{'text-h4': $q.screen.xs || $q.screen.sm}"
        >
          <span :class="{'text-center': $q.screen.xs }">"Take Control of Your Money with e-Wallet"</span>
        </div>

        <div class="flex column items-xs-center items-sm-start">
          <span>A smart and secure way to manage your finances.</span>
          <span>Sign up now and experience the convenience of our e-wallet.</span>
        </div>


        <div class="flex row justify-xs-center justify-sm-start q-gutter-x-md">
          <q-btn
              color="primary"
              label="get started"
              @click="$router.push('/signup')"
          />
          <q-btn
              outline
              color="primary"
              label="learn more"
              @click="$router.push('/signup')"
          />
        </div>

      </div>

    </div>



<!--    col2-->

    <div class="col flex justify-center items-center q-pa-md">
      <q-img v-if="$q.screen.xs" src="@/assets/images/homeSection1.png" width="50%"/>
      <q-img v-else-if="$q.screen.sm" src="@/assets/images/homeSection1.png" width="80%"/>
      <q-img v-else src="@/assets/images/homeSection1.png" width="75%"/>
    </div>


  </div>
</template>

<script>
export default {
  name: "HomeSection1Com"
}
</script>

<style scoped>

</style>