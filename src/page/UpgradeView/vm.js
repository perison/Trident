
import lodash from 'lodash'
export default {
  name: 'hello',
  data: function () {
    return {
      server: 'http://localhost:8090',
      code: -100,
      tableData: [],
      select_radio: '',
      radio_labels: [],
      information: {
        'PC':`升级方式：一共有"主动、提示、推荐"三种<br/>目标版本：表示从检测版本发起升级检查提示要升级到的版本<br/>升级状态："正常"表示升级检查的目标版本不存在强制/推荐升级，反之则显示"异常"`,
        'QQBroadcast':`升级方式：一共有"XXXXX"这几种<br/>目标版本：表示从检测版本发起升级检查提示要升级到的版本<br/>升级状态："正常"表示升级检查的目标版本不存在强制/推荐升级，反之则显示"异常"`
      },
    }
  },
  beforeMount() {
    //this.getTableData();
    this.getPlatforms();
  },
  methods: {
    printX () {
      //console.log(this.select_radio);
    },
    getPlatforms() {
      this.$http({
          method: 'get',
          url: this.server+'/api/updatechecker/',
        }
      ).then( response => {
        this.radio_labels = lodash.get(response,'data.data.platform',[]);
        if(this.radio_labels.length != 0) {
          this.select_radio = this.radio_labels[0];
        }
        //console.log(this.radio_labels);
      });
    },
    getTableData(platform) {
      this.$http({
          method: 'get',
          url: this.server+'/api/updatechecker/'+platform+'/',
        }
      ).then( response => {
          this.tableData = lodash.get(response,'data.data',[]);
          console.log(response);
      }).catch( error => {
          console.log(error);
          this.tableData = [];
      });
    },
  },
};
