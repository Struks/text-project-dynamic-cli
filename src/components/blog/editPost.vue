<template>
    <div class="marginBottom">    
        <banner :src='src' :headline='headline'/>
        <div class="container">
            <div class="backgroundPost">
                
                <div class="editPost pt-5">
                    <label for="title">Title:</label><br/>
                    <input 
                        id="title"
                        class="title" 
                        v-model="title"
                        type="text" 
                        placeholder="Title"
                        @blur="$v.title.$touch()"
                        :class="{error: $v.title.$error}"
                    ><br/>
                    <p class="error-message" v-if="!$v.title.required && $v.title.$dirty">Title field is required.</p>
                    <label for="url">Img URL:</label><br/>
                    <input 
                        id="url"
                        class="url" 
                        v-model="url" 
                        type="text" 
                        placeholder="Thumbnails URL"
                        @blur="$v.url.$touch()"
                        :class="{error: $v.url.$error}"
                    ><br/>
                    <p class="error-message" id="content" v-if="!$v.url.url && $v.url.$dirty">URL is not valid.</p>
                    <label for="text">Content:</label>
                    <vue-ckeditor v-model="text" id="text"></vue-ckeditor>

                    <div class="afterbtn">
                        <button type="button" class="btn btn-success" @click="editPost(id)">SAVE</button>
                        <button type="button" class="float-right btn btn-danger btn-delete" @click="deletePost(id, title)">DELETE</button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { required,url } from "vuelidate/lib/validators";
import VueCkeditor from 'vue-ckeditor2';
import Banner from '@/components/banner/Banner.vue';
import db from '@/firebase/init';
export default {
    components:{
        'banner':Banner,
        VueCkeditor
    },
    data(){
        return{
        post:{},
        headline: 'Edit post',
        src:true,  
        title:'',
        text:'',
        url:'',
        timestamp:'',
        id:'',     
        }
    },
    validations:{
        title:{ required },
        url:{ url },
    },
    created(){
        db.collection("blog").doc(this.$route.params.id)
        .onSnapshot((doc) => {
            this.title = doc.data().title,
            this.url = doc.data().url,
            this.text = doc.data().text,
            this.timestamp = doc.data().timestamp,
            this.id = doc.id   
        })
    },
    methods:{
        editPost(id){       
            this.$store.dispatch('editPost/getEditPost',{
                title:this.title,
                text:this.text,
                url:this.url,
                timestamp:this.timestamp,
                id:this.id
            })
            this.$router.push(`/blog/${id}`)   
        },
        deletePost(id, title) {
            this.$store.dispatch('modal/getConfig',{
                message: title,
                confirmationLabel: 'Yes',
                cancelLabel: 'No',
                onConfirm: () => {
                this.$store.dispatch('blog/deletePost', id);
                this.$store.dispatch('modal/getModal', false);
                this.$router.push({ path: `/blog` }); 
                },
                onCancel: () => {
                this.$store.dispatch('modal/getModal', false)
                }
            })
            this.$store.dispatch('modal/getModal', true)
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
@media(max-width: 525px){
    input{
        width: 100%;
    }
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
@media(max-width: 525px){
    .btn{
        width:120px;
        padding: 5px 20px;
        font-size: 12px;
    }
}
.marginBottom{
    margin-bottom: 250px;
}
@media(max-width: 525px){
    .marginBottom{
        margin-bottom: 150px;
    }   
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
