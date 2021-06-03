<template>
  <div v-if="user" class="tableContainer">
    <table cellspacing="0">
      <tr class="trth">
        <td colspan="2">
          <div class="tdSpilt">
            <div>
              <h6>Applicant Information</h6>
              <p>Personal details and application</p>
            </div>
            <img :src="user.img" :alt="user.name">
          </div>
        </td>
      </tr>
      <tr>
        <td>Full Name</td>
        <td>
          <h6>{{ user.name }}</h6>
        </td>
      </tr>
      <tr>
        <td>Known For</td>
        <td>
          <h6>
            {{ user.title }}
          </h6>
        </td>
      </tr>
      <tr>
        <td>Email Address</td>
        <td>
          <p>{{ user.email }}</p>
        </td>
      </tr>
      <tr>
        <td>Department</td>
        <td>
          <p>{{ user.department }}</p>
        </td>
      </tr>
    </table>
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

<style scoped>
.tableContainer {
  width: 80%;
  margin: 0 auto;
  overflow-x: auto;
}
table {
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: left;
  border-radius: 5px;
  overflow: hidden;
}
tr.trth {
  background-color: rgba(0, 0, 0, 0.05);
}
tr:nth-child(odd){
  background-color: rgba(0, 0, 0, 0.025);
}
th,
td {
  padding: 15px;
}
td:nth-child(odd) {
  border-right: 1px solid rgba(0, 0, 0, 0.05);
}
.tdSpilt {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
img {
  height: 70px;
  width: auto;
  margin-left: 15px;
}
h6 {
  font-size: 18px;
  margin: 0;
  margin-bottom: 5px;
}
p {
  margin: 0;
}
</style>
