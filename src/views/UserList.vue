<template>
  <div class="tableContainer">
    <table cellspacing="0">
      <tr class="trth">
        <th>Name</th>
        <th>Title</th>
        <th>Status</th>
        <th>Role</th>
        <th></th>
      </tr>
      <UserCard v-for="user in users" :key="user.id" :user="user" />
  </table>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCard from "@/components/UserCard.vue"
import UserService from "@/services/UserService.js"

export default {
  name: "UserList",
  components: {
    UserCard,
  },
  data() {
    return {
      users: null,
    }
  },
  created() {
    UserService.getUsers()
      .then((response) => {
        this.users = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
.tableContainer {
  width: 80%;
  margin: 0 auto;
  overflow-x: auto;
}
table {
  border: 1px solid rgba(0, 0, 0, 0.25);
  width: 100%;
  text-align: left;
  border-radius: 5px;
  overflow: hidden;
}
tr.trth {
  background-color: rgba(0, 0, 0, 0.05);
}
tr:nth-child(odd){
  background-color: rgba(0, 0, 0, 0.025);
}
th {
  padding: 10px;
}
</style>
