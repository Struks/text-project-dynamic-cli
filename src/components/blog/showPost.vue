<template>
    <div>
        <h2>dasfdsgvsdfgdfgh</h2>
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
    name: "show-post",
    data(){
        return{
            title:null,
            url:null,
            text:null
            
        }
    },
    // beforeRouteEnter(to, from, next){
    //     db.collection('blog').where('docRef.id', '==', to.params.id).get()
    //     .then(querySnapshot =>{
    //         querySnapshot.forEach(doc =>{
    //             next(vm  => {      
    //                 vm.title = doc.data().name;
    //                 vm.url = doc.data().url;
    //                 vm.text = doc.data().text;
    //             })
    //         })
    //     })
    // },
    // watch:{
    //     '$route':'fetchData'
    // },
    // methods:{
    //     fetchData(){
    //         db.collection('blog').where('docRef.id', '==', this.$route.params.id).get()
    //         .then(querySnapshot =>{
    //             querySnapshot.forEach(doc =>{
    //                 this.title = doc.data().name;
    //                 this.url = doc.data().url;
    //                 this.text = doc.data().text;
    //             })
    //         })
    //     }
    // },
}
</script>

<style scoped>

</style>
