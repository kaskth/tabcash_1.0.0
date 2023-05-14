<template>
  <div class="q-pa-xl">
    <q-separator/>
    <div class="full-width flex justify-between items-center column-xs row-md q-pa-xl">
      <!--    col1-->

      <div class="col-xs-12 col-md-6 flex column q-gutter-y-sm">
        <span class="text-primary text-weight-bold text-h5">
           <q-avatar square>
            <q-icon name="account_balance_wallet" size="40px"/>
          </q-avatar>
          Tab Cash
        </span>
        <span class="q-mb-md">Join our community to stay up to date on features and releases.</span>
        <div class="flex column-xs row-sm q-gutter-xs-y-md q-my-md">
          <q-input
              class="col-9 q-pr-md"
              rounded
              outlined
              label="Enter your email"
          />
          <q-btn
              class="col"
              rounded
              outline
              label="Subscribe"
              color="primary"
          />
        </div>
        <span>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</span>
      </div>

      <!--    col2-->
      <div class="col full-width flex row items-start q-px-ms-xl q-my-xs-lg">
        <div class="col flex column items-center q-gutter-y-sm">
          <span>About Us</span>
          <span>Careers</span>
          <span>F & Q</span>
          <span>Help</span>
        </div>
        <div class="col flex column q-gutter-y-sm items-center">
          <span>Blog</span>
          <span>Plans</span>
          <span>Features</span>
          <span class="xs-hide">What Is New?</span>
        </div>
        <div class="col flex column q-gutter-y-sm items-center">
          <span class="text-weight-bold">Follow Us</span>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Twitter</span>
          <span>LinkedIn</span>
        </div>
      </div>

      <q-separator/>
    </div>
    <q-separator/>
  </div>

</template>

<script>
export default {
  name: "HomeSection9Com"
}
</script>

<style scoped>

</style>