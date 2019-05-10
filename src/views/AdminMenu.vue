<template>
    <div class="margin-bottom">
        <hero-banner :headline="headline"/>
        <div class="container"> 
            <table class="table table-responsive-lg table-bordered mt-4">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                        <th scope="col">Role</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id" scope="row">
                        
                        <td>{{user.user_id}}</td>
                        <td>{{user.firstname}} {{user.lastname}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.timestamp | date}}</td>
                        <td>{{user.role}}</td>
                    
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Banner from '@/components/banner/Banner.vue';
export default {
    components:{
        "hero-banner": Banner
    },
    data(){
        return{
          headline: "Users"  
        }
    },
    computed:{
        users(){
            return this.$store.getters.users;
        }
    },
    created(){
        this.$store.dispatch('getUsers');
    },
    
}
</script>


<style scoped>
.margin-bottom{
    
}
</style>
