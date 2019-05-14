<template>
  <div class>
    <div class="form">
      <h2 class="mt-4">{{subTitle}}</h2>
      <p class="mt-3">{{paragraph}}</p>
      <form @submit.prevent="submit">
        <div class="form-group" :class="{ 'form-group--error':$v.form.name.$error && submitted }">
          <input class="form_input" v-model.trim="$v.form.name.$model" placeholder="Name">
          <div class="error" v-if="submitted && !$v.form.name.required">Name field is required.</div>
        </div>
        <div class="form-group" :class="{ 'form-group--error':$v.form.email.$error && submitted }">
          <input class="form_input" v-model.trim="$v.form.email.$model" placeholder="Email Address">
          <div class="error" v-if="$v.form.email.$error && submitted">
            <span v-if="!$v.form.email.required">Email field is required.</span>
            <span v-if="!$v.form.email.email">Email must be valid.</span>
          </div>
        </div>
        <div
          class="form-group"
          :class="{ 'form-group--error':$v.form.subject.$error && submitted }"
        >
          <input class="form_input" v-model.trim="$v.form.subject.$model" placeholder="Subject">
          <div
            class="error"
            v-if="!$v.form.subject.required && submitted"
          >Subject field is also required.</div>
        </div>
        <div
          class="form-group"
          :class="{ 'form-group--error':$v.form.textarea.$error && submitted}"
        >
          <textarea
            class="form_input"
            v-model.trim="$v.form.textarea.$model"
            @keyup="charLeft($v.form.textarea.$model)"
            cols="70"
            rows="9"
          ></textarea>
          <div class="error" v-if="!$v.form.textarea.required && submitted">Content is required.</div>
          <div
            class="infoLeftChars"
          >You have used {{leftChars}} characters of {{$v.form.textarea.$params.maxLength.max}}.</div>
        </div>
        <div class="row verifyForm">
          <button
            :disabled="!receptchaChecked"
            type="submit"
            class="col-5 p-2 col-md-4 ml-3 mb-4 form-button btn btn-success"
          >SEND MESSAGE</button>
          <vue-recaptcha
            class="col-md-4 offset-md-1 recaptcha"
            @verify="verify"
            sitekey="6LcSSpkUAAAAAG6fJ0dWxXBkNnmUZPcPajLrhz5w"
          ></vue-recaptcha>
        </div>
      </form>
    </div>
    <div id="loaders">
      <img id="mail" :src="src" width="150">
    </div>
  </div>
</template>



<script>
import { required, maxLength, email } from "vuelidate/lib/validators";
import VueRecaptcha from "vue-recaptcha";

export default {
  components: { VueRecaptcha },
  data() {
    return {
      leftChars: 0,
      submitted: false,
      receptchaChecked: false
    };
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      subject: { required },
      textarea: { required, maxLength: maxLength(500) }
    }
  },
  computed: {
    paragraph() {
      return this.$store.getters["contact/paragraph"];
    },
    subTitle() {
      return this.$store.getters["contact/subTitle"];
    },
    form() {
      return this.$store.getters["contact/form"];
    },
    src() {
      return this.$store.getters["contact/src"];
    }
  },
  methods: {
    submit() {
      this.submitted = true;
      //stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }
      //hide form when submit is legal
      document.querySelector(".form").style.display = "none";
      //sending message
      //loading
      const mail = document.getElementById("mail");
      mail.style.display = "block";
      //template feedback
      const div = document.createElement("div");

      div.innerHTML = `
        <p class='feedback-message' id='message'>
          Email is send. Expect a very fast feedback. 
        </p>
        <p class="feedback-message">
          Thanks for using our services.
        </p>
      `;
      div.className = "feedback";
      //set timeout for feedback
      setTimeout(function() {
        mail.style.display = "none";
        document.querySelector("#loaders").appendChild(div);
      }, 3000);
    },
    charLeft(useChar) {
      //define left chars
      this.leftChars = useChar.length;
      if (this.leftChars > 500) {
        document.querySelector(".infoLeftChars").style.color = "red";
        document.querySelector(".infoLeftChars").style.font = "20px";
      } else {
        document.querySelector(".infoLeftChars").style.color = "gray";
      }
    },
    //reCAPTCHA
    verify() {
      this.receptchaChecked = true;
    }
  }
};
</script>

<style scoped>
h2 {
  text-transform: uppercase;
}
.mt-4 {
  padding-top: 13px;
}
form textarea {
  border-color: #8a8888;
  border-width: 2px;
  border-radius: 0;
  padding-left: 10px;
}
@media (max-width: 425px) {
  form textarea {
    width: 100%;
  }
}
input {
  margin: 13px 0px 0px 0px;
  max-width: 320px;
  width: 100%;
  height: 45px;
  border-color: #8a8888;
  border-radius: 0;
  border-width: 2px;
  border-style: solid;
  padding-left: 10px;
}
button {
  margin-top: 20px;
  border-radius: 0;
}
.error {
  color: red;
  font-size: 12px;
}
.form-group--error input {
  border-color: red;
}
.form-group--error textarea {
  border-color: red;
}
.infoLeftChars {
  color: #8a8888;
  font-size: 12px;
}
#loaders img {
  width: 150px;
  margin: 0 auto;
  display: none;
  padding-top: 150px;
}
</style>


