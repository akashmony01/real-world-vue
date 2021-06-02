<template>
  <div class="event-card">
    <!-- displ evenmt data -->
    <span>@{{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  background-color: #f5f5f5;
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 15px;
  width: 500px;
}
</style>
