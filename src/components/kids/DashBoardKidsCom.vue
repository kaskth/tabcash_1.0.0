<template>
  <q-card
      class="q-pa-lg full-width"
      style="max-width: 350px"
  >
    <q-form greedy class="flex column justify-center q-gutter-y-md">
      <div class="full-width text-center flex column q-gutter-y-xs">
        <span class="text-weight-bold text-h4 text-uppercase text-primary">Create A Child Wallet</span>
        <span class="text-weight-bold text-grey-8">Create an account for your children <br> and rule them</span>
      </div>

      <q-tab-panels
          v-model="tap"
      >

        <q-tab-panel
            name="1"
        >
          <q-form
            greedy
            @submit="tap = '2'"
            class="q-gutter-y-lg flex column"
          >
            <q-input
                v-model="phone_number"
                outlined
                label="Phone Number"
                type="phone"
                maxlength="11"
                lazy-rules
                :rules="phone_number_rules"
            />
            <q-input
                v-model="first_name"
                outlined
                label="First Name"
                maxlength="11"
                :rules="first_name_rules"
            />
            <q-input
                v-model="last_name"
                outlined
                label="Last Name"
                maxlength="11"
                :rules="last_name_rules"
            />
            <q-input
                v-model="password"
                :type="isPwd ? 'password' : 'text'"
                outlined
                label="password for the child"
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
                color="primary"
                label="Next"
                type="submit"
                class="full-width"
            />
            <q-btn
                color="primary"
                label="close"
                class="full-width"
                outline
                v-close-popup
            />
          </q-form>
        </q-tab-panel>

        <q-tab-panel
          name="2"
        >
          <q-form greedy @submit="create()" class="q-gutter-y-lg flex column">

            <q-input
                v-model="expense"
                outlined
                label="expense"
                maxlength="11"
                :rules="expense_rules"
            />
            <q-select
                v-model="age"
                outlined
                label="Age"
                :options="age_options"
                :rules="age_rules"
            />
            <q-select
                v-model="type"
                outlined
                label="Type"
                :options="type_options"
                maxlength="11"
                :rules="type_rules"
            />
            <q-select
                v-model="categorys"
                :options="categorys_options"
                outlined
                multiple
                label="categorys"
                :rules="categorys_rules"
            />
            <q-btn
                color="primary"
                label="transfer"
                type="submit"
                class="full-width"
            />
            <q-btn outline label="back" color="green-5" class="full-width" @click="tap = '1'" v-close-popup/>

          </q-form>
        </q-tab-panel>

      </q-tab-panels>
    </q-form>
  </q-card>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "DashBoardKidsCom",
  setup(){
    return{
      isPwd: ref(true),
      tap: ref("1"),
      phone_number: ref(null),
      first_name: ref(null),
      last_name: ref(null),
      password: ref(null),
      age: ref(null),
      type: ref(null),
      expense: ref(null),
      categorys: ref([]),
      age_options: [
        '10', '11', '12', '13', '14','15','16'
      ],
      type_options: [
        'daily', 'weekly', 'monthly', 'none'
      ],
      categorys_options: [
        'Clothes and Fashion','Electronics','Furniture Home and Decoration','Beauty and Personal Care','Household Tools and Equipment','Games and Electronic Games','Books and Publications','Sports and Fitness','Jewelry and Watches','Food and Drinks','Health and Wellness','Games and Hobbies','Travel and Tourism','Pets and Their Supplies','Gifts and Special Occasions'
      ],
      first_name_rules:[
        val => val && val.length > 0 || 'Please type something',
        val => /^[a-zA-Z]+$/.test(val) || 'Please enter a valid phone number'
      ],
      last_name_rules:[
        val => val && val.length > 0 || 'Please type something',
        val => /^[a-zA-Z]+$/.test(val) || 'Please enter a valid phone number'
      ],
      age_rules:[
        val => val && val.length > 0 || 'Please type something'
      ],
      type_rules:[
        val => val && val.length > 0 || 'Please type something'
      ],
      expense_rules:[
        val => val && val.length > 0 || 'Please type something',
        val => /^[1-9]\d*$/.test(val) || 'Please enter a valid phone number'
      ],
      phone_number_rules:[
        val => val && val.length > 0 || 'Please type something',
        val => /^01[0-2|5]{1}[0-9]{8}$/.test(val) || 'Please enter a valid phone number'
      ],
      password_rules: [
        val => val && val.length > 0 || 'Please type something',
        val => /^[a-zA-Z0-9]{8,45}$/.test(val) || 'Check the format'
      ],
      categorys_rules:[
        val => val && val.length > 0 || 'Please type something'
      ],
    }
  },
  methods:{
    create(){

    }
  }
}
</script>

<style scoped>

</style>