<template>
    <div class="margin-bottom shadow-border">
        <hero-banner v-bind:headline='headline'/> 
        <div class="container">
           <div class="form login">
               <form action="#" @submit.prevent="submit" >                  
                   <h1 class="m-3">Sign Up</h1>
                   <!-- first and last name -->
                   <div class="row justify-content-center">
                        <div class="col-4 form-group p-0" :class="{'form-group--error': $v.fireForm.firstname.$error && submitted}">
                            <input 
                                type="text"
                                class="firstname"
                                v-model="$v.fireForm.firstname.$model"
                                placeholder="first name"
                            >
                            <p class="error" v-if="!$v.fireForm.firstname.required && submitted">First name is required</p>
                        </div>
                        <div class="col-4 form-group p-0" :class="{'form-group--error': $v.fireForm.lastname.$error && submitted}">
                            <input 
                                type="text"
                                class="lastname"
                                v-model="$v.fireForm.lastname.$model"
                                placeholder="last name"
                            >
                            <p class="error" v-if="!$v.fireForm.lastname.required && submitted">Last name is required</p>
                        </div>
                   </div>
                   <!-- username -->
                   <div class="form-group" :class="{'form-group--error':$v.fireForm.username.$error && submitted}">
                       <input 
                            type="text" 
                            class="username form_input"
                            v-model="$v.fireForm.username.$model"
                            placeholder="username"
                        ><br/>
                        <p class="error" v-if="!$v.fireForm.username.required && submitted">Username is required</p>
                   </div>
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
                    <!-- passwords -->
                    <div class="form-group" :class="{'form-group--error':$v.fireForm.password.$error && submitted}">
                    <input 
                        type="password"
                        class="password"
                        v-model="$v.fireForm.password.$model"
                        placeholder="password"
                        @keyup="moreLeft($v.fireForm.password.$model)"
                    >
                    <p class="error" v-if="!$v.fireForm.password.required && submitted">Password is required</p>
                    <p v-if="leftChars <= 6" class="infoMoreChar">You have used {{leftChars}} characters. Minimum is {{$v.fireForm.password.$params.minLength.min}}</p>
                    </div>
                    <div class="form-group" :class="{'form-group--error':$v.fireForm.password.$error && submitted}">
                    <input 
                        type="password"
                        class="password"
                        v-model="$v.fireForm.repeatPassword.$model"
                        placeholder="repeatPassword"
                    >
                    <p class="error" v-if="!$v.fireForm.repeatPassword.required && submitted">Password is required</p>
                    <p class="error" v-if="!$v.fireForm.repeatPassword.sameAs && submitted">Passwords must be identical</p>
                    </div>
                    <button type="submit" class="btn btn-success m-3">Sign Up</button>
                    <div class="pb-4"><span>Or go back to <router-link to="/login">login.</router-link></span></div>               
               </form>

           </div>
        </div>
    </div>
</template>

<script>
import { required, minLength, sameAs, email} from "vuelidate/lib/validators";
import Banner from '@/components/banner/Banner.vue';
export default {
    components:{
      'hero-banner':Banner,
    },
    data(){
        return{
          headline:'Registration',
          submitted:false,
          leftChars:0,
        }
    },
    validations:{
        fireForm:{
            username:{required},
            password:{required, minLength: minLength(6)},
            firstname:{required},
            lastname:{required},
            repeatPassword:{sameAs:sameAs('password'), required},
            email:{email,required}
            

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
            //auth sign up(create account)
            this.$store.commit('signUp')
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
.firstname,.lastname{
    width:170px;
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