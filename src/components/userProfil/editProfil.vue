<template>
  <div class="margin-bottom">
    <hero-banner :headline="headline"/>
    <div class="container">
      <div class="backgroundPost">
        <div class="editPost pt-5">
          <label for="url">Img URL:</label>
          <br>
          <input
            id="url"
            class="url"
            v-model="singleUser.img"
            type="text"
            placeholder="Account Image"
          ><br/>
          <label for="bio" class="mb-1">BIO:</label>
          <vue-ckeditor v-model="singleUser.bio" id="bio"></vue-ckeditor>
          <!-- role -->
          <label for="role" class="mt-3 mb-1">Role:</label>
          <br>
          <select name="role" id="role" class="form-control custom-select" v-model="singleUser.role">
            <option value="" selected disabled>Choose Role</option>
            <option value="user">User</option>
            <option value="blogger">Blogger</option>
            <option value="moderator">Moderator</option>
            <option value="admin">Admin</option>
          </select>
          <div class="afterbtn">
            <button type="button" class="btn btn-success" @click="saveEditProfil(singleUser)">SAVE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Banner from "@/components/banner/Banner.vue";
import VueCkeditor from "vue-ckeditor2";
export default {
  components: {
    "hero-banner": Banner,
    VueCkeditor
  },
  data() {
    return {
      headline: "Edit profil"
    };
  },
  computed: {
    singleUser() { 
      return this.$store.getters["users/singleUser"]; 
    }
  },
  methods: {
    saveEditProfil(editUser) { 
      this.$store.dispatch("users/saveEditProfil", editUser);
    }
  }
};
</script>


<style scoped>
label {
  margin: 0px;
}
input {
  width: 70%;
  margin: 10px 0px 20px 0px;
  padding: 20px;
  border: 1px solid #212529;
}
.btn {
  font-family: "Novecentosan", Arial, sans-serif;
  border: none;
  border-radius: 0px;
  padding: 10px 40px;
  margin-top: 20px;
}
</style>
