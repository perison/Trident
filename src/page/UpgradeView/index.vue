<template>
  <div>
    <div class="div-radio">
      <el-radio-group v-model="select_radio" @change="getTableData">
        <el-radio v-for="item in radio_labels" :key="item" :label="item"></el-radio>
      </el-radio-group>
    </div>
    <div class="div-infomation">
      <el-tooltip>
        <div slot="content" v-html="information[select_radio]">{{information}}</div>
        <i class="el-icon-information"> 结果说明</i>
      </el-tooltip>
    </div>
    <el-table
      :data="tableData"
      border
      style="">
      <el-table-column
        prop="version"
        label="检测版本">
      </el-table-column>
      <el-table-column
        prop="info"
        label="检查结果">
        <template scope="scope">
          <div class="div-box" v-for="item in scope.row.info">
            <div class="div-inline">升级方式：<span class="span-color">{{ item.updateType }}</span></div>
            <div class="div-inline">目标版本：<span class="span-color">{{ item.updateToVersion }}</span></div>
            <div class="div-inline" v-if="item.checkReq === 0">升级状态：<span class="status-right">正常</span></div>
            <div class="div-inline" v-else>升级状态：<span class="status-wrong">异常</span></div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export {default} from './vm'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

  .div-radio {
    float: left;
    margin: 12px 10px;
  }

  .div-infomation {
    float: right;
    margin: 12px 10px;
    font-size: 14px;
  }

  .div-box {
    margin: 12px 0;
  }

  .span-color {
    color: blue;
    font-weight: bolder;
  }

  .status-right {
    color: #13ce66;
    font-weight: bolder;
  }

  .status-wrong {
    color: #ff4949;
    font-weight: bolder;
  }

  .div-inline {
    display: inline;
    margin: 0 10px;
  }


</style>

