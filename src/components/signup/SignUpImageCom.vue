<template>
  <div id="col" class="flex justify-center items-center">
    <q-carousel
        id="carousel"
        v-model="slide"
        swipeable
        animated
        navigation
        arrows
        infinite
        autoplay
        transition-prev="slide-right"
        transition-next="slide-left"
        height="300px"
        class="full-width text-white q-mp-xl"
    >
      <q-carousel-slide
          v-for="(com,index) in coms"
          :key="index"
          :name="index + 1"
          class="column no-wrap flex-center"
      >
        <q-rating
            max="5"
            size="1.5em"
            color="yellow"
            model-value="6"
            icon="star_border"
            icon-selected="star"
            icon-half="star_half"
            no-dimming
        />
        <div class="q-mt-md text-center text-weight-bold q-mb-md" style="min-width: 300px;max-width: 450px">
          {{com.text}}
        </div>
        <div>
          <q-avatar size="40px">
            <q-img :src="com.image" />
          </q-avatar>
          <span class="q-pl-md text-white" >{{com.name}}</span>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "SignUpImageCom",
  data(){
    return {
      slide:ref(1),
      coms: [
        {
          text: "TabCash features an attractive and easy-to-use user interface, which makes money management a real pleasure.",
          name: "Mohamed Khaled",
          image: require('../../assets/images/user.jpg')
        },
        {
          text: "TabCash features an attractive and easy-to-use user interface, which makes money management a real pleasure.",
          name: "Ahmed Mohamed",
          image: require('../../assets/images/user.jpg')
        },
        {
          text: "TabCash's report export feature makes it easy for me to review my spending and expense pattern over a specific period of time and take improvement actions.",
          name: "Hussein Mohamed",
          image: require('../../assets/images/user.jpg')
        },
      ]
    }
  }
}
</script>

<style scoped>
#col{
  background-image: url("../../assets/images/Sign Up.jpg")!important;
  background-position: center !important;
  background-size: cover !important;
}
#carousel{
  background-color: rgba(0,0,0,0)!important;
}
</style>