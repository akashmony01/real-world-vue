<template>
  <tr>
    <div class="user-card">
      <!-- display event data -->
      <span>@{{ user.time }} on {{ user.date }}</span>
      <h4>{{ user.title }}</h4>
    </div>
    <img alt="Vue logo" :src="user.img" />
    <router-link :to="{ name: 'UserDetails', params: { id: user.id } }">
      View
    </router-link>
  </tr>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-card {
  background-color: #f5f5f5;
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 15px;
  width: 500px;
}
</style>
