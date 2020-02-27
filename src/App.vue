<template>
  <div>
    <el-page-header class="page-header" @back="goBack">
      <template slot="content">
        <img class="logo" src="./assets/crypto-infos-logo.png" />
        <span class="page-title">Blockchain Jobs</span>
      </template>
    </el-page-header>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapState(["adviewJobs"])
  },
  methods: {
    ...mapActions(["getAdviewJobs"]),

    goBack: () => window.open("https://cryptoinfos.eu/", "_self")
  },
  mounted() {
    this.getAdviewJobs();
  }
};
</script>

<style scoped>
.page-header {
  margin: 25px 15px;
}

.logo {
  position: absolute;
  height: 60px;
  top: 5px;
}

.page-title {
  margin-left: 115px;
}
</style>
