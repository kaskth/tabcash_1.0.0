<template>
  <div class="full-width flex items-center column" style="min-height: 100vh">

    <div class="col-auto full-width q-pa-md q-pl-xl text-primary">
      TabCash
    </div>

    <!--form-->
    <q-form
        class="col flex column items-center justify-center q-gutter-y-md full-width q-px-md"
        style="max-width: 500px"
        @submit="eve_sms()"
        greedy
    >
      <span class="text-h4 text-primary">Sign Up</span>
      <span>TapCash offers free registration for users</span>
      <div
          class="full-width flex row"
      >
        <q-input
            v-model="first_name"
            rounded
            outlined
            label="First Name"
            class="col q-mr-md"
            lazy-rules
            :rules="first_name_rules"
        />
        <q-input
            v-model="last_name"
            rounded
            outlined
            label="Last Name"
            class="col"
            lazy-rules
            :rules="last_name_rules"
        />
      </div>

      <q-input
          v-model="phone_namber"
          maxlength="11"
          rounded
          outlined
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

      <q-input
          v-model="national_id"
          maxlength="11"
          rounded
          outlined
          label="National ID"
          class="full-width"
          lazy-rules
          :rules="national_id_rules"
      />

      <q-input
          v-model="expiration_date"
          outlined
          rounded
          mask="####-##-##"
          label="Expiration Date"
          lazy-rules
          :rules="expiration_date_rules"
          class="full-width"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="expiration_date"  mask="YYYY-MM-DD">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>


      <q-input
          v-model="data_of_dirth"
          outlined
          rounded
          label="Date Of Dirth"
          mask="####-##-##"
          lazy-rules
          :rules="data_of_dirth_rules"
          class="full-width"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="data_of_dirth" mask="YYYY-MM-DD">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-btn
          rounded
          class="full-width"
          label="Sign Up"
          color="primary"
          type="submit"
      />
      <span>Already have an account <a class="text-primary cursor-pointer" @click="$router.push('/signin')">Log In</a></span>
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
              @submit="eve_signup()"
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
                label="Sign Up"
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
import {signup} from "@/action/authentications";
import {sms_verification} from "@/action/messaging";

export default {
  name: "SignUpFormCom",
  setup(){
    return{
      isPwd: ref(true),
      dialog: ref(false),
      first_name: ref(null),
      last_name: ref(null),
      phone_namber: ref(null),
      password: ref(null),
      national_id: ref(null),
      expiration_date: ref(null),
      data_of_dirth: ref(null),
      validation_code: ref(null),
      first_name_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^[a-zA-Z]{3,45}$/.test(val) || 'Please enter a natural name'
      ],
      last_name_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^[a-zA-Z]{3,45}$/.test(val) || 'Please enter a natural name'
      ],
      phone_namber_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^01[0-2|5]{1}[0-9]{8}$/.test(val) || 'Please enter a valid phone number'
      ],
      password_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val) || 'It must consist of uppercase and lowercase letters, numbers and signs, and it must be at least 8 characters long'
      ],
      national_id_rules:[
        val => val && val.length > 0 || 'Please type something',
        val => /^[0-9]{14}$/.test(val) || 'Please enter a valid national number'
      ],
      expiration_date_rules:[
        val => val && val.length > 0 || 'Please type something',
        val => /^(\d{4})-(\d{2})-(\d{2})$/.test(val) || 'Please enter a valid format'
      ],
      data_of_dirth_rules:[
        val => val && val.length > 0 || 'Please type something',
        val => /^(\d{4})-(\d{2})-(\d{2})$/.test(val) || 'Please enter a valid format'
      ],
      validation_code_rules:[
        val => val && val.length > 0 || 'Please type something',
        val => /^[0-9]{6}$/.test(val) || 'Please enter a valid format'
      ]
    }
  },
  methods:{
    async eve_signup(){
      await signup({
        phone_number: this.phone_namber,
        first_name: this.first_name,
        last_name: this.last_name,
        password: this.password,
        national_ID: this.national_id,
        expiration_date: this.expiration_date,
        date_of_birth: this.data_of_dirth,
        validation_code: this.validation_code
      })
    },
    async eve_sms(){
      await sms_verification(this.phone_namber)
      this.dialog = true
    }
  }
}
</script>

<style scoped>

</style>