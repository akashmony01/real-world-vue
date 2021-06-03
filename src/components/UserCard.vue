<template>
  <tr>
    <td class="tdSpilt">
      <img :src="user.img" :alt="user.name" />
      <div>
        <h6>{{ user.name }}</h6>
        <p>{{ user.email }}</p>
      </div>
    </td>
    <td>
      <h6>{{ user.title }}</h6>
      <p>{{ user.department }}</p>
    </td>
    <td>
      <p class="stts">{{ user.status }}</p>
    </td>
    <td>
      <p>{{ user.role }}</p>
    </td>
    <td>
      <router-link :to="{ name: 'UserDetails', params: { id: user.id } }">
        View
      </router-link>
    </td>
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
img {
  width: 50px;
  height: auto;
  margin-right: 15px;
}
h6 {
  font-size: 18px;
  margin: 0;
  margin-bottom: 5px;
}
p {
  margin: 0;
}
p.stts {
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  color: green;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: lightgreen;
}
td {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: 10px;
}
td.tdSpilt {
  display: flex;
  align-items: center;
}
</style>
