<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <span style="color: #0f0f0f;margin-left: 5px;left: 550px;position: relative;font-size: 20px">员工信息查询</span>

        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box">
        <el-input placeholder="请输入员工姓名" style="left: 200px;position: relative;width: 200px;">
        </el-input>
        <el-button icon="el-icon-search" type="primary" style="left: 200px;position: relative;">搜索</el-button>
        <br><br>
        <el-row>

          <el-table style="width: 800px;left: 200px;position: relative;">
            <el-table-column prop="workerid" label="员工id" width="250">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="250">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>

        </el-row>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "employeeSearch"
}
</script>

<style scoped>

</style>
