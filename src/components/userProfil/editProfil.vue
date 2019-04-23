<template>
    <div class="margin-bottom">
        <hero-banner :headline = "headline"/>
        <div class="container">
            <div class="backgroundPost">
                
                <div class="editPost pt-5">

                    <label for="url">Img URL:</label><br/>
                    <input 
                        id="url"
                        class="url" 
                        v-model="currentUser.img" 
                        type="text" 
                        placeholder="Account Image"
                    >
                    <vue-ckeditor v-model="currentUser.bio"></vue-ckeditor>

                    <div class="afterbtn">
                        <button type="button" class="btn btn-success" @click="saveEditProfil(currentUser)">SAVE</button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    
</template>


<script>
import Banner from '@/components/banner/Banner.vue';
import VueCkeditor from 'vue-ckeditor2';
export default {
    components:{
        'hero-banner':Banner,
        VueCkeditor
    },
    data(){
        return{
            headline: 'Edit profil',
        }
    },
    computed:{   
        currentUser(){return this.$store.getters.logUser}
    },
    methods:{
        saveEditProfil(editUser){
            this.$store.dispatch('saveEditProfil',editUser)
        }
    }
}
</script>


<style scoped>
label{
    margin: 0px;
}
input{
    width: 70%;
    margin: 10px 0px 30px 0px;
    padding: 20px;
    border: 1px solid #212529;
}
.btn{
    font-family: "Novecentosan", Arial, sans-serif;  
    border: none;
    border-radius: 0px;
    padding: 10px 40px;
    margin-top: 20px;
}
</style>
