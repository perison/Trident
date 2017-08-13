import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
import lodash from 'lodash'
export default {
  components: {ElButton},
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      code: -100,
      tableData: [],
    }
  },
  beforeMount() {
    this.getTableData();
  },
  methods: {
    printX () {
      console.log('perison');
    },
    getTableData() {
      this.$http({
          method: 'get',
          url: '/test',
        }
      ).then( response => {
          this.tableData = lodash.get(response,'data.data',[]);
          console.log(this.tableData);
      });
    },
  },
};
