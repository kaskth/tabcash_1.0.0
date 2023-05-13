<template>
  <div class="q-pa-xl">
    <q-separator/>
    <div class="full-width flex row q-pa-xl" style="min-height: 200px">
      <!--    col1-->

      <div class="col-xs-12 col-md-6 flex column q-gutter-y-sm">
        <span class="text-primary text-weight-bold text-h5">Logo</span>
        <span>Join our community to stay up to date on features and releases.</span>
        <div class="flex row">
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
      <div class="col flex row items-center q-px-xl q-my-xs-lg">
        <div class="col flex column q-gutter-y-sm">
          <span>About Us</span>
          <span>Careers</span>
          <span>F & Q</span>
          <span>Help</span>
        </div>
        <div class="col flex column q-gutter-y-sm">
          <span>Blog</span>
          <span>Plans</span>
          <span>Features</span>
          <span class="xs-hide">What Is New?</span>
        </div>
      </div>

      <!--    col3-->

      <div class="col-auto flex column justify-center items-center">
        <span>Follow Us</span>
        <div class="flex column items-start q-gutter-y-xs">
          <q-btn flat icon="facebook" label="Facebook"/>
          <q-btn flat icon="facebook" label="Instagram"/>
          <q-btn flat icon="facebook" label="Twitter"/>
          <q-btn flat icon="facebook" label="LinkedIn"/>
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