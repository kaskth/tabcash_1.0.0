<template>
  <div class="flex row full-width q-px-xl">

<!--    sisction1-->
    <section class="flex row full-width q-px-xl" >

<!--      col1-->

      <div class="col flex justify-center q-pa-xl order-xs-last" :class="{'order-md-first': data.order}">
        <q-img :src="data.image"/>
      </div>

<!--      col2-->

      <div class="col-xs-12 col-md-6 flex column q-pa-xl justify-center q-gutter-y-md">
        <span class="text-weight-bold">Feature one</span>
        <span class="text-h5 text-weight-bold text-primary">
          {{data.title}}
        </span>
        <span>
          {{data.text}}
        </span>
        <q-btn
            style="width: 150px"
            outline
            label="learn more"
            color="primary"
        />
      </div>

    </section>

    <!--    sisction2-->

    <section class="flex full-width column justify-center items-center q-gutter-y-md" style="min-height: 380px">
      <q-rating
          model-value="5"
          size="1.5em"
          color="yellow"
          icon="create"
          icon-selected="star"
      />
      <span class="text-center text-weight-bold" style="width: 400px">
        {{data.com}}
      </span>
      <div class="flex row justify-center items-center q-gutter-x-md">
        <q-avatar >
          <q-img :src="data.avatar"/>
        </q-avatar>
        <span>{{data.name}}</span>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "HomeSection5Com",
  props:{
    data: Object
  }
}
</script>

<style scoped>

</style>