<template>
  <div>
    <UserCard v-for="user in users" :key="user.id" :user="user" />
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
