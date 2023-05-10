<template>
  <div class="flex row" style="min-height: 680px">

<!--    col 1-->

    <div class="col-xs-12 col-md-7 flex justify-center">
      <div class="flex column full-width justify-center items-xs-center items-md-start  q-pa-xl q-gutter-y-md">
        <span class="text-h2 text-weight-bold text-primary" >"Take Control of Your Money with e-Wallet"</span>
        <span style="font-size: 16px">A smart and secure way to manage your finances. <br/> Sign up now and experience the convenience of our e-wallet.</span>
        <div class="flex row q-gutter-x-md">
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
      <q-img src="@/assets/images/homeSection1.png" width="400px"/>
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