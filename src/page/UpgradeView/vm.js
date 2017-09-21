
import lodash from 'lodash'
export default {
  name: 'hello',
  data: function () {
    return {
      server: 'http://10.125.38.70:9100',
      code: -100,
      tableData: [],
      table_loading: false,
      select_radio: '',
      radio_loading: false,
      radio_labels: [],
      information: {
        'pc':`升级方式：一共有"主动、提示、推荐"三种<br/>目标版本：表示从检测版本发起升级检查提示要升级到的版本<br/>升级状态："正常"表示升级检查的目标版本不存在强制/推荐升级，反之则显示"异常"`,
        'qqlivebroadcast':`升级方式：分为自动和手动两种<br/>升级方式说明：“自动”升级方式是打开app即提示最新的版本升级信息，“手动”升级方式是需要用户在设置界面点击触发。<br/>升级状态说明：升级校验分为两个部分：第一是升级配置中的版本信息是否填写有误，第二是下载的包体版本是否与配置的版本相符`,
        'default':`加载信息出错，请刷新页面重试`,
      },
    }
  },
  beforeMount() {
    this.getPlatforms();
  },
  methods: {
    printX () {
      //console.log(this.select_radio);
    },

    getPlatforms() {
      this.radio_loading = true;
      this.$http({
          method: 'get',
          url: this.server+'/api/updatechecker/',
        }
      ).then( response => {
        if(lodash.get(response,'data.code',-1) === 0) {
          this.radio_labels = lodash.get(response,'data.data.platforms',[]);
          if(this.radio_labels.length != 0) {
            this.select_radio = this.radio_labels[0];
          }
        } else {
          this.$notify({
            title: '加载平台信息出错',
            message: (lodash.get(response,'data.msg','unknown error'))
          });
          this.select_radio = 'default';
        }

        //console.log(this.radio_labels);
        this.radio_loading = false;
      }).catch( error => {
        console.log(error);
        this.radio_labels = [];
        this.select_radio = 'default';
        this.radio_loading = false;
      });
    },

    getTableData(platform) {
      this.table_loading = true;
      this.$http({
          method: 'get',
          url: this.server+'/api/updatechecker/'+platform+'/',
        }
      ).then( response => {
        if(lodash.get(response,'data.code',-1) === 0) {
          this.tableData = lodash.get(response,'data.data',[]);
          console.log(response);
        } else {
          this.$notify({
            title: '加载升级信息出错',
            message: (lodash.get(response,'data.msg','unknown error'))
          });
        }
        this.table_loading = false;
      }).catch( error => {
          console.log(error);
          this.tableData = [];
          this.table_loading = false;
      });
    },
  },
};
