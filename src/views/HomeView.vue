<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-white text-white">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold cursor-pointer text-primary" @click="$router.push('/')">
          <q-avatar square>
            <q-icon name="account_balance_wallet" size="40px"/>
          </q-avatar>
          Tab Cash
        </q-toolbar-title>
        <div
          class="q-gutter-x-md"
        >
          <q-btn
            label="log in"
            color="primary"
            outline
            @click="$router.push('/signin')"
          />
          <q-btn
              label="get started"
              color="primary"
              @click="$router.push('/signup')"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="full-width flex justify-center items-center">
      <div style="max-width: 1400px">
        <home-section1-com/>
        <home-section2-com/>
        <home-section3-com/>
        <home-section4-com/>
        <home-section5-com
          v-for="(data,index) in sestion5"
          :key="index"
          :data="data"
        />
        <home-section6-com/>
        <home-section7-com/>
        <home-section8-com/>
        <home-section9-com/>
        <home-section10-com/>
      </div>
    </q-page-container>

  </q-layout>
</template>

<script>
import HomeSection1Com from "@/components/home/HomeSection1Com.vue";
import HomeSection2Com from "@/components/home/HomeSection2Com.vue";
import HomeSection3Com from "@/components/home/HomeSection3Com.vue";
import HomeSection4Com from "@/components/home/HomeSection4Com.vue";
import HomeSection5Com from "@/components/home/HomeSection5Com.vue";
import HomeSection6Com from "@/components/home/HomeSection6Com.vue";
import HomeSection7Com from "@/components/home/HomeSection7Com.vue";
import HomeSection8Com from "@/components/home/HomeSection8Com.vue";
import HomeSection9Com from "@/components/home/HomeSection9Com.vue";
import HomeSection10Com from "@/components/home/HomeSection10Com.vue";

export default {
  name: "HomeView",
  components: {
    HomeSection10Com,
    HomeSection9Com,
    HomeSection8Com,
    HomeSection7Com,
    HomeSection6Com, HomeSection5Com, HomeSection4Com, HomeSection3Com, HomeSection2Com, HomeSection1Com},
  data(){
    return{
      sestion5:[
        {
          image: require('../assets/images/homeSection5co.png'),
          title: "Simplify Your Finances with Secure and Convenient Digital Wallet",
          text: "e-Wallet is a secure and easy-to-use digital wallet that allows you to manage your finances all in one place. With e-Wallet, you can securely store your money, manage your expenses, and make online purchases hassle-free.",
          com: "\"I love how easy it is to manage my expenses with e-wallet. It's like having a digital wallet in my pocket!\"",
          avatar: require('../assets/images/user.jpg'),
          name: 'Mohamed Khaled',
          order: true
        },
        {
          image: require('../assets/images/homeSection6.jpg'),
          title: "Control Your Spending with Smart Card for Online Purchases",
          text: "The Smart Card is a unique feature of e-Wallet that allows you to control your spending when making online purchases. By setting a specific amount of money on the Smart Card, you can avoid overspending and enjoy a more secure online shopping experience.",
          com: "\"The smart card is a game-changer! I can make online purchases without worrying about overspending.\"",
          avatar: require('../assets/images/user3.jpg'),
          name: 'Ahmed Mohamed'
        },
        {
          image: require('../assets/images/homeSection7.jpg'),
          title: "Teach Your Kids About Money Management with Kids Smart Card",
          text: "The Kids Smart Card is a valuable tool for teaching your children about money management. With their own Smart Card, your kids can learn to manage their money responsibly while staying within a predetermined spending limit that you set.",
          com: "\"Teaching my kids how to manage money responsibly has never been easier. The kids smart card is a great tool.\"",
          avatar: require('../assets/images/user.jpg'),
          name: 'Hussein Mohamed',
          order: true
        },
        {
          image: require('../assets/images/homeSection7co.png'),
          title: "Gain Insights and Take Control of Your Finances with the Dashboard",
          text: "The Dashboard is a powerful tool that provides valuable insights into your finances. You can view your account balance, transaction history, and spending patterns all in one place. With this information, you can take control of your finances and make informed decisions about your money.",
          com: "The dashboard is so user-friendly. I can see my account balance and transactions at a glance.\"",
          avatar: require('../assets/images/user2.jpg'),
          name: 'Yusra Mahmoud'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>