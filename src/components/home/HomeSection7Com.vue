<template>
  <div class="flex full-width column justify-center items-center q-pa-xl">
    <span
        class="text-weight-bold text-primary text-h3"
        :class="{'text-center':$q.screen.xs}"
    >Download Our Application</span>
    <div class="flex row justify-center items-center q-gutter-md q-pt-xl">
      <q-img src="@/assets/images/home_google.png" width="300px"/>
      <q-img src="@/assets/images/home_app.png" width="300px"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSection7Com"
}
</script>

<style scoped>

</style>