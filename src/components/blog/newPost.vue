<template>
    <div class="marginBottom">
       <banner :src='src' :headline="headline"/>
        <div class="container">
            <div class="backgroundPost">
                
                <div class="newPost pt-5">
                    <div class="float-right" >
                        <label for="category">Category:</label><br/>
                        <select class="form-control custom-select" id="category" v-model="category">
                            <option value="" selected disabled>Choose here</option>
                            <option value="nature">Nature</option>
                            <option value="tehnology">Tehnology</option>
                            <option value="art">Art</option>
                            <option value="history">History</option>
                        </select>
                    </div>  
                    <label for="title">Title:</label><br/>
                    <input 
                        id="title"
                        class="title" 
                        v-model='title' 
                        type="text" 
                        placeholder="Title"
                        @blur="$v.title.$touch()"
                        :class="{error: $v.title.$error}"
                    ><br/>
                    <p class="error-message" v-if="!$v.title.required && $v.title.$dirty">Title field is required.</p>
                    <label for="url">URL:</label><br/>
                    <input 
                        id="url"
                        class="url" 
                        v-model='url' 
                        type="text" 
                        placeholder="Thumbnails URL"
                        @blur="$v.url.$touch()"
                        :class="{error: $v.url.$error}"
                    >
                    <p class="error-message" v-if="!$v.url.url && $v.url.$dirty">URL is not valid.</p>
                    <vue-ckeditor v-model="text"></vue-ckeditor>
                    <div class="afterbtn"><button type="button" class="btn btn-success" @click="addPost">ADD POST</button></div>
                   
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import VueCkeditor from 'vue-ckeditor2';
import { required,url } from "vuelidate/lib/validators";
import Banner from '@/components/banner/Banner.vue';
import db from '@/firebase/init'
const moment = require('moment')
export default {
    components:{
        'banner':Banner,
        VueCkeditor
    },
    data(){
        return{
            moment:moment,
            headline:'add new post',
            title:'',
            text:'',
            url:'',
            src:true,
            timestamp:'',
            id:'',
            category:''
            
        }
    },
    validations:{
        title:{ required },
        url:{ url },
    },
    computed:{
        
    },

    methods:{
        addPost() {
            this.$v.$touch();
            if(this.$v.$invalid) {
                return
            }
            //connection inputs on fire store
            db.collection('blog').add({
                title: this.title,
                text: this.text,
                url: this.url,
                category: this.category,
                timestamp: moment(Date.now()).utc().startOf('day').format(),
            }).then((docRef) =>{ 
                this.id = docRef.id
                console.log('Document written with ID: ', docRef.id);
                this.$router.push(`${docRef.id}`)
            })
            .catch((error) => console.error('Error adding document: ', error))
        },
    }
}
</script>


<style scoped>
.title{
    margin-top: 30px;
}
input{
    width: 70%;
    margin: 20px 0px;
    padding: 20px;
    border: 1px solid #212529;
}
p{
    margin-top: -15px;
}
textarea{
    width:70%;
    margin: 20px 0px;
}
.btn{
    font-family: "Novecentosan", Arial, sans-serif;
    border: none;
    border-radius: 0px;
    padding: 10px 40px;
    margin-top: 20px;
}
/* .newPost{
   text-align: center;
} */
.marginBottom{
    margin-bottom: 250px;
}

.error-message {
  color: red;
  font-size: 12px;
}
.error{
  border-color: red;
}
.title,.url{
    margin-top: -0px
}
label{
    margin: 0px;
    text-transform :none;
    font-size:15px;
    font-family:"Helvetica", Arial, sans-serif
}



</style>

