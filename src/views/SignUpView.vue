<template>
  <div class="flex row">
    <div class="col-xs-12 col-md-6 ">
      <sign-up-form-com/>
    </div>
    <div class="col">
      <sign-up-image-com class="full-height"/>
    </div>
  </div>
</template>

<script>
import SignUpFormCom from "@/components/signup/SignUpFormCom.vue";
import SignUpImageCom from "@/components/signup/SignUpImageCom.vue";

export default {
  name: "SignUpView",
  components:{SignUpFormCom,SignUpImageCom}
}
</script>

<style scoped>

</style>