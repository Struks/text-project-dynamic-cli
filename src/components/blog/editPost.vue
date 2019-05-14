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
                    ><br/>
                    <label for="url">URL:</label><br/>
                    <input 
                        id="url"
                        class="url" 
                        v-model="url" 
                        type="text" 
                        placeholder="Thumbnails URL"
                    >
                    <vue-ckeditor v-model="text"></vue-ckeditor>

                    <!-- <textarea class="textarea" name="ckeditor" id="ckeditor" v-model="text"></textarea> -->
                    <div class="afterbtn">
                        <button type="button" class="btn btn-success" @click="editPost(id)">EDIT POST</button>
                        <button type="button" class="float-right btn btn-danger btn-delete" @click="deletePost(id)">DELETE</button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import VueCkeditor from 'vue-ckeditor2';
import Banner from '@/components/banner/Banner.vue';
import db from '@/firebase/init'
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
        id:''       
        }
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
            // this.$store.dispatch('loadPostOnEditor',{
        //     title:this.title,
        //     text:this.text,
        //     url:this.url,
        //     timestamp:this.timestamp,
        //     id:this.id
        // },this.$route.params.id)
        // console.log(this.$route.params.id)

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
        deletePost(id){
        if(confirm('Are you sure ? ')){
          db.collection("blog").doc(id).delete();
          setTimeout(() => {
            document.querySelector('.article').remove()
          }, 400); 
          this.$router.push({path:`/blog`}) 
        }
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
