<template>
  <section class="flex row full-width q-px-xs-none q-px-sm-xl " >

    <!--      col1-->

    <div class="col flex justify-center items-center q-pa-xl order-xs-last" >
      <q-img v-if="$q.screen.sm" src="@/assets/images/homeSection8co.png" width="90%"/>
      <q-img v-else src="@/assets/images/homeSection8co.png" width="70%"/>
    </div>

    <!--      col2-->

    <div
        class="col-xs-12 col-sm-6 flex column q-pa-xl justify-center items-xs-center items-sm-start q-gutter-y-md"
        :class="{'text-center': $q.screen.xs}"
    >
      <span class="text-weight-bold">Feature one</span>
      <span class="text-h5 text-weight-bold text-primary">
        Headline highlighting customer results
      </span>
      <span>
        Emphasise time-saving and use numbers to maximise credibility.
      </span>

      <div class="flex row justify-center items-center">
        <div
            v-for="(col,index) in cols"
            :key="index"
            class="flex column col-6 q-pa-md items-xs-center items-sm-start"
        >
          <span class="text-h3 text-weight-bold">{{col.num}}</span>
          <span>{{col.text}}</span>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: "HomeSection6Com",
  data(){
    return{
      cols:[
        {
          num: "10x",
          text: "Increase in productivity"
        },
        {
          num: "300%",
          text: "Return on investment"
        },
        {
          num: "5k+",
          text: "Happy customers"
        },
        {
          num: "100+",
          text: "5-star reviews"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>