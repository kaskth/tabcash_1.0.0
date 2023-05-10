<template>
  <div class="flex column justify-center items-center full-width" style="min-height: 267px">
    <span class="text-weight-bold">Trusted by the world's best companies</span>
    <div class="flex row justify-center">
      <div v-for="a in 3" :key="a" class="flex row justify-center q-gutter-sm">
        <img src="@/assets/images/1.png" style="height: 70px"/>
        <img src="@/assets/images/2.png" style="height: 70px"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSection2Com"
}
</script>

<style scoped>

</style>