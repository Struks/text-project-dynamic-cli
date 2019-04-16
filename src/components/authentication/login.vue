<template>
    <div class="margin-bottom shadow-border">
        <hero-banner v-bind:headline='headline'/> 
        <div class="container">
           <div class="form login">
               <form action="#" @submit.prevent="submit" >                  
                   <h1 class="m-3">Login</h1>
                   <div class="form-group" :class="{'form-group--error':$v.fireForm.username.$error && submitted}">
                       <input 
                            type="text" 
                            id="username" 
                            class="username form_input"
                            v-model="$v.fireForm.username.$model"
                            placeholder="username"
                        ><br/>
                        <p class="error" v-if="!$v.fireForm.username.required && submitted">Username is required</p>
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
                    <p v-if="leftChars <= 6" class="infoMoreChar">You have used {{leftChars}} characters. Minimum is {{$v.fireForm.password.$params.minLength.min}}.</p>
                    <p></p>
                    </div>
                    <button type="submit" class="btn btn-success m-3">Sign in</button>
                    <div class="pb-4"><router-link to="/sign?up">You don't have account?<br/>Sign up now!</router-link></div>
                
               </form>

           </div>
        </div>
    </div>
</template>

<script>
import { required, minLength} from "vuelidate/lib/validators";
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
            username:{required},
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
        },
        //chars for passsword
        moreLeft(useChars){
            this.leftChars = useChars.length
      if (this.leftChars < 6) {
        document.querySelector('.infoMoreChar').style.color="red";
        document.querySelector('.infoMoreChar').style.font="20px";
      } else {
        document.querySelector('.infoMoreChar').style.color="gray";
      }
        }
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
