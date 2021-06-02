<template>
  <div v-if="user">
    <!-- display event details -->
    <h1>{{ user.title }}</h1>
    <h5>@{{ user.time }} on {{ user.date }}</h5>
    <p>{{ user.description }}</p>
  </div>
</template>

<script>
import UserService from "@/services/UserService.js"

export default {
  props: ["id"],
  data() {
    return {
      user: null,
    }
  },
  created() {
    //   fetch the event
    UserService.getUser(this.id)
      .then((response) => {
        this.user = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style></style>
