<template>
  <div class="margin-bottom shadow-border">
    <hero-banner v-bind:headline="headline"/>
    <div class="container">
      <div class="form login">
        <form action="#" @submit.prevent="submit">
          <h1 class="m-3">Sign Up</h1>
          <!-- first and last name -->
          <input
            type="text"
            class="firstname"
            :class="{'form-group--error':$v.firstname.$error }"
            v-model="firstname"
            placeholder="first name"
          >
          <div class="firstnameError" v-if="$v.firstname.$error">
            <p class="error" v-if="!$v.firstname.required">First name is required</p>
          </div>
          <input
            type="text"
            class="lastname"
            :class="{'form-group--error':$v.lastname.$error }"
            v-model="lastname"
            placeholder="last name"
          >
          <div class="lastnameError" v-if="$v.lastname.$error">
            <p class="error" v-if="!$v.lastname.required">Last name is required</p>
          </div>
          <!-- username -->
          <input
            type="text"
            class="username form_input"
            :class="{'form-group--error':$v.username.$error }"
            v-model="username"
            placeholder="username"
          >
          <div v-if="$v.username.$error">
            <p class="error" v-if="!$v.username.required">Username is required</p>
          </div>
          <!-- email -->
          <input
            class="email"
            :class="{'form-group--error':$v.email.$error }"
            type="text"
            v-model="email"
            placeholder="email"
          >
          <div v-if="$v.email.$error">
            <p class="error" v-if="!$v.email.required">Email is required</p>
            <p class="error" v-if="!$v.email.email">Email is no valid</p>
          </div>
          <!-- passwords -->
          <input
            type="password"
            class="password"
            :class="{'form-group--error':$v.password.$error }"
            v-model="password"
            placeholder="password"
            @keyup="moreLeft(password)"
          >
          <div v-if="$v.password.$error">
            <p class="error" v-if="!$v.password.required">Password is required</p>
          </div>
          <p
            v-if="leftChars <= 6"
            class="infoMoreChar"
          >You have used {{leftChars}} characters. Minimum is {{$v.password.$params.minLength.min}}</p>
          <input
            type="password"
            class="repeatPassword"
            :class="{'form-group--error':$v.repeatPassword.$error }"
            v-model="repeatPassword"
            placeholder="repeat password"
          >
          <div v-if="$v.repeatPassword.$error">
            <p class="error" v-if="!$v.repeatPassword.required">Repeat Password is required</p>
            <p class="error" v-if="!$v.repeatPassword.sameAs">Passwords must be identical</p>
          </div>
          <p v-if="feedback !== null" class="error">{{feedback}}</p>
          <button type="submit" class="btn btn-success m-3">Sign Up</button>
          <div class="pb-4">
            <span>
              Or go back to
              <router-link to="/login">login.</router-link>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";
import Banner from "@/components/banner/Banner.vue";
export default {
  components: {
    "hero-banner": Banner
  },
  data() {
    return {
      headline: "Registration",
      leftChars: 0,
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
      repeatPassword: "",
      bio: "",
      img: ""
    };
    // return{

    //     headline: 'Registration',
    //     leftChars: 0,
    //     username: 'edvin',
    //     password: '1234567',
    //     firstname: 'struja',
    //     lastname:'strujic',
    //     email:'edvin@gmail.com',
    //     repeatPassword:'1234567',
    // }
  },
  validations: {
    username: { required },
    password: { required, minLength: minLength(6) },
    firstname: { required },
    lastname: { required },
    repeatPassword: { sameAs: sameAs("password"), required },
    email: { email, required }
  },
  computed: {
    feedback() {
      return this.$store.getters.feedback;
    }
  },
  methods: {
    submit() {
      //stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      // auth sign up(create account)
      this.$store.dispatch("signUp", {
        username: this.username,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        bio: this.bio,
        img: this.img
      });
      // console.log(this.email)
    },
    //chars for passsword
    moreLeft(useChars) {
      this.leftChars = useChars.length;
    }
  }
};
</script>

<style scoped>
.margin-bottom {
  margin-bottom: 250px;
}
h1 {
  font-family: "Novecentosan", Arial, sans-serif;
  color: #8a8888;
  padding-top: 20px;
}
input {
  width: 350px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 5px;
  border-style: solid;
  border-color: #8a8888;
}
button {
  width: 350px;
}
.form {
  box-shadow: 3px 3px 5px 6px rgb(24, 223, 84);
  width: 500px;
  text-align: center;
  margin-left: 240px;
  margin-top: 50px;
}
.error {
  color: red;
  font-size: 12px;
}
.form-group--error {
  border-color: red;
}
.infoMoreChar {
  font-size: 12px;
}
</style>