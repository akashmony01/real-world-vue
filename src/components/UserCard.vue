<template>
  <tr>
    <td class="tdSpilt">
      <img alt="Vue logo" :src="user.img" />
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
      <p>{{ user.status }}</p>
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
  height: 50px;
  width: auto;
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
td {
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  padding: 10px;
}
td.tdSpilt {
  display: flex;
  align-items: start;
}
</style>
