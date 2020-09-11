<!--
 * @Author: 王利
 * @Date: 2020-07-20 06:38:17
 * @LastEditors: 王利
 * @LastEditTime: 2020-09-10 14:30:00
-->
<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        新建
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="danger" icon="el-icon-delete" @click="handleDelete()">
        删除
      </el-button>
    </div>
    <virtual-table> </virtual-table>
    <el-drawer title="我是标题" :visible.sync="creatDrawerVisible" :direction="direction" :before-close="handleClose">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
import { getList, fetchPv, createArticle, updateArticle } from '@/api/baseList';
import waves from '@/directive/waves';
import { parseTime } from '@/utils';

export default {
  directives: { waves },
  data() {
    return {
      direction: 'rtl',
      creatDrawerVisible: false,
    };
  },
  methods: {
    handleCreate() {
      this.creatDrawerVisible = true;
    },
    handleEdit() {},
    handleDelete() {},
    handleClose() {
      this.creatDrawerVisible = false;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
  },
};
</script>
