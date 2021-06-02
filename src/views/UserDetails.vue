<template>
  <div v-if="event">
    <!-- display event details -->
    <h1>{{ event.title }}</h1>
    <h5>@{{ event.time }} on {{ event.date }}</h5>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js"

export default {
  props: ["id"],
  data() {
    return {
      event: null,
    }
  },
  created() {
    //   fetch the event
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style></style>
