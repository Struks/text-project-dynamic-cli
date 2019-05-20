<template>
  <div class="margin-bottom">
    <hero-banner :headline="headline"/>
    <div class="grid-wrapper container">
      <kendo-grid
        :data-source="users"
        :height="400"
        :sortable="true"
        :selectable="'multiple'"
        :selected-field="selectedField"
        @change="userProfil"
        :editable="'inline'"
      >
        <kendo-grid-column :field="'id'" :title="'ID'" :width="250"></kendo-grid-column>
        <kendo-grid-column :field="'firstname'" :title="'First Name'" :width="150"></kendo-grid-column>
        <kendo-grid-column :field="'lastname'" :title="'Last Name'" :width="150"></kendo-grid-column>
        <kendo-grid-column :field="'email'" :title="'Email'" :width="200"></kendo-grid-column>
        <kendo-grid-column :field="'role'" :title="'Role'"></kendo-grid-column>
      </kendo-grid>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/banner/Banner.vue";
export default {
  components: {
    "hero-banner": Banner
  },
  data() {
    return {
      headline: "Users",
      selectedField: "selected",
      columns: [
        { field: "id", title: "ID" },
        { field: "firstName", title: "First Name" },
        { field: "lastName", title: "Last Name" },
        { field: "email", title: "Email" },
        { field: "role", title: "Role" }
      ]
    };
  },
  computed: {
    users() {
      return this.$store.getters['users/users'];
    }
  },
  methods: {
    //link to user profil.
    userProfil(event) {
      const element = event.sender.select();
      const id = event.sender.dataItem(element[0]).id;
      this.$router.push("/" + id);
    }
  },
  created() {
    this.$store.dispatch("users/getUsers");
  }
};
</script>


<style scoped>
.grid-wrapper {
  margin-top: 30px;
}
.grid-wrapper :hover {
  cursor: pointer;
}
</style>
