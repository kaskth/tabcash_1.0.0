<template>
  <div class="full-width flex column justify-center items-center q-gutter-y-lg q-pa-xl">
    <span class="text-h3 text-primary text-weight-bold">Frequently asked questions</span>
    <span class="text-center" style="max-width: 600px">
      Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.
    </span>


    <q-list class="full-width q-pa-md" style="max-width: 700px">
      <q-expansion-item
          v-for="(exp,index) in exps"
          :key="index"
          :label="exp.ask"
      >
        <q-card>
          <q-card-section>
            {{exp.answer}}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>

    <span class="text-weight-bold text-h5 text-primary">Still have questions?</span>

    <q-btn
        outline
        color="primary"
        label="contact us"
        class="q-mb-xl"
        rounded
    />
  </div>
</template>

<script>
export default {
  name: "HomeSection8Com",
  data(){
    return{
      exps:[
        {
          ask: "Can I link multiple bank accounts to my e-wallet?",
          answer: "The ability to link multiple bank accounts to an e-wallet depends on the specific e-wallet service you are using. While some e-wallets may allow you to link multiple bank accounts, others may have limitations or only support a single bank account."
        },
        {
          ask: "Can I use e-wallet to make online purchases?",
          answer: "Yes, e-wallets are commonly used for making online purchases. E-wallets provide a convenient and secure way to make payments for goods and services over the internet. When you link your e-wallet to your bank account or add funds to your e-wallet, you can use those funds to complete online transactions."
        },
        {
          ask: "How do I withdraw money from my e-wallet?",
          answer: "Bank Transfer: Many e-wallets allow you to transfer funds from your e-wallet to your linked bank account. To do this, you typically need to initiate a withdrawal or transfer request within the e-wallet app or website. Provide the necessary details, such as the amount you want to withdraw and the destination bank account, and follow the instructions to complete the transfer. The time it takes for the funds to reach your bank account can vary depending on the e-wallet and the banking system."
        },
        {
          ask: "What is Tap Cash?",
          answer: "The \"Tap Cash\" application is an electronic platform that enables users to make payments and money transfers via a smartphone. TapCash provides an easy-to-use and convenient interface for users, making it easier for them to manage their electronic money and conduct transactions quickly and easily."
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>