<template>
  <!--<div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="getXXX">heihei</el-button>
  </div>-->
  <el-table
    :data="tableData"
    border
    style="">
    <el-table-column
      prop="platform"
      label="平台"
      width="180">
    </el-table-column>
    <el-table-column
      prop="updateType"
      label="升级方式">
    </el-table-column>
    <el-table-column
      prop="version"
      label="待升级版本"
      width="180">
    </el-table-column>
    <el-table-column
      prop="updatetoversion"
      label="升级目标版本">
    </el-table-column>
  </el-table>
</template>

<script>
export { default }  from './vm'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
-->
