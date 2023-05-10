<template>
  <div class="full-width flex items-center column" style="height: 100vh">
    <div
      class="col-auto full-width q-pa-md q-pl-xl text-primary"
    >
      TabCash
    </div>
<!--form-->
    <q-form
        class="col flex column items-center justify-center q-gutter-y-md full-width q-px-md"
        style="max-width: 500px"
        @submit="eve_sms()"
        greedy
    >
      <span class="text-h4 text-primary">Sign In</span>
      <span>TapCash offers free registration for users</span>
      <div
          class="full-width flex row"
      >

      </div>

      <q-input
          v-model="phone_namber"
          rounded
          outlined
          maxlength="11"
          label="Phone Number"
          class="full-width"
          lazy-rules
          :rules="phone_namber_rules"
      />

      <q-input
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          rounded
          outlined
          label="Password"
          class="full-width"
          lazy-rules
          :rules="password_rules"
      >
        <template v-slot:append>
          <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-btn
          rounded
          class="full-width"
          label="Sign In"
          color="primary"
          type="submit"
      />
      <span>Dont have an account? <a class="text-primary cursor-pointer" @click="$router.push('/signup')">Sign Up</a></span>
    </q-form>
<!--    footer-->
    <div
        class="col-auto full-width q-pb-xs q-pl-xl"
    >
      <p>&copy; {{new Date().getFullYear()}} Tab Cash</p>
    </div>

    <q-dialog
        v-model="dialog"
        persistent
    >
      <q-card>
        <q-card-section
            class="flex column text-center"
        >
          <div class="full-width flex justify-end">
            <q-btn flat icon="close" v-close-popup/>
          </div>
          <span class="text-weight-bold text-h5 q-mb-md">Pass Verification</span>
          <span class="q-px-lg q-mb-md">A verification message has been sent to the phone number.</span>
          <q-form
              @submit="eve_signin()"
              greedy
          >
            <q-input
                v-model="validation_code"
                outlined
                label="Validation code"
                class="full-width q-pb-lg"
                lazy-rules
                maxlength="6"
                :rules="validation_code_rules"
            />
            <q-btn
                class="full-width"
                label="Sign In"
                color="primary"
                type="submit"
            />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
import {ref} from 'vue'
import {signin} from "@/action/authentications";
import {sms_verification_v2} from "@/action/messaging";

export default {
  name: "SignInFormCom",
  setup(){
    return{
      isPwd: ref(true),
      dialog: ref(false),
      phone_namber: ref(null),
      password: ref(null),
      validation_code: ref(null),
      phone_namber_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^01[0-2|5]{1}[0-9]{8}$/.test(val) || 'Please enter a valid phone number'
      ],
      password_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val) || 'It must consist of uppercase and lowercase letters, numbers and signs, and it must be at least 8 characters long'
      ],
      validation_code_rules:[
        val => val && val.length > 0 || 'Please type something',
        val => /^[0-9]{6}$/.test(val) || 'Please enter a valid format'
      ]
    }
  },
  methods:{
    async eve_signin(){
      await signin({
        phone_number: this.phone_namber,
        password: this.password,
        validation_code: this.validation_code
      })
    },
    async eve_sms(){
      if (await sms_verification_v2(this.phone_namber))this.dialog = true
    }
  }
}
</script>

<style scoped>

</style>