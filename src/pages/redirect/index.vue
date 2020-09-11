<!--
 * @Author: wangli
 * @Date: 2020-07-19 13:23:30
 * @LastEditors: wangli
 * @LastEditTime: 2020-07-26 19:07:55
-->
<script>
export default {
  created() {
    const { params, query } = this.$route;
    const { path } = params;
    this.$router.replace({ path: '/' + path, query });
  },
  render: function(h) {
    return h(); // avoid warning message
  }
};
</script>
