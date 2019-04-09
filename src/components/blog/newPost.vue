<template>
    <div class="marginBottom">
       
        <div class="container">
            <div class="backgroundPost bg-dark">
                <banner :src='src' :headline="headline" class="text-center"/>
                <div class="newPost">
                        <input 
                            class="title" 
                            v-model='title' 
                            type="text" 
                            placeholder="Title"
                            @blur="$v.title.$touch()"
                            :class="{error: $v.title.$error}"
                        >
                        <p class="error-message" v-if="!$v.title.required && $v.title.$dirty">Title field is required.</p>
                        <input 
                            class="url" 
                            v-model='url' 
                            type="text" 
                            placeholder="Thumbnails URL"
                            @blur="$v.url.$touch()"
                            :class="{error: $v.url.$error}"
                        >
                        <p class="error-message" v-if="!$v.url.required && $v.url.$dirty">Thumbnails field is required.</p>
                        <textarea class="textarea" name="ckeditor" id="ckeditor" v-model = 'text'></textarea>
                        <div class="afterbtn"><button type="button" class="btn btn-success" @click="addPost">ADD POST</button></div>
                   
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { required } from "vuelidate/lib/validators";
import Banner from '@/components/banner/Banner.vue';
import db from '@/firebase/init'
const moment = require('moment')
export default {
    components:{
        'banner':Banner,
    },
    data(){
        return{
            moment:moment,
            headline:'add new post',
            title:'',
            text:'',
            url:'',
            src:true,
            timestamp:''
            
        }
    },
    validations:{
        title:{ required },
        url:{ required }
    },
    computed:{
        
    },
    mounted(){
        CKEDITOR.replace( 'ckeditor' )
    },
    methods:{
        addPost() {
            this.$v.$touch();
            if(this.$v.$invalid) {
                return
            }
            //connection inputs on fire store
            const slug = this.generateUUID()
            db.collection('blog').add({
                title: this.title,
                text: CKEDITOR.instances.ckeditor.getData(),
                url: this.url,
                timestamp: new Date()
            }).then((docRef) =>{ 
                console.log('Document written with ID: ', docRef.id);
                this.$router.push(`${docRef.id}`)
            })
            .catch((error) => console.error('Error adding document: ', error))
            //blog is added
            if(!this.$v.$invalid){
                alert('Blog is added.')
            }
        },
        generateUUID(){
            let d = new Date().getTime()
            let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                let r = (d + Math.random() * 16) % 16 | 0
                d = Math.floor(d / 16)
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
            })
            return uuid
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
    border: 3px solid #212529;
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
    background: #2ecc71;
    border: none;
    border-radius: 0px;
    padding: 10px 40px;
    margin-top: 20px;
}
.newPost{
   text-align: center;
}
.marginBottom{
    margin-bottom: 250px;
}
.afterbtn{
    padding-bottom: 20px;
}
.error-message {
  color: red;
  font-size: 12px;
}
.error{
  border-color: red;
}
.backgroundPost{
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;  
    -moz-box-shadow:    3px 3px 5px 6px #ccc;  
    box-shadow:         3px 3px 5px 6px #ccc;
}

</style>

