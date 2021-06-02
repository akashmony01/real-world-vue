<template>
  <div>
    <UserCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import UserCard from "@/components/UserCard.vue"
import EventService from "@/services/EventService.js"

export default {
  name: "UserList",
  components: {
    UserCard,
  },
  data() {
    return {
      events: null,
    }
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
