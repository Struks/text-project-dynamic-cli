<template>
    <div class="margin-bottom">
        <hero-banner :headline="headline"/>
        <div class="grid-wrapper container"> 
            <!-- <table class="table table-responsive-lg table-bordered mt-4">
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
            </table> -->
           <kendo-grid
                :data-source="users"
                :height="400"
                :sortable='true'
                :selectable="'multiple'"
                :selected-field="selectedField"
                @change="userProfil"
                :editable="'inline'">
            <kendo-grid-column :field="'id'" :title="'ID'" :width="250"></kendo-grid-column>
            <kendo-grid-column :field="'firstname'" :title="'First Name'" :width="150"></kendo-grid-column>
            <kendo-grid-column :field="'lastname'" :title="'Last Name'" :width="150"></kendo-grid-column>
            <kendo-grid-column :field="'email'" :title="'Email'" :width="200"></kendo-grid-column>
            <kendo-grid-column :field="'role'" :title="'Role'" ></kendo-grid-column>
           </kendo-grid>
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
          headline: "Users",
           selectedField: 'selected',
            columns: [
                { field: 'id', title: 'ID'},
                { field: 'firstName', title: 'First Name' },
                { field: 'lastName', title: 'Last Name' },
                { field: 'email', title: 'Email' },
                { field: 'role', title: 'Role' }
            ]
        }
    },
    computed:{
        users(){
            return this.$store.getters.users;
        }
    },
    methods:{
        //link to user profil.
        userProfil(event){
            const element = event.sender.select();
            const id = event.sender.dataItem(element[0]).id
            this.$router.push('/' + id)
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
    .grid-wrapper{
        margin-top: 30px;
    }
    .grid-wrapper :hover {
        cursor: pointer;
    }
</style>
