<!--
 * @Author: 王利
 * @Date: 2020-08-10 14:28:54
 * @LastEditors: 王利
 * @LastEditTime: 2020-09-11 15:47:50
-->
<template>
  <div class="table-container">
    <el-table ref="multipleTable" :key="tableKey" v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="ID" prop="id" align="center" width="80">
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="健康状态" prop="name" align="center" width="80">
        <template slot-scope="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{ row, $index }">
          <el-button type="primary" size="mini" @click="handleEdit(row)"> 编辑 </el-button>
          <el-button v-if="row.status != 'deleted'" size="mini" type="danger" @click="handleDelete(row, $index)"> 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>
<script>
import { getList, fetchPv, createArticle, updateArticle } from '@/api/baseList';
import Pagination from '@/components/Pagination';
export default {
  name: 'VirtualTable',
  components: { Pagination },
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
    handleSelectionChange(val) {
      console.log(val);
    },
  },
};
</script>
