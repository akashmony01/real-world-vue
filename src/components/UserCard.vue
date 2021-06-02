<template>
  <router-link :to="{ name: 'UserDetails', params: { id: event.id }  }">
    <div class="user-card">
      <!-- display event data -->
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    event: Object,
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
