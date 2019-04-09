<template>
    <div class="marginBottom">    
        <div class="container align-center">
            <div class="backgroundPost bg-dark">
                <banner :src='src' :headline='headline' class="text-center"/>
                <div class="editPost">
                        <input 
                            class="title" 
                            v-model="post.title"
                            type="text" 
                            placeholder="Title"
                            
                            :class="{error: $v.title.$error}"
                        >
                        <p class="error-message" v-if="!$v.title.required && $v.title.$dirty">Title field is required.</p>
                        <input 
                            class="url" 
                            v-model="post.url" 
                            type="text" 
                            placeholder="Thumbnails URL"
                            @blur="$v.url.$touch()"
                            :class="{error: $v.url.$error}"
                        >
                        <p class="error-message" v-if="!$v.url.required && $v.url.$dirty">Thumbnails field is required.</p>
                        <textarea class="textarea" name="ckeditor" id="ckeditor" v-model = 'post.text'></textarea>
                        <div class="afterbtn"><button type="button" class="btn btn-success" @click="editPost()">EDIT POST</button></div>
                   
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { required } from "vuelidate/lib/validators";
import Banner from '@/components/banner/Banner.vue';
import db from '@/firebase/init'
export default {
    components:{
        'banner':Banner
    },
    data(){
        return{
           post:{},
           headline: 'Edit post',
           src:true,
            
        }
    },
    validations:{
        title:{ required },
        url:{ required }
    },
    mounted(){
        CKEDITOR.replace( 'ckeditor' )
    },
    created(){
        db.collection("blog").doc(this.$route.params.id)
        .onSnapshot((doc) => {
            
           let source = doc.metadata.hasPendingWrites ? "Local" : "Server";
            console.log(source, " data: ", doc.data());
            this.post ={
                title: doc.data().title,
                url:doc.data().url,
                text:doc.data().text.html
            }
        })
    },
    methods:{
        editPost(){
            

            // db.collection('blog').doc(this.$route.params.id).set({
            //     title: this.title,
            //     text: CKEDITOR.instances.ckeditor.getData(),
            //     url: this.url,
            //     timestamp: new Date()
            // }).then(docRef =>{
            // this.$router.push(`${docRef.id}`)
            // });
        }
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
.editPost{
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
