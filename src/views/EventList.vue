<template>
  <div class="home">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 1,
          category: "Animal",
          title: "Evenet Title goes here",
          description: "This is the detail description.",
          date: "20 November 2021",
          time: "12:00",
          petsAllowed: true,
          organizer: "cat holders",
        },
        {
          id: 2,
          category: "Human",
          title: "Again Title goes here",
          description: "Another the detail description.",
          date: "20 November 2022",
          time: "10:00",
          petsAllowed: true,
          organizer: "Homo holders",
        },
        {
          id: 3,
          category: "Human",
          title: "Again Title goes here",
          description: "Another the detail description.",
          date: "20 November 2022",
          time: "10:00",
          petsAllowed: true,
          organizer: "Homo holders",
        },
      ],
    }
  },
}
</script>
