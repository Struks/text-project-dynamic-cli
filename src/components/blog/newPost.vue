<template>
    <div class="marginBottom">
       
        <div class="container">
            <div class="backgroundPost bg-dark">
                <banner :src='src' :headline="headline" class="text-center">
                   
                </banner>
                
                <div class="newPost">
                    <input class="title" v-model='title' type="text" placeholder="Title">
                    <input class="url" v-model='url' type="text" placeholder="Image thumbnails">
                    <textarea class="textarea" name="" id="" cols="30" rows="10" v-model='text'></textarea>
                    <div class="afterbtn"><button class="btn btn-success" @click="addPost">ADD POST</button></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
// import { required, maxLength, email } from "vuelidate/lib/validators";
import Banner from '../banner/Banner.vue';
import db from '../../firebase/init'
export default {
    components:{
        'banner':Banner,
    },
    data(){
        return{
            headline:'add new post',
            title:'',
            text:'',
            url:'',
            src:true
        }
    },
    methods:{
        addPost() {
            db.collection('blog').add({
                title: this.title,
                text: this.text,
                url: this.url,

            })
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
}
textarea{
    width:70%;
    margin: 20px 0px;
}
button{
    /* width: 80%; */
    /* display:list-item; */
    font-family: "Novecentosan", Arial, sans-serif;
    background: #2ecc71;
    border: none;
    border-radius: 0px;
    padding: 10px 40px;
    
    
}
.newPost{
   text-align: center;
}
.marginBottom{
    margin-bottom: 200px;
}
.afterbtn{
    padding-bottom: 20px;
}
</style>

