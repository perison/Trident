import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
import lodash from 'lodash'
export default {
  components: {ElButton},
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      code:-100,
    }
  },
  methods: {
    printX () {
      console.log('perison');
    },
    getXXX () {
      this.$http({
          method: 'get',
          url: '/test',
        }
      ).then( response => {
          this.code = lodash.get(response,'data.erer',10000);
          console.log(this.code);
      });
    },
  },
};
