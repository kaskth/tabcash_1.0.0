<template>
  <div class="flex row">
    <div class="col-xs-12 col-md-6">
      <sign-in-form-com/>
    </div>
    <div class="col">
      <sign-in-image-com class="full-height"/>
    </div>
  </div>
</template>

<script>
import signInFormCom from "@/components/signin/SignInFormCom.vue";
import signInImageCom from "@/components/signin/SignInImageCom.vue";
export default {
  name: "SignInView",
  components:{
    signInImageCom,
    signInFormCom
  }
}
</script>

<style scoped>

</style>