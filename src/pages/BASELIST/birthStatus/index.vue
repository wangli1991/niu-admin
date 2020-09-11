<!--
 * @Author: 王利
 * @Date: 2020-07-20 06:38:17
 * @LastEditors: 王利
 * @LastEditTime: 2020-09-10 13:28:16
-->
<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        新建
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="danger" icon="el-icon-delete" @click="toggleSelection()">
        批量删除
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
import waves from '@/directive/waves'; // waves directive
import { parseTime } from '@/utils';

export default {
  directives: { waves },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id',
      },
      textMap: {
        update: 'Edit',
        create: 'Create',
      },
      creatDrawerVisible: false,
      direction: 'rtl',
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      getList().then((res) => {
        console.log(res);
        if (res.status === 'S') {
          this.list = res.data;
          this.total = res.data.length;
        }
        this.listLoading = false;
      });
    },
    handleCreate() {
      this.creatDrawerVisible = true;
    },
    handleEdit() {},
    handleDelete() {},
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      console.log(val);
    },
    handleClose() {
      this.creatDrawerVisible = false;
    },
  },
};
</script>
