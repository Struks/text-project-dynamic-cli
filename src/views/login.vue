<template>
    <div class="margin-bottom shadow-border">
        <hero-banner v-bind:headline='headline'/> 
        <div class="container">
           <div class="form login">
               <form action="#" @submit.prevent="submit" >                  
                   <h1 class="m-3">Login</h1>
                   <!-- email -->
                   <div class="form-group" :class="{'form-group--error':$v.fireForm.email.$error && submitted}">
                        <input 
                            class="email"
                            v-model="$v.fireForm.email.$model"
                            placeholder="email"
                        >
                        <p class="error" v-if="!$v.fireForm.email.required && submitted">Email is required</p>
                        <p class="error" v-if="!$v.fireForm.email.email && submitted">Email is no valid</p>
                    </div>
                    <div class="form-group" :class="{'form-group--error':$v.fireForm.password.$error && submitted}">
                    <input 
                        type="password"
                        id="password"
                        class="password"
                        v-model="$v.fireForm.password.$model"
                        placeholder="password"
                        @keyup="moreLeft($v.fireForm.password.$model)"
                    >
                    <p class="error" v-if="!$v.fireForm.password.required && submitted">Password is required</p>
                    </div>
                    <button type="submit" class="btn btn-success m-3">Sign in</button>
                    <div class="pb-4"><router-link to="/signup">You don't have account?<br/>Sign up now!</router-link></div>
               </form>
           </div>
        </div>
    </div>
</template>

<script>
import { required, minLength,email} from "vuelidate/lib/validators";
import Banner from '@/components/banner/Banner.vue';
export default {
    components:{
      'hero-banner':Banner,
    },
    data(){
        return{
          headline:'login',
          submitted:false,
          leftChars:0,
        }
    },
    validations:{
        fireForm:{
            email:{required,email},
            password:{required, minLength: minLength(6)}
        }
    },
    computed:{
        fireForm(){return this.$store.getters.fireForm}
    },
    methods:{
        submit(){
             
            this.submitted = true;     
            //stop here if form is invalid
            this.$v.$touch();
            
            if(this.$v.$invalid) {
                return
            }
            //login
            this.$store.commit('login')
            //path to blog
            this.$router.push({path:'/blog'})
        },
        //chars for passsword
        moreLeft(useChars){
            this.leftChars = useChars.length
        },
    }
}
</script>

<style scoped>
.margin-bottom{
    margin-bottom: 250px;
}
h1{
    font-family:"Novecentosan", Arial, sans-serif;
    color: #8a8888;
    padding-top: 20px;
}
input{
    width: 350px;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 5px;
    border-style:solid;
    border-color: #8a8888;
}
button{
    width: 350px;

}
.form{
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
.form-group--error input {
  border-color: red;
}
.infoMoreChar{
    font-size: 12px;
}
</style>
