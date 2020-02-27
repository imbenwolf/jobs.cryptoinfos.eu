<template>
  <div>
    <el-page-header class="page-header" @back="goBack">
      <template slot="content">
        <img class="logo" src="./assets/crypto-infos-logo.png" />
        <span class="page-title">Blockchain Jobs</span>
      </template>
    </el-page-header>
    <div>content</div>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    goBack: () => window.open("https://cryptoinfos.eu/", "_self")
  }
};
</script>

<style>
.page-header {
  margin: 25px 15px;
}

.page-title {
  margin-left: 115px;
}

.logo {
  position: absolute;
  height: 60px;
  top: 5px;
}
</style>
